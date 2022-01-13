const { UserModel } = require('../db/models')
const AuthError = require('../exception/AuthError')
const UserDto = require('../dto/UserDto')
const AuthService = require('./AuthService')
const UserPictureService = require('./UserPictureService')
const bcrypt = require('bcrypt')
const request = require('request')


class UserService {
	async getUserByEmail(email) {
		const checkUserExists = await UserModel.findOne({
			raw: true,
			where: {
				email
			}
		})

		return checkUserExists
	}

    async checkEmailExists(email) {
        const checkUserExists = await this.getUserByEmail(email)

        if (checkUserExists) {
            throw AuthError.EmailExistsError()
        }

        return checkUserExists
    }

    checkProfileType(profileType) {
        if (profileType != 'client' && profileType != 'worker') {
            throw AuthError.BadRequestError()
        }
    }

	async generateAndSaveTokens(user, deviceName) {
		const userData = new UserDto(user)
        const tokens = await AuthService.generateTokens({...userData})
        await AuthService.saveAuthData(userData.id, deviceName, tokens)
		
        return {userData, ...tokens}	
	}

    async register(
        email, 
        firstName, 
        lastName, 
        password, 
        profileType, 
        deviceName
	) {
        // check if all data specefied
        if (!email || !firstName || !lastName || !password || !profileType) {
            throw AuthError.BadRequestError(['required data not specefied'])
        }
        
        // check if selected profile type
        this.checkProfileType(profileType)

        // check if user with specefied email exists
        await this.checkEmailExists(email)

        // if password exists hash it else save null
        const hashedPassword = bcrypt.hashSync(password, 1)
       
        // crete new user
        const newUser = await UserModel.create({
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: hashedPassword,
            profileType: profileType,
        })
		
        return await this.generateAndSaveTokens(newUser, deviceName)
    }

    async login(email, password, deviceName) {
        // check if user exists
        const loginUser = await UserModel.findOne({
            raw: true,
            where: {
                email,
            },
        })

        if (!loginUser) {
            throw AuthError.EmailNotExistsError()
        }

        // check password
        const passwordIsValid = bcrypt.compare(password, loginUser.password)

        if (!passwordIsValid) {
            throw AuthError.BadPasswordError()
        }

		return await this.generateAndSaveTokens(loginUser, deviceName)
    }

    async logout(accessToken, refreshToken, deviceName) {
        // get user id from accessToken or refreshToken
        const decodedToken = accessToken 
            ? await AuthService.verifyAccessToken(accessToken)
            : refreshToken 
                ? await AuthService.verifyRefreshToken(refreshToken) 
                : null

        decodedToken
            ? decodedToken.hasOwnProperty('id') 
                ? await AuthService.removeAuthData(decodedToken.id, deviceName) 
                : null
            : null 
    }

    async refresh(refreshToken, deviceName) {
        // decode refreshToken
        const decodedToken = await AuthService.verifyRefreshToken(refreshToken)

        if (decodedToken) {
            // check if use with id from refreshToken exists
            const checkUser = await this.getUserByEmail(decodedToken.email)

            // if user exists generate new tokens
            if (checkUser) {
				return await this.generateAndSaveTokens(checkUser, deviceName)
            }
            else {
                throw AuthError.BadRequestError(['User not exists'])
            }

        }
        else {
            throw AuthError.BadRefreshToken()
        }
    }

	async savePhotoId(id, photoID) {
		const withPhoto = await UserModel.update({
				photoID,
			},
			{
				where: {
					id
				}
			}
		)

		return withPhoto
	}

	async withGoogle(profileData, deviceName, googleToken) {
		if (!profileData.email) {
			throw AuthError.BadRequestError(['code was invalid'])
		}
		const candedat = await this.getUserByEmail(profileData.email)

		if (candedat) {
			return await this.generateAndSaveTokens(candedat, deviceName)
		}
		else {
			const uploadAndSavePicture = async (pictureUrl) => {
				const picture = request(pictureUrl)
				const savedPicture = await UserPictureService.savePicture(picture, pictureUrl)
				return savedPicture.dataValues.id
			}

			const savedPicture = profileData.picture ? await uploadAndSavePicture(profileData.picture) : null

			const newUser = await UserModel.create({
				email: profileData.email,
				firstName: profileData.given_name,
				lastName: profileData.family_name,
				profileType: 'client',
				deviceName,
				pictureID: savedPicture,
				googleAccessToken: googleToken.access_token,
				googleRefreshToken: googleToken.refresh_token,
				googleIdToken: googleToken.id_token,
			})

			return await this.generateAndSaveTokens(newUser, deviceName)
		}
	}
}


module.exports = new UserService()
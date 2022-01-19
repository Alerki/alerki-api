const request = require('supertest')
const {extractCookies} = require('../utils/extractCookies')
const app = require('../app')
const usersData = require('./data/authData')

const rushUsers = usersData.rushUsers
const badUsers = usersData.badUsers
const sameEmail = usersData.sameEmail
const userProfiles = usersData.userProfiles


async function registerUser(body) {
    const r = await request(app)
        .post('/auth/register')
        .send(body)

    if (r.statusCode == 200) {
        const accessToken = r.body.accessToken
        const refreshToken = extractCookies(r.headers).refreshToken.value

        return {
            response: r,
            statusCode: r.statusCode,
            userData: {
                accessToken,
                refreshToken,
            },
        }
    }
    else {
        return {
            response: r,
            statusCode: r.statusCode,
        }
    }
}

async function refresh(refreshToken) {
    const r = await request(app)
        .get('/auth/refresh')
        .set('Cookie', ['refreshToken=' + refreshToken])

    if (r.statusCode == 200) {
        const accessToken = r.body.accessToken
        const refreshToken = extractCookies(r.headers).refreshToken.value

        return {
            response: r,
            statusCode: r.statusCode,
            userData: {
                accessToken,
                refreshToken,
            },
        }
    }
    else {
        return {
            response: r,
            statusCode: r.statusCode,
        }
    }
}

async function login(body) {
    const r = await request(app)
        .post('/auth/log-in')
        .send(body)

    if (r.statusCode == 200) {
        const accessToken = r.body.accessToken
        const refreshToken = extractCookies(r.headers).refreshToken.value

        return {
            response: r,
            statusCode: r.statusCode,
            userData: {
                accessToken,
                refreshToken,
            },
        }
    }
    else {
        return {
            response: r,
            statusCode: r.statusCode,
        }
    }
}

function saveWorkerData(data) {
    userProfiles.worker = {
        ...userProfiles.worker,
        ...data
    }
}

function saveClientData(data) {
    userProfiles.client = {
        ...userProfiles.client,
        ...data
    }
}

describe('Test authentication', () => {
    describe('register', () => {
        test('few users with correct parammeters', async () => {
            for (const data of rushUsers) {
                const r = await registerUser(data)

                expect(r.statusCode).toBe(200)
            }
        })

        test('with incorrect parammeters', async () => {
            for (const data of badUsers) {
                const r = await registerUser(data)

                expect(r.statusCode).toBe(400)
            }
        })

        test('with same emails', async () => {
            const r = await registerUser(sameEmail)
            
            expect(r.statusCode).toBe(400)
        })

        test('client', async () => {
            const r = await registerUser(userProfiles.client)

            expect(r.statusCode).toBe(200)

            saveClientData(r.userData)
        })

        test('worker', async () => {
            const r = await registerUser(userProfiles.worker)

            expect(r.statusCode).toBe(200)
            
            saveWorkerData(r.userData)
        })
    })

    describe('refresh', () => {
        test('with correct refreshToken', async () => {
            const r = await refresh(userProfiles.client.refreshToken)

            expect(r.statusCode).toBe(200)

            saveClientData(r.userData)
        })        

        test('with incorrect refreshToken', async () => {
            const r = await refresh('asdf')

            expect(r.statusCode).toBe(400)
        })
    })

    describe('logout', () => {
        test('client', async () => {
            const r = await request(app)
                .get('/auth/log-out')
                .set('Cookie', ['refreshToken=' + userProfiles.client.refreshToken])

            expect(r.statusCode).toBe(200)
        })

        test('client with bad parameters', async () => {
            const r = await request(app)
                .get('/auth/log-out')

            expect(r.statusCode).toBe(400)
        })
    }) 

    describe('login', () => {
        test('with bad password', async () => {
            const r = await login({
                email: userProfiles.client.email,
                password: 'bas password'    
            })
            
            expect(r.statusCode).toBe(400)
        })
        
        test('with bad email', async () => {
            const r = await login({
                email: 'bad email',
                password: 'bas password'    
            })
            
            expect(r.statusCode).toBe(400)
        })
        
        test('without parameters', async () => {
            const r = await login({})
            
            expect(r.statusCode).toBe(400)
        })

        test('with correct parameters', async () => {
            const r = await login(userProfiles.client)
    
            expect(r.statusCode).toBe(200)
            expect(r.userData.accessToken).toBeTruthy()
            expect(r.userData.refreshToken).toBeTruthy()
    
            saveClientData(r.userData)
        })
    })
})

const newServiceName = 'haircut'

describe('Test srevices', () => {
    describe('create', () => {
        test('service with corect parameters', async () => {
            const r = await request(app)
                .post('/services/create')
                .send({name: newServiceName})
    
            expect(r.statusCode).toBe(200)
        })
    
        test('service with incorect parameters', async () => {
            const r = await request(app)
                .post('/services/create')
    
            expect(r.statusCode).toBe(400)
        })
    })

    describe('find', () => {
        test('service with corect query', async () => {
            const r = await request(app)
                .get('/services/find')
                .query({name: newServiceName})
            
            expect(r.statusCode).toBe(200)
            expect(r.body[0].name).toBe(newServiceName)
        })
    
        test('service without query', async () => {
            const r = await request(app)
                .get('/services/find')
            
            expect(r.statusCode).toBe(400)
        })
    
        test('service with not exists service name', async () => {
            const r = await request(app)
                .get('/services/find')
                .query({name: 'not exists name'})
            
            expect(r.statusCode).toBe(404)
        })
    })
})

import axios from 'axios'
import * as types from '../types/profileTypes'
import Cookies from 'js-cookie'
import Router from 'next/router'


const API_URL = process.env.API_URL

const makeAction = (action) => {
    return {
        type: action,
    }
}
const makeActionWithPayload = (action, payload) => {
    return {
        type: action,
        payload,
    }
}

// register
const register = ({email, username, profileType, password}) => {
    return async dispatch => {
        dispatch(makeAction(types.PROFILE_REGISTER))
        
        await axios({
            method: 'post',
            url: API_URL + '/auth/register',
            data: {
                email,
                username,
                password,
                profileType,
            }
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.PROFILE_REGISTER_SUCCESS, r.data))
            })
            .catch(e => {
                dispatch(makeActionWithPayload(types.PROFILE_REGISTER_ERROR, e.response.data))
            }) 
    }
}

// log-in
const logIn = ({email, username, password}) => {
    return async dispatch => {
        dispatch(makeAction(types.PROFILE_LOGIN))
        
        await axios({
            method: 'post',
            url: API_URL + '/auth/log-in',
            data: {
                email,
                username,
                password,
            },
            withCredentials: true
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.PROFILE_LOGIN_SUCCESS, r.data.userData))

                if (Cookies.get('accessToken') || Cookies.get('refreshToken')) {
                    Router.push('/')
                }
            })
            .catch(e => {
                alert(e)
                dispatch(makeActionWithPayload(types.PROFILE_LOGIN_ERROR, e.response?.data))
            }) 
    }
}

// with Google
const withGoogle = (code) => {
    return async dispatch => {
        dispatch(makeAction(types.PROFILE_WITH_GOOGLE))
        
        await axios({
            method: 'get',
            url: API_URL + '/auth/callback/google',
            params: {
                code,
            },
            withCredentials: true
        })
            .then(r => {
                dispatch(makeActionWithPayload(types.PROFILE_WITH_GOOGLE_SUCCESS, r.data.userData))
            })
            .catch(e => {
                dispatch(makeActionWithPayload(types.PROFILE_WITH_GOOGLE_ERROR, e.response?.data))
            }) 
    }
}

export default {
    register,
    logIn,
    withGoogle,
}

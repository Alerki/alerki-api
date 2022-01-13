const Router = require('express')
const AuthController = require('../controller/AuthController')
const router = new Router()


router
    .post('/register', AuthController.register)
    .post('/log-in', AuthController.login)

router
    .get('/log-out', AuthController.logout)
    .get('/refresh', AuthController.refresh)
    .get('/with/google', AuthController.withGoogle)
    .get('/callback/google', AuthController.callbackGoogle)


module.exports = router

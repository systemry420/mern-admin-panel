import { Router } from 'express'
import { 
    AuthenticatedUser, 
    Login, Logout, 
    Register, 
    UpdateInfo, UpdatePassword 
} from './controller/auth.controller'
import { AuthMiddleware } from './middleware/auth.middleware'

export const routes = (router: Router) => {
    router.post('/api/register', Register)
    router.post('/api/login', Login)
    router.post('/api/user', AuthMiddleware, AuthenticatedUser)
    router.post('/api/logout', AuthMiddleware, Logout)
    router.post('/api/info', AuthMiddleware, UpdateInfo)
    router.post('/api/password', AuthMiddleware, UpdatePassword)
}
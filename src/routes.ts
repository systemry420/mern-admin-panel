import { Router } from 'express'
import { 
    AuthenticatedUser, 
    Login, Logout, 
    Register, 
    UpdateInfo, UpdatePassword 
} from './controller/auth.controller'
import { CreateUser, DeleteUser, GetAllUsers, GetUserById, UpdateUser } from './controller/user.controller'
import { AuthMiddleware } from './middleware/auth.middleware'

export const routes = (router: Router) => {
    router.post('/api/register', Register)
    router.post('/api/login', Login)
    router.post('/api/user', AuthMiddleware, AuthenticatedUser)
    router.post('/api/user/logout', AuthMiddleware, Logout)
    router.put('/api/user/info', AuthMiddleware, UpdateInfo)
    router.put('/api/user/password', AuthMiddleware, UpdatePassword)

    router.get('/api/users', GetAllUsers)
    router.post('/api/users/create', CreateUser)
    router.get('/api/users/:id', GetUserById)
    router.put('/api/users/:id', UpdateUser)
    router.delete('/api/users/:id', DeleteUser)
}
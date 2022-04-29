import { Router } from 'express'
import { 
    AuthenticatedUser, 
    Login, Logout, 
    Register, 
    UpdateInfo, UpdatePassword 
} from './controller/auth.controller'
import { GetRole, GetRoles } from './controller/role.controller'
import { CreateUser, DeleteUser, GetAllUsers, GetUserByEmail, GetUserById, UpdateUser } from './controller/user.controller'
import { AuthMiddleware } from './middleware/auth.middleware'
import { GetAllProducts, GetProductById, CreateProduct, UpdateProduct, DeleteProduct, UploadImage } from './controller/product.controller';
import { GetAllOrders } from './controller/order.controlles'
const express = require('express')

export const routes = (router: Router) => {
    router.post('/api/register', Register)
    router.post('/api/login', Login)
    router.post('/api/user', AuthMiddleware, AuthenticatedUser)
    router.post('/api/user/logout', AuthMiddleware, Logout)
    router.put('/api/user/info', AuthMiddleware, UpdateInfo)
    router.put('/api/user/password', AuthMiddleware, UpdatePassword)

    router.get('/api/user', AuthMiddleware, GetUserByEmail)
    router.get('/api/users', GetAllUsers)
    router.post('/api/users/create', AuthMiddleware, CreateUser)
    router.get('/api/users/:id', AuthMiddleware, GetUserById)
    router.put('/api/users/:id', AuthMiddleware, UpdateUser)
    router.delete('/api/users/:id', DeleteUser)

    router.get('/api/roles', AuthMiddleware, GetRoles)
    router.get('/api/roles/:id', AuthMiddleware, GetRole)

    router.get('/api/products', GetAllProducts)
    router.post('/api/products/create', CreateProduct)
    router.get('/api/products/:id', GetProductById)
    router.put('/api/products/:id', UpdateProduct)
    router.delete('/api/products/:id', DeleteProduct) 

    router.post('/api/upload', UploadImage)
    router.use('/api/uploads', express.static('./uploads'))

    router.get('/api/orders', GetAllOrders)
}
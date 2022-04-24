import { Permission } from '../entity/permission.entity';
import { Role } from '../entity/role.entity';
import { AppDataSource } from './../index';


AppDataSource.initialize()
    .then(async conn => {
        const repo = AppDataSource.getRepository(Permission)

        const perms = [
            'view_users', 'edit_users',
            'view_roles', 'edit_roles',
            'view_products', 'edit_products',
            'view_orders', 'edit_orders',
        ]


        const permissions = []

        perms.forEach(async perm => {
            permissions.push(await repo.save({
                name: perm
            }))
        })

        const roles = AppDataSource.getRepository(Role)

        await roles.save({
            name: 'Admin',
            permissions
        })

        delete permissions[2]
        delete permissions[3]

        await roles.save({
            name: 'Editor',
            permissions
        })

        delete permissions[5]
        delete permissions[7]

        await roles.save({
            name: 'Viewer',
            permissions
        })

        // process.exit(0)
    })
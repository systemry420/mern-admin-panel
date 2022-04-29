import { OrderItem } from './../entity/order-item.entity';
import { Order } from './../entity/order.entity';
import { AppDataSource } from './../index';
import { faker } from "@faker-js/faker";

AppDataSource.initialize()
    .then(async conn => {

        const orderRepo = AppDataSource.getRepository(Order)
        const itemRepo = AppDataSource.getRepository(OrderItem)

        for (let i = 0; i < 30; i++) {
            await orderRepo.save({
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                email: faker.internet.email(),
            })
        .then(()=> {
            console.log('saved');
            
        })
            
            // for (let j = 0; j < Math.floor(Math.random() * 5); j++) {
            //     itemRepo.save({
            //         // order,
            //         // title: faker.name.firstName(),
            //         // price: faker.commerce.price(),
            //         // quantity: faker.commerce.price(),
            // }        
        }
    })
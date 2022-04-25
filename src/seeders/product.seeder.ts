import { Product } from './../entity/product.entity';
import { AppDataSource } from './../index';
import { faker } from "@faker-js/faker";

AppDataSource.initialize()
    .then(async conn => {

        const repo = AppDataSource.getRepository(Product)

        for (let i = 0; i < 30; i++) {
            repo.save({
                title: faker.lorem.words(2),
                description: faker.lorem.words(20),
                image: faker.image.imageUrl(200, 200, '', true),
                price: faker.commerce.price()
            }).then(() => {
                console.log('saved');
                
            })            
        }
    })
import { Order } from './../entity/order.entity';
import { AppDataSource } from './../index';
export const GetAllOrders = async (req, res) => {
    const repo = AppDataSource.getRepository(Order)

    const take = 10;
    const page = parseInt(req.query.page as string || '1')


    const [data, total] = await repo.findAndCount({
        take,
        skip: (page -  1) * take
    })

    res.send({
        data,
        meta: {
            total, page,
            last_page: Math.ceil(total / take)
        }
    })
}
import { Order, OrderRepository } from '@delivery/core';
import { Injectable } from '@nestjs/common';
import { DBConfig } from '../config/db.config';
import { OrderEntity } from '../entities/order.entity';

@Injectable()
export class OrderRepositoryImpl implements OrderRepository {
    constructor(
        private dbConfig: DBConfig
    ) {}
    async persist(order: Order): Promise<Order> {
        console.log("IN_ORDER_REPO_IMPLE_PERSIST");
        const orderRepo = this.dbConfig.dataSource.getRepository(OrderEntity);
        const orderIns = orderRepo.create({
            id: order.id,
            status: order.status,
            orderItems: JSON.stringify(order.orderItems)
        });
        await orderRepo.save(orderIns);
        return order;
    }
    async getById(id: number): Promise<Order> {
        const orderRepo = this.dbConfig.dataSource.getRepository(OrderEntity);
        const order = await orderRepo.findOne({
            where: {
                id
            }
        });
        return order?.fromThis() ?? null;
    }

}
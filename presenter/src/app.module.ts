import { CreateOrderUseCase, OrderRepository } from '@delivery/core';
import { DBConfig, OrderDataModule } from '@delivery/data';
import { Inject, Module, OnModuleInit } from '@nestjs/common';
import { OrderController } from './controller/order.controller';


@Module({
    controllers: [OrderController],
    imports: [
        OrderDataModule
    ],
    providers: [
        {
            provide: CreateOrderUseCase,
            useFactory: (orderRepository: OrderRepository) => {
                return new CreateOrderUseCase(orderRepository);
            },
            inject: [OrderRepository]
        }
    ]
})
export class AppModule implements OnModuleInit {
    constructor(private dbConfig: DBConfig) {}
    async onModuleInit() {
        await this.dbConfig.init({
            host: "localhost",
            port: 25101,
            password: "root",
            database: "cheq_dev_local",
            username: "mysql",
            logging: true
        })
    }

 }

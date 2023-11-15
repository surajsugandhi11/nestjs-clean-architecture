import { Module } from "@nestjs/common";
import { DBConfig } from "./config/db.config";
import { OrderRepository } from "@delivery/core";
import { OrderRepositoryImpl } from "./repositories/order.repository";

@Module({
    providers: [
        DBConfig,
        {
            provide: OrderRepository,
            useClass: OrderRepositoryImpl
        }
    ],
    exports: [
       OrderRepository,
       DBConfig
    ]
})
export class OrderDataModule {}

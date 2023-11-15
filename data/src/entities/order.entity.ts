import { Order } from '@delivery/core';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "orders" })
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: "text" })
    status: string;
    @Column({ type: "text" })
    orderItems: string;

    fromThis(): Order {
        const ord = new Order();
        ord.id = this.id;
        ord.orderItems = JSON.parse(this.orderItems);
        ord.status = this.status;
        return ord;
    }
}
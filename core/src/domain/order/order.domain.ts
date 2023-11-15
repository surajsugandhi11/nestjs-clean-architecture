import { OrderItem } from "./orderitem.domain";


export class Order {
    id: number;
    status: string;
    orderItems: OrderItem[];
}
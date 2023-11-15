import { Order } from "../../domain/order/order.domain";

export interface OrderRepository {
    persist(order: Order): Promise<Order>;
    getById(id: number): Promise<Order>;
}
export const OrderRepository = Symbol("domain.OrderRepository");
import { Order } from "../../domain/order/order.domain";
import { InputValues, OutputValues, UseCase } from "../UseCase";
import { OrderRepository } from "./order.repository";


export class CreateOrderOutputItem implements OutputValues {
    order: Order
    constructor(order: Order) {
        this.order = order;
    }
}
export class CreateOrderInputItem implements InputValues {
    id: number;
    quantity: number;
}
export class CreateOrderUseCase extends UseCase<CreateOrderInputItem, CreateOrderOutputItem> {

    constructor(private orderRepository: OrderRepository) {super();}
    public execute(input: CreateOrderInputItem): Promise<CreateOrderOutputItem> {
        return this.createOrder(input);
    }
    async createOrder(input: CreateOrderInputItem): Promise<CreateOrderOutputItem> {
        const order = new Order();
        order.id = input.id;
        const savedItem = await this.orderRepository.persist(order);
        return new CreateOrderOutputItem(savedItem);
    }


}
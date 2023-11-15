import { OrderItemRequest } from "./orderitem.request";


export class OrderRequest {
    storeId: number;
    orderItems: OrderItemRequest[];
}
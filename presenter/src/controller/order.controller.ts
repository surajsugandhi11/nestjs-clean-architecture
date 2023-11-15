import { CreateOrderUseCase } from "@delivery/core";
import { OrderRequest } from "../requests/order.request";
import { ApiResponse } from "../response/api.response";
import { OrderResource } from "./order.resource";
import { Controller, Post } from "@nestjs/common";

@Controller('/order')
export class OrderController implements OrderResource {
    constructor(
       private createOrderUseCase: CreateOrderUseCase
    ){}
    @Post('/create')
    async create(currentUser: any, requestBody: OrderRequest): Promise<ApiResponse> {
        console.log("REQUEST_BODY_", requestBody);
        await this.createOrderUseCase.createOrder({
            id: 1,
            quantity: 10
        });
        return new ApiResponse();
    }

}
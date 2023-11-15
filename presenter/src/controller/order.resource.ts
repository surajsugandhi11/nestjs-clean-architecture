import { OrderRequest } from "../requests/order.request";
import { ApiResponse } from "../response/api.response";

export interface OrderResource {
    create(
        currentUser: any,
        requestBody: OrderRequest
    ): Promise<ApiResponse>
}
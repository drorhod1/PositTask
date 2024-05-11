import { AxiosResponse } from "axios";
import { axiosClient } from "@/lib/api.client";
import { warehouseEndpoints } from "@/constants/stringRes";
import { IWarehouse } from "@/types/warehouse.type";

class WarehouseApi {
  public async getWarehouses(): Promise<AxiosResponse<IWarehouse[]>> {
    const response = await axiosClient.get(warehouseEndpoints.getAllWarehouses);
    return response;
  }
}

const warehouseApi = new WarehouseApi();
export default warehouseApi;

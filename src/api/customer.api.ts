import { AxiosResponse } from "axios";
import { axiosClient } from "@/lib/api.client";
import { customerEndpoints } from "@/constants/stringRes";
import { ICustomer } from "@/types/customers.type";

class CustomerApi {
  public async getTechnicians(): Promise<AxiosResponse<ICustomer[]>> {
    const response = await axiosClient.get(customerEndpoints.getAllCustomers);
    return response;
  }
}

const customerApi = new CustomerApi();
export default customerApi;

import { AxiosResponse } from "axios";
import { axiosClient } from "@/lib/api.client";
import { ITechnician } from "@/types/technician.type";
import { technicianEndpoints } from "@/constants/stringRes";

class TechnicianApi {
  public async getTechnicians(): Promise<AxiosResponse<ITechnician[]>> {
    const response = await axiosClient.get(
      technicianEndpoints.getAllTechnicians
    );
    return response;
  }
}

const technicianApi = new TechnicianApi();
export default technicianApi;

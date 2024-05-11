import { AxiosResponse } from "axios";
import { axiosClient } from "@/lib/api.client";
import { ticketEnpoints } from "@/constants/stringRes";
import { ITicket } from "@/types/tickets.type";

class TicketsApi {
  public async getTechnicianTickets(): Promise<AxiosResponse<ITicket[]>> {
    const response = await axiosClient.get(
      `${ticketEnpoints.getTechnicianTickets}`
    );
    return response;
  }
  public async getEmployeeOfTheMonth(): Promise<AxiosResponse<ITicket[]>> {
    const response = await axiosClient.get(
      `${ticketEnpoints.EmpoyeeOfTheMonth}`
    );
    return response;
  }
  public async getTicketsByTechId(
    id: number
  ): Promise<AxiosResponse<ITicket[]>> {
    const response = await axiosClient.get(
      `${ticketEnpoints.TicketsByTechId}/${id}`
    );
    return response;
  }
  public async createTicket(): Promise<AxiosResponse<ITicket[]>> {
    const response = await axiosClient.post(`${ticketEnpoints.createTicket}`);
    return response;
  }
  public async updateTicket(ticket: ITicket): Promise<AxiosResponse<ITicket>> {
    const response = await axiosClient.patch(
      `${ticketEnpoints.updateTicket}/${ticket.id}`,
      ticket
    );
    return response;
  }
  public async solveTicket(ticketId: number): Promise<AxiosResponse<ITicket>> {
    const response = await axiosClient.patch(
      `${ticketEnpoints.updateTicket}/${ticketId}`
    );
    return response;
  }
  public async deleteTicket(ticketId: number): Promise<AxiosResponse<ITicket>> {
    const response = await axiosClient.delete(
      `${ticketEnpoints.deleteTicket}/${ticketId}`
    );
    return response;
  }
}

const ticketsApi = new TicketsApi();
export default ticketsApi;

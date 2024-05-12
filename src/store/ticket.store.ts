import ticketsApi from "@/api/tickets.api";
import { ITechnician } from "@/types/technician.type";
import { ITicket, ITicketCreate } from "@/types/tickets.type";
import { create } from "zustand";

type TStore = {
  tickets?: ITicket[];
  currentTechnicianTickets?: ITicket[];
  employeeOfTheMonth?: ITechnician;
  setTickets: (tickets: ITicket[]) => void;
  getEmployeeOfTheMonth: () => Promise<void>;
  getTickets: () => Promise<void>;
  getTicketByTechnicianId: (technicianId: number) => Promise<void>;
  resolveTicket: (id: number, technicianId?: number) => Promise<void>;
  deleteTicket: (id: number) => Promise<void>;
  createTicket: (ticketInfo: ITicketCreate) => Promise<void>;
};

export const useTicketsStore = create<TStore>((set, get) => ({
  tickets: undefined,
  currentTechnicianTickets: undefined,
  employeeOfTheMonth: undefined,
  setTickets: (tickets: ITicket[]) => {
    set((state) => {
      return {
        ...state,
        tickets,
      };
    });
  },
  getTickets: async () => {
    try {
      const response = await ticketsApi.getTechnicianTickets();
      set((state) => {
        return {
          ...state,
          tickets: response.data,
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  getEmployeeOfTheMonth: async () => {
    try {
      const response = await ticketsApi.getEmployeeOfTheMonth();
      set((state) => {
        return {
          ...state,
          employeeOfTheMonth: response.data,
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  getTicketByTechnicianId: async (technicianId) => {
    try {
      const response = await ticketsApi.getTicketsByTechId(technicianId);
      set((state) => {
        return {
          ...state,
          currentTechnicianTickets: response.data,
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  resolveTicket: async (id, technicianId?) => {
    try {
      await ticketsApi.solveTicket(id);
      technicianId
        ? await get().getTicketByTechnicianId(technicianId)
        : await get().getTickets();
    } catch (error) {
      console.log(error);
    }
  },
  deleteTicket: async (id) => {
    try {
      await ticketsApi.deleteTicket(id);
      await get().getTickets();
    } catch (error) {
      console.log(error);
    }
  },
  createTicket: async (ticketInfo: ITicketCreate) => {
    try {
      await ticketsApi.createTicket(ticketInfo);
      await get().getTickets();
    } catch (error) {
      console.log(error);
    }
  },
}));

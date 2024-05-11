import customerApi from "@/api/customer.api";
import { ICustomer } from "@/types/customers.type";
import { create } from "zustand";

type TStore = {
  customers?: ICustomer[];
  getCustomers: () => Promise<ICustomer[] | undefined>;
};

export const useWarehousesStore = create<TStore>((set) => ({
  customers: undefined,
  getCustomers: async () => {
    try {
      const response = await customerApi.getTechnicians();
      set((state) => {
        return {
          ...state,
          customers: response.data,
        };
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
}));

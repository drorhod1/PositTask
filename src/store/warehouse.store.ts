import warehouseApi from "@/api/warehouse.api";
import { IWarehouse } from "@/types/warehouse.type";
import { create } from "zustand";

type TStore = {
  warehouses?: IWarehouse[];
  setWarehouses: (warehouses: IWarehouse[]) => void;
  getWarehouses: () => Promise<IWarehouse[] | undefined>;
};

export const useWarehousesStore = create<TStore>((set) => ({
  warehouses: undefined,
  setWarehouses: (warehouses: IWarehouse[]) => {
    set((state) => {
      return {
        ...state,
        warehouses,
      };
    });
  },
  getWarehouses: async () => {
    try {
      const response = await warehouseApi.getWarehouses();
      set((state) => {
        return {
          ...state,
          warehouses: response.data,
        };
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
}));

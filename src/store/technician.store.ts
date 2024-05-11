import technicianApi from "@/api/technician.api";
import { ITechnician } from "@/types/technician.type";
import { create } from "zustand";

type TStore = {
  technicians?: ITechnician[];
  selectedTech: number | undefined;
  setSelectedTech: (id: number) => void;
  getTechnicians: () => Promise<ITechnician[] | undefined>;
};

export const useTechnicianStore = create<TStore>((set) => ({
  technicians: undefined,
  selectedTech: undefined,
  getTechnicians: async () => {
    try {
      const response = await technicianApi.getTechnicians();
      set((state) => {
        return {
          ...state,
          technicians: response.data,
        };
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  setSelectedTech: (id: number) => {
    set((state) => {
      return {
        ...state,
        selectedTech: id,
      };
    });
  },
}));

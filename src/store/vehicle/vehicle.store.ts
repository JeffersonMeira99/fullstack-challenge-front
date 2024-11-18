import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Vehicles } from "../../types/vehicles";
import { VehiclesService } from "../../services/vehicles/vehicles";

interface VehicleState {
  vehicles: Vehicles[];
  fetchVehicles: (getDriversByCompany: number) => Promise<void>;
  addVehicle: (vehicle: Vehicles) => Promise<void>;
}

export const useVehicleStore = create<VehicleState>()(
  devtools((set) => ({
    vehicles: [],
    fetchVehicles: async (getDriversByCompany: number) => {
      const vehicles = await VehiclesService.fetchVehicles(getDriversByCompany);
      set({ vehicles });
    },
    addVehicle: async (vehicle) => {
      const newVehicle = await VehiclesService.createVehicles(vehicle);
      set((state) => ({ vehicles: [...state.vehicles, newVehicle] }));
    },
  }))
);

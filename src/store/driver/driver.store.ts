import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Driver } from "../../types/driver";
import { DriverService } from "../../services/driver/driver";

interface DriverState {
  drivers: Driver[];
  fetchDrivers: () => Promise<void>;
  addDriver: (driver: Driver) => Promise<void>;
}

export const useDriverStore = create<DriverState>()(
  devtools((set) => ({
    drivers: [],
    fetchDrivers: async () => {
      const drivers = await DriverService.fetchDrivers();
      set({ drivers });
    },
    addDriver: async (driver) => {
      const newDriver = await DriverService.createDriver(driver);
      set((state) => ({ drivers: [...state.drivers, newDriver] }));
    },
    findAllVehicles: async () => {
      const drivers = await DriverService.findAll();
      set({ drivers });
    },
  }))
);

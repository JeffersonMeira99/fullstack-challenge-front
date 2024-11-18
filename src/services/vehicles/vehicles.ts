import axios from "axios";
import { Vehicles } from "../../types/vehicles";
import { Driver } from "../../types/driver";

const api = axios.create({
  baseURL: "http://localhost:3003/api/",
});

export const VehiclesService = {
  fetchVehicles: async (getDriversByCompany: number): Promise<Vehicles[]> => {
    const response = await api.get(`/vehicles/driver/${getDriversByCompany}`);
    return response.data;
  },

  createVehicles: async (data: Vehicles): Promise<Vehicles> => {
    const response = await api.post("/vehicles", data);
    return response.data;
  },
};

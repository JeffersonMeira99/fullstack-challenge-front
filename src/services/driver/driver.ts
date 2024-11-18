import axios from "axios";
import { Driver } from "../../types/driver";

const api = axios.create({
  baseURL: "http://localhost:3003/api/",
});

export const DriverService = {
  fetchDrivers: async (): Promise<Driver[]> => {
    const response = await api.get("/drivers");
    return response.data;
  },

  findAll: async (): Promise<Driver[]> => {
    const response = await api.get("/vehicles/driver");
    return response.data;
  },
  createDriver: async (data: Driver): Promise<Driver> => {
    const response = await api.post("/drivers", data);
    return response.data;
  },
};

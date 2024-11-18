import axios from "axios";
import { Company } from "../../types/company";

const api = axios.create({
  baseURL: "http://localhost:3003/api/",
});

export const CompanyService = {
  fetchCompany: async (): Promise<Company[]> => {
    const response = await api.get("/companies");
    return response.data;
  },
  createCompany: async (data: Company): Promise<Company> => {
    const response = await api.post("/companies", data);
    return response.data;
  },
};

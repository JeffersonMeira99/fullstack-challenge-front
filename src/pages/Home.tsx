import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { VehiclesService } from "../services/vehicles/vehicles";
import { DriverService } from "../services/driver/driver";
import { SelectMui } from "../components/SelectMui";
import GenericDataGrid from "../components/GenericDataGrid";
import { GridRowsProp } from "@mui/x-data-grid";
import SuccessDialog from "../components/SuccessDialog";

export const Home = () => {
  const [driverId, setDriverId] = useState<number>(0);
  const [drivers, setDrivers] = useState<{ id: number; name: string }[]>([]);
  const [vehicles, setVehicles] = useState<GridRowsProp>([]);
  const [formData, setFormData] = useState({
    driver_id: 0,
    plate: "",
    model: "",
    type: "",
    capacity: "",
  });
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await DriverService.findAll();
        const formattedDrivers = response.map((driver) => ({
          id: driver.id,
          name: driver.first_name,
        }));
        setDrivers(formattedDrivers);
      } catch (error) {
        console.error("Erro ao carregar motoristas", error);
      }
    };
    fetchDrivers();
  }, []);

  const fetchVehicles = async () => {
    if (driverId) {
      try {
        const response = await VehiclesService.fetchVehicles(driverId);
        setVehicles(response);
      } catch (error) {
        console.error("Erro ao carregar veículos", error);
      }
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, [driverId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDriverSelectChangeForCreate = (
    e: SelectChangeEvent<string | number>
  ) => {
    const selectedDriverId = Number(e.target.value);
    setDriverId(selectedDriverId);
    setFormData((prevData) => ({
      ...prevData,
      driver_id: selectedDriverId,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await VehiclesService.createVehicles(formData);
      setOpenDialog(true);
      setFormData({
        driver_id: 0,
        plate: "",
        model: "",
        type: "",
        capacity: "",
      });
    } catch (error) {
      alert("Erro ao criar veículo.");
      console.error(error);
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    fetchVehicles();
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "plate", headerName: "Placa", width: 150 },
    { field: "model", headerName: "Modelo", width: 200 },
    { field: "type", headerName: "Tipo", width: 150 },
    { field: "capacity", headerName: "Capacidade", width: 150 },
  ];

  return (
    <Box
      sx={{
        width: 800,
        margin: "auto",
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Listar Veículos por Motorista
      </Typography>

      <SelectMui
        label="Motorista"
        value={driverId}
        onChange={handleDriverSelectChangeForCreate}
        items={drivers.map((driver) => ({
          id: driver.id,
          name: driver.name,
        }))}
      />

      <GenericDataGrid rows={vehicles} columns={columns} />

      <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>
        Criar Novo Veículo
      </Typography>

      <form onSubmit={handleSubmit}>
        <SelectMui
          label="Motorista"
          value={formData.driver_id}
          onChange={handleDriverSelectChangeForCreate}
          items={drivers.map((driver) => ({
            id: driver.id,
            name: driver.name,
          }))}
        />
        <TextField
          label="Placa"
          name="plate"
          value={formData.plate}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Modelo"
          name="model"
          value={formData.model}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Tipo"
          name="type"
          value={formData.type}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Capacidade"
          name="capacity"
          type="number"
          value={formData.capacity}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Criar Veículo
        </Button>
      </form>

      <SuccessDialog open={openDialog} onClose={handleDialogClose} />
    </Box>
  );
};

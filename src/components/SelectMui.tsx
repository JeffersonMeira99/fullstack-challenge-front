import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface SelectProps {
  label: string;
  value: number | string;
  onChange: (e: SelectChangeEvent<string | number>) => void;
  items: { id: number | string; name: string }[];
}

export const SelectMui: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  items,
}) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange} label={label}>
        {items.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

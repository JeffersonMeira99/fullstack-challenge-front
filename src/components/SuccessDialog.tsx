import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface SuccessDialogProps {
  open: boolean;
  onClose: () => void;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Veículo Criado</DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <CheckCircleIcon color="success" sx={{ fontSize: "98px" }} />
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          O veículo foi criado com sucesso!
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessDialog;

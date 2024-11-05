import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 30 },
  { field: "objeto", headerName: "Nome", width: 180 },
  { field: "contratante", headerName: "Contratante", width: 180 },
  { field: "dataInicio", headerName: "Data de Início", width: 130 },
  { field: "dataFim", headerName: "Data de Fim", width: 130 },
  { field: "tipoContrato", headerName: "Tipo de Contrato", width: 220 },
  { field: "statusExecucao", headerName: "Progresso (%)", width: 120 },
  { field: "gestorContrato", headerName: "Gestor", width: 120 },
  { field: "representante_legal", headerName: "Representante", width: 120 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({ rows }) {
  const [selectedContrato, setSelectedContrato] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleRowClick = (params) => {
    setSelectedContrato(params.row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedContrato(null);
  };

  return (
    <>
      <Paper sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
          onRowClick={handleRowClick}
        />
      </Paper>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle variant="h4">Detalhes do Contrato</DialogTitle>
        <DialogContent>
          {selectedContrato && (
            <>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#f9f9f9",
                  mb: 2,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  Objeto: {selectedContrato.objeto}
                </Typography>
                <Typography sx={{ mb: 1 }}>
                  <strong>Entrega / Serviço:</strong>{" "}
                  {selectedContrato.entregasServicos}
                </Typography>
                <Typography sx={{ mb: 1 }}>
                  <strong>Contratante:</strong> {selectedContrato.contratante}
                </Typography>
                <Typography sx={{ mb: 1 }}>
                  <strong>Início:</strong> {selectedContrato.dataInicio} -{" "}
                  <strong>Fim:</strong> {selectedContrato.dataFim}
                </Typography>
                <Typography sx={{ mb: 1 }}>
                  <strong>Tipo de Contrato:</strong>{" "}
                  {selectedContrato.tipoContrato}
                </Typography>
                <Typography sx={{ mb: 1 }}>
                  <strong>Valor:</strong> R$: {selectedContrato.valorContratado}
                </Typography>
                <Typography sx={{ mb: 1 }}>
                  <strong>Pagamento:</strong> {selectedContrato.formaPagamento}
                </Typography>
                <Typography sx={{ mb: 1 }}>
                  <strong>Andamento:</strong> {selectedContrato.statusExecucao}
                </Typography>
                <Typography sx={{ mb: 1 }}>
                  <strong>Gestor:</strong> {selectedContrato.gestorContrato}
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  <strong>Representante Legal:</strong>{" "}
                  {selectedContrato.representante_legal}
                </Typography>
                <Typography variant="body2" sx={{ color: "#555" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  nulla perspiciatis maxime eaque, id laboriosam eveniet
                  veritatis maiores! Doloribus sunt corrupti facere rem ipsum
                  necessitatibus vero molestiae, perspiciatis nam
                  exercitationem. Reprehenderit eos illo ipsa debitis
                  architecto! Nesciunt, iure? Possimus magni aperiam accusamus
                  provident iste natus illo nobis voluptate repellat
                  voluptatibus!
                </Typography>
              </Box>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

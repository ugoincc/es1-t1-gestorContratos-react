import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nome", headerName: "Nome", width: 200 },
  { field: "contratante", headerName: "Contratante", width: 180 },
  { field: "dataInicio", headerName: "Data de Início", width: 130 },
  { field: "dataFim", headerName: "Data de Fim", width: 130 },
  { field: "tipoContrato", headerName: "Tipo de Contrato", width: 250 },
  { field: "progresso", headerName: "Progresso", width: 120 },
  { field: "ativo", headerName: "Ativo", width: 120 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({ rows }) {
  return (
    <Paper sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

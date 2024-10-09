import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";

export default function ContractCard({ contratos }) {
  return (
    <Box>
      {contratos.map((contrato, index) => (
        <Card
          key={index}
          sx={{
            backgroundColor: "#fff",
            display: "flex",
            padding: 2,
            marginBottom: 1,
          }}
        >
          <Avatar
            src={contrato.icone}
            alt={`${contrato.nome} icon`}
            sx={{ width: 56, height: 56, marginRight: 2 }}
          />
          <Box
            sx={{
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <CardContent>
              <Typography variant="h6" component="div">
                {contrato.nome}
              </Typography>
              <Typography color="text.secondary">
                Contratante: {contrato.contratante}
              </Typography>
              <Typography color="text.secondary">
                Início: {contrato.dataInicio}
              </Typography>
              <Typography color="text.secondary">
                Fim: {contrato.dataFim}
              </Typography>
              <Typography color="text.secondary">
                Tipo de Contrato: {contrato.tipoContrato}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

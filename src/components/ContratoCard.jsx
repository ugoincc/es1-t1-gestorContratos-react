import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/system";

export default function ContractCard({ contratos }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const StyledBox = styled(Box)({
    maxHeight: "83vh",
    maxWidth: "50vw",
    overflowY: "auto",
    backgroundColor: "#fafafa",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: 2,
    border: "1px solid #fafafa",
    flexGrow: 1,
    "&::-webkit-scrollbar": {
      display: "none",
    },
  });

  return (
    <StyledBox>
      {contratos.map((contrato, index) => (
        <Card
          key={index}
          sx={{
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "row",
            padding: 2,
            margin: 1,
            alignItems: "center",
          }}
        >
          <Avatar
            src={contrato.icone}
            alt={`${contrato.nome} icon`}
            sx={{
              width: 56,
              height: 56,
              marginRight: isSmallScreen ? 0 : 2,
              marginBottom: isSmallScreen ? 2 : 0,
            }}
          />
          <Box
            sx={{
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "auto",
              width: isSmallScreen ? "100%" : 500,
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
    </StyledBox>
  );
}

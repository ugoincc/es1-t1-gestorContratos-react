import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Map from "./Map";

export default function ContractCard({ contratos }) {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [selectedContrato, setSelectedContrato] = React.useState(null);
  const [coordenadas, setCoordenadas] = React.useState(null);

  const handleOpen = (contrato) => {
    setSelectedContrato(contrato);
    setCoordenadas([contrato.cordx, contrato.cordy]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedContrato(null);
  };

  const StyledBox = styled(Box)({
    maxHeight: "83vh",
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
    <>
      <Map contratos={contratos} coordenadas={coordenadas} />
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
              cursor: "pointer",
              width: "100%",
            }}
            onClick={() => handleOpen(contrato)}
          >
            <Avatar
              src={contrato.icone}
              alt={`${contrato.objeto} icon`}
              sx={{
                width: 56,
                height: 56,
              }}
            />
            <Box>
              <CardContent>
                <Typography variant="h6" component="div">
                  {contrato.objeto}
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
                    Nome: {selectedContrato.objeto}
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
                    <strong>Valor:</strong> R$:{" "}
                    {selectedContrato.valorContratado}
                  </Typography>
                  <Typography sx={{ mb: 1 }}>
                    <strong>Pagamento:</strong>{" "}
                    {selectedContrato.formaPagamento}
                  </Typography>
                  <Typography sx={{ mb: 1 }}>
                    <strong>Andamento:</strong>{" "}
                    {selectedContrato.statusExecucao}
                  </Typography>
                  <Typography sx={{ mb: 1 }}>
                    <strong>Gestor:</strong> {selectedContrato.gestorContrato}
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    <strong>Representante Legal:</strong>{" "}
                    {selectedContrato.representante_legal}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro nulla perspiciatis maxime eaque, id laboriosam eveniet
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
      </StyledBox>
    </>
  );
}

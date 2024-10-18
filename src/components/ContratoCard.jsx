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
              alt={`${contrato.nome} icon`}
              sx={{
                width: 56,
                height: 56,
              }}
            />
            <Box>
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

        <Dialog open={open} onClose={handleClose} fullWidth>
          <DialogTitle>Detalhes do Contrato</DialogTitle>
          <DialogContent>
            {selectedContrato && (
              <>
                <Typography variant="h6">
                  Nome: {selectedContrato.nome}
                </Typography>
                <Typography>
                  Contratante: {selectedContrato.contratante}
                </Typography>
                <Typography>Início: {selectedContrato.dataInicio}</Typography>
                <Typography>Fim: {selectedContrato.dataFim}</Typography>
                <Typography>
                  Tipo de Contrato: {selectedContrato.tipoContrato}
                </Typography>
                <Typography>
                  Descrição: Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Porro nulla perspiciatis maxime eaque, id laboriosam
                  eveniet veritatis maiores! Doloribus sunt corrupti facere rem
                  ipsum necessitatibus vero molestiae, perspiciatis nam
                  exercitationem. Reprehenderit eos illo ipsa debitis
                  architecto! Nesciunt, iure? Possimus magni aperiam accusamus
                  provident iste natus illo nobis voluptate repellat
                  voluptatibus!
                </Typography>
                <Typography>Valor: R$ 5000,00</Typography>
                {/* Adicione mais informações conforme necessário */}
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

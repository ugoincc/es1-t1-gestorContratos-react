import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import axios from "axios";
import { useState } from "react";
import Button from "@mui/material/Button";
import DenseAppBar from "../components/MUI/DenseAppBar";
import { styled } from "@mui/material/styles";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import SearchAppBar from "../components/MUI/SearchAppBar";

const CustomAppBar = styled(DenseAppBar)({
  flexGrow: 0,
});

function CriarContrato() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const [formData, setFormData] = useState({
    objeto: "",
    entregasServicos: "",
    dataInicio: "",
    dataFim: "",
    valorContratado: "",
    formaPagamento: "",
    statusExecucao: "0",
    contratante: "",
    tipoContrato: "",
    representante_legal: "",
    gestorContrato: "",
    icone: "",
    cordx: "",
    cordy: "",
  });

  const tiposContrato = [
    {
      value: "Contrato de Parceria",
      label: "Contrato de Parceria",
    },
    {
      value: "Contrato de Manutenção",
      label: "Contrato de Manutenção",
    },
    {
      value: "Prestação de Serviços",
      label: "Prestação de Serviços",
    },
    {
      value: "Freelance",
      label: "Freelance",
    },
    {
      value: "Outro",
      label: "Outro",
    },
  ];

  const formasPagamento = [
    {
      value: "Pix",
      label: "Pix",
    },
    {
      value: "Crédito",
      label: "Crédito",
    },
    {
      value: "Débito",
      label: "Débito",
    },
    {
      value: "Dinheiro",
      label: "Dinheiro",
    },
    {
      value: "TED",
      label: "TED",
    },
    {
      value: "DOC",
      label: "DOC",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "valorContratado" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/contracts",
        formData
      );
      console.log("Contrato inserido com sucesso!", response.data);
    } catch (error) {
      console.error("Erro ao inserir contrato: ", error);
    }
  };

  return (
    <div className="container">
      <CustomAppBar pagename="Novo Contrato" />
      <form onSubmit={handleSubmit} id="contract-form">
        <div
          className="contDetails"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px",
          }}
        >
          <Typography variant="h6">Detalhes do Contrato</Typography>
          <TextField
            id="outlined-select-currency"
            select
            margin="normal"
            label="Tipo de Contrato"
            defaultValue=""
            helperText=""
            name="tipoContrato"
            value={formData.tipoContrato}
            onChange={handleChange}
            style={{ minWidth: "300px" }}
          >
            {tiposContrato.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            required
            id="standard-basic"
            label="Objeto do Contrato"
            variant="outlined"
            margin="normal"
            size="normal"
            name="objeto"
            value={formData.objeto}
            onChange={handleChange}
          />

          <TextField
            required
            id="standard-basic"
            label="Entrega de Serviços"
            variant="outlined"
            margin="normal"
            name="entregasServicos"
            value={formData.entregasServicos}
            onChange={handleChange}
          />
        </div>
        <div
          className="partesEnvolvidas"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px",
          }}
        >
          <Typography variant="h6">Partes Envolvidas</Typography>

          <TextField
            required
            id="standard-basic"
            label="Contratante"
            variant="outlined"
            margin="normal"
            name="contratante"
            value={formData.contratante}
            onChange={handleChange}
          />

          <TextField
            required
            id="standard-basic"
            label="Representante Legal"
            variant="outlined"
            margin="normal"
            name="representante_legal"
            value={formData.representante_legal}
            onChange={handleChange}
          />
          <TextField
            required
            id="standard-basic"
            label="Gestor"
            variant="outlined"
            margin="normal"
            name="gestorContrato"
            value={formData.gestorContrato}
            onChange={handleChange}
          />
        </div>

        <div className="dateandpay" style={{ margin: "20px" }}>
          <Typography variant="h6">Pagamento</Typography>
          <div className="payment">
            <FormControl variant="outlined" sx={{ width: "50" }}>
              <InputLabel htmlFor="standard-adornment-amount"></InputLabel>
              <Input
                id="standard-adornment-amount"
                type="number"
                required
                margin="normal"
                name="valorContratado"
                placeholder="5000,00"
                value={formData.valorContratado}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">R$</InputAdornment>
                }
              />
            </FormControl>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-select-currency"
              select
              required
              margin="normal"
              label="Forma de Pagamento"
              defaultValue=""
              helperText=""
              name="formaPagamento"
              value={formData.formaPagamento}
              onChange={handleChange}
            >
              {formasPagamento.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <div className="dates">
              <input
                type="date"
                name="dataInicio"
                value={formData.dataInicio}
                onChange={handleChange}
              />
              <input
                type="date"
                name="dataFim"
                value={formData.dataFim}
                onChange={handleChange}
              />
            </div>
          </div>
          <Button type="submit" variant="contained" sx={{ maxHeight: "50px" }}>
            Adicionar Contrato
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CriarContrato;

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/system";

const StyledBox = styled(Box)({
  maxHeight: "500px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#f1f1f1",
  },
});

export default function ContratosGrid({ items }) {
  return (
    <StyledBox
      sx={{
        backgroundColor: "#fafafa",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: 2,
        border: "1px solid #fafafa",
        flexGrow: 1,
      }}
    >
      <Grid flexDirection={"column"} container spacing={2}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={12} key={index}>
            <item.component />
          </Grid>
        ))}
      </Grid>
    </StyledBox>
  );
}

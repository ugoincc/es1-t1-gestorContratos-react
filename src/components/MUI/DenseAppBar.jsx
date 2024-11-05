import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function DenseAppBar({ pagename }) {
  return (
    <Box sx={{}}>
      <AppBar
        sx={{
          backgroundColor: "#2f4050",
          borderRadius: 1,
          width: "85vw",
          height: 64,
          justifyContent: "center",
          padding: 1,
        }}
        position="static"
      >
        <Toolbar variant="dense">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {pagename}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

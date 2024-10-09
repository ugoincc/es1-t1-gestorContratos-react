import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LogoutIcon from "@mui/icons-material/Logout";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Testes",
    icon: <EmailIcon />,
    link: "/eleTestes",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Contratos",
    icon: <FindInPageIcon />,
    link: "/contratos",
  },
  {
    title: "Relatórios",
    icon: <AssessmentIcon />,
    link: "/gerarRelatorio",
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
    link: "/logout",
  },
];

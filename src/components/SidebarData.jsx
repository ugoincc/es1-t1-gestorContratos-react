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
    title: "Mailbox",
    icon: <EmailIcon />,
    link: "/mailbox",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Contratos",
    icon: <FindInPageIcon />,
    link: "/criarContrato",
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

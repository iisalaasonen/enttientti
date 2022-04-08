import React from "react";
import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme";

const ContainerPage = ({ children }) => {
  const theme = useTheme();

  const containerStyle = {
    backgroundColor: theme.palette.background.default,
    height: "100vh",
    width: "80vw",
    margin: theme.spacing(4, "auto"),
  };

  return <Container sx={containerStyle}>{children}</Container>;
};

export default ContainerPage;

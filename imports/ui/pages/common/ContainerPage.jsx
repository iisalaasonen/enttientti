import React from "react";
import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme";

const ContainerPage = ({ children }) => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        backgroundColor: theme.palette.background.default,
        height: "100vh",
        margin: theme.spacing(4, "auto"),
      }}
    >
      {children}
    </Container>
  );
};

export default ContainerPage;

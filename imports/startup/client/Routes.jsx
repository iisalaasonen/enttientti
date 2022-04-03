import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../../ui/navbar/Navbar";
import Footer from "../../ui/footer/Footer";
import Home from "../../ui/pages/Home";
import MainDst from "../../ui/pages/dst/Maindst";
import NotFound from "../../ui/pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "../../ui/theme";
import CssBaseline from "@mui/material/CssBaseline";

const AppRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dst" element={<MainDst />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<AppRoutes />, document.getElementById("react-target"));
});

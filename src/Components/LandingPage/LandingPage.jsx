import { useState } from "react";
import { Box, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const LandingPage = () => {
  const [value, setValue] = useState("consulta");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="landingPage">
      <div className="landingPage_container">
        <Box>
          <div className="u-text-center">
            <h1 className="heading-primary">Bienvenido a consultame</h1>
          </div>
        </Box>
        <div className="u-margin-top-small">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  label={<span className="paragraph">Consulta</span>}
                  value="consulta"
                />
              </TabList>
            </Box>
            <TabPanel value="consulta">
              <div className="u-text-center">
                <h2 className="heading-secondary">Consultas disponibles</h2>
                <div className="landingPage_container-btn">
                  <Link to="/consulta/ruc" className="btn paragraph">
                    RUC&nbsp;(Por Numero)
                  </Link>
                  <Link to="/consulta/ruc/base" className="btn paragraph">
                    RUC&nbsp;(Por Nombre)
                  </Link>
                  <Link to="/consulta/factura" className="btn paragraph">
                    FACTURA
                  </Link>
                  <Link to="/consulta/lote" className="btn paragraph">
                    LOTE
                  </Link>
                </div>
              </div>
            </TabPanel>
          </TabContext>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

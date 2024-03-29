import { useState } from "react";
import {
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  AppBar,
  Toolbar,
  Collapse,
} from "@mui/material";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import StarIcon from "@mui/icons-material/Star";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PersonIcon from "@mui/icons-material/Person";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const Header = () => {
  const [isDrawerOpened, setIsDrawerOpen] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const handlerDetail = () => {
    setShowDetail((prevState) => !prevState);
  };

  const closeDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);

    if (showDetail) setShowDetail(false);
  };

  const toggleDrawerStatus = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#d8e1e6" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1.6rem",
              }}
            >
              <div className="side-bar">
                <IconButton>
                  <Link to="/" className="btn--link">
                    <HomeIcon sx={{ fontSize: "3rem" }} color="info" />
                  </Link>
                </IconButton>
                <IconButton onClick={toggleDrawerStatus}>
                  {!isDrawerOpened ? (
                    <ReorderIcon sx={{ fontSize: "3rem" }} color="info" />
                  ) : null}
                </IconButton>
              </div>
            </div>

            <Drawer
              variant="temporary"
              open={isDrawerOpened}
              onClose={closeDrawer}
              sx={{
                "& .MuiPaper-root": {
                  width: 250,
                },
              }}
            >
              <List>
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                  onClick={closeDrawer}
                >
                  <ListItemIcon>
                    <KeyboardArrowLeftIcon sx={{ fontSize: "3rem" }} />
                  </ListItemIcon>
                </ListItem>
              </List>

              <Divider />

              <List>
                <ListItem key="Inicio">
                  <ListItemIcon>
                    <HomeIcon sx={{ fontSize: "2.4rem" }} />
                  </ListItemIcon>
                  <Link to="/" className="btn--link" onClick={closeDrawer}>
                    <ListItemText
                      primaryTypographyProps={{ fontSize: "2rem" }}
                      primary="Inicio"
                    />
                  </Link>
                </ListItem>

                <ListItem onClick={handlerDetail}>
                  <ListItemIcon>
                    <FormatListBulletedIcon sx={{ fontSize: "2.4rem" }} />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ fontSize: "2rem" }}
                    primary="Consultas"
                  />
                  {showDetail ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItem>

                <Collapse in={showDetail} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem key="RucSifen">
                      <ListItemIcon>
                        <AccountTreeIcon sx={{ fontSize: "2.4rem" }} />
                      </ListItemIcon>
                      <Link
                        to="/consulta/ruc"
                        className="btn--link"
                        onClick={closeDrawer}
                      >
                        <ListItemText
                          primaryTypographyProps={{ fontSize: "2rem" }}
                          primary="Ruc (SIFEN)"
                        />
                      </Link>
                    </ListItem>

                    <ListItem key="RucBase">
                      <ListItemIcon>
                        <AccountTreeIcon sx={{ fontSize: "2.4rem" }} />
                      </ListItemIcon>
                      <Link
                        to="/consulta/ruc/base"
                        className="btn--link"
                        onClick={closeDrawer}
                      >
                        <ListItemText
                          primaryTypographyProps={{ fontSize: "2rem" }}
                          primary="Ruc (LOCAL)"
                        />
                      </Link>
                    </ListItem>

                    <ListItem key="Factura">
                      <ListItemIcon>
                        <StarIcon sx={{ fontSize: "2.4rem" }} />
                      </ListItemIcon>
                      <Link
                        to="/consulta/factura"
                        className="btn--link"
                        onClick={closeDrawer}
                      >
                        <ListItemText
                          primaryTypographyProps={{ fontSize: "2rem" }}
                          primary="Factura"
                        />
                      </Link>
                    </ListItem>

                    <ListItem key="Lote">
                      <ListItemIcon>
                        <StarIcon sx={{ fontSize: "2.4rem" }} />
                      </ListItemIcon>
                      <Link
                        to="/consulta/lote"
                        className="btn--link"
                        onClick={closeDrawer}
                      >
                        <ListItemText
                          primaryTypographyProps={{ fontSize: "2rem" }}
                          primary="Lote"
                        />
                      </Link>
                    </ListItem>
                  </List>
                </Collapse>

                <Divider textAlign="right">
                  <span className="leyenda">PROGRAMADORES</span>
                </Divider>

                <ListItem key="api">
                  <ListItemIcon>
                    <IntegrationInstructionsIcon sx={{ fontSize: "2.4rem" }} />
                  </ListItemIcon>
                  <a
                    target="_blank"
                    href={import.meta.env.VITE_API}
                    className="btn--link"
                    onClick={closeDrawer}
                  >
                    <ListItemText
                      primaryTypographyProps={{ fontSize: "2rem" }}
                      primary="API"
                    />
                  </a>
                </ListItem>

                <Divider />

                <ListItem key="contacto">
                  <ListItemIcon>
                    <PersonIcon sx={{ fontSize: "2.4rem" }} />
                  </ListItemIcon>
                  <Link
                    to="/contacto"
                    className="btn--link"
                    onClick={closeDrawer}
                  >
                    <ListItemText
                      primaryTypographyProps={{ fontSize: "2rem" }}
                      primary="Contacto"
                    />
                  </Link>
                </ListItem>
              </List>
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;

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
} from "@mui/material";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import StarIcon from "@mui/icons-material/Star";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const Header = () => {
  const [isDrawerOpened, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
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
                <ListItem key="Ruc">
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
                      primary="Ruc"
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
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;

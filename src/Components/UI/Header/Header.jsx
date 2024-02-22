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
                  {!isDrawerOpened ? <ReorderIcon color="info" /> : null}
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
                    <KeyboardArrowLeftIcon />
                  </ListItemIcon>
                </ListItem>
              </List>

              <Divider />

              <List>
                <ListItem key="Ruc">
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <Link
                    to="/consulta/ruc"
                    className="btn--link"
                    onClick={closeDrawer}
                  >
                    <ListItemText primary="Ruc" />
                  </Link>
                </ListItem>
              </List>

              <List>
                <ListItem key="Factura">
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <Link
                    to="/consulta/factura"
                    className="btn--link"
                    onClick={closeDrawer}
                  >
                    <ListItemText primary="Factura" />
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

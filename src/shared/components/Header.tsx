import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { HeaderProps } from "../../core/interfaces";

const Header: React.FC<HeaderProps> = ({ transparent = false, activePath }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  // Utilise activePath s'il est fourni, sinon utilise le chemin actuel
  const currentPath = activePath || location.pathname;

  // Détecte le défilement pour changer l'apparence du header
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "À propos", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  // Vérifie si un élément est actif
  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") {
      return true;
    }
    return path !== "/" && currentPath.startsWith(path);
  };

  return (
    <AppBar
      position="fixed"
      color={transparent && !trigger ? "transparent" : "primary"}
      elevation={trigger ? 4 : 0}
      sx={{
        transition: "all 0.3s ease",
        backgroundColor:
          transparent && !trigger ? "transparent" : theme.palette.primary.main,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: "white",
              textDecoration: "none",
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            HANNA COURTAGE
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {navItems.map((item) => (
                      <ListItem
                        key={item.name}
                        component={RouterLink}
                        to={item.path}
                        sx={{
                          color: theme.palette.text.primary,
                          backgroundColor: isActive(item.path)
                            ? `${theme.palette.primary.light}20`
                            : "transparent",
                          "&:hover": {
                            backgroundColor: theme.palette.primary.light,
                            color: "white",
                          },
                          position: "relative",
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            width: isActive(item.path) ? "3px" : "0",
                            height: "70%",
                            left: 0,
                            top: "15%",
                            backgroundColor: theme.palette.secondary.main,
                            transition: "all 0.3s ease",
                          },
                        }}
                      >
                        <ListItemText
                          primary={item.name}
                          primaryTypographyProps={{
                            fontWeight: isActive(item.path) ? 600 : 400,
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    mx: 1,
                    color: "white",
                    position: "relative",
                    fontWeight: isActive(item.path) ? 600 : 400,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: isActive(item.path) ? "70%" : "0",
                      height: "2px",
                      bottom: "0",
                      left: "50%",
                      backgroundColor: theme.palette.secondary.main,
                      transition: "all 0.3s ease",
                      transform: "translateX(-50%)",
                    },
                    "&:hover::after": {
                      width: "70%",
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              variant="contained"
              color="secondary"
              component={RouterLink}
              to="/contact"
              sx={{
                borderRadius: "20px",
                px: 3,
                fontWeight: 600,
              }}
            >
              Demander un devis
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

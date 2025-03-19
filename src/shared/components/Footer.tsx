import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
  useTheme,
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { FooterProps } from "../../core/interfaces";

const Footer: React.FC<FooterProps> = ({ showContactInfo = true }) => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.main,
        color: "white",
        py: 6,
        mt: "auto",
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              HANNA COURTAGE
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Votre partenaire de confiance pour toutes vos assurances. Nous
              vous accompagnons dans la recherche des meilleures solutions
              adaptées à vos besoins.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                color="inherit"
                aria-label="facebook"
                sx={{
                  mr: 1,
                  bgcolor: "rgba(255,255,255,0.1)",
                  "&:hover": { bgcolor: theme.palette.secondary.main },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="twitter"
                sx={{
                  mr: 1,
                  bgcolor: "rgba(255,255,255,0.1)",
                  "&:hover": { bgcolor: theme.palette.secondary.main },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="linkedin"
                sx={{
                  bgcolor: "rgba(255,255,255,0.1)",
                  "&:hover": { bgcolor: theme.palette.secondary.main },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Liens Rapides
            </Typography>
            <Box component="nav">
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{
                  display: "block",
                  mb: 1.5,
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.secondary.main },
                }}
              >
                Accueil
              </Link>
              <Link
                component={RouterLink}
                to="/services"
                color="inherit"
                sx={{
                  display: "block",
                  mb: 1.5,
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.secondary.main },
                }}
              >
                Nos Services
              </Link>
              <Link
                component={RouterLink}
                to="/about"
                color="inherit"
                sx={{
                  display: "block",
                  mb: 1.5,
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.secondary.main },
                }}
              >
                À Propos
              </Link>
              <Link
                component={RouterLink}
                to="/contact"
                color="inherit"
                sx={{
                  display: "block",
                  mb: 1.5,
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.secondary.main },
                }}
              >
                Contact
              </Link>
              <Link
                component={RouterLink}
                to="/admin"
                color="inherit"
                sx={{
                  display: "block",
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.secondary.main },
                }}
              >
                Admin
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Nos Services
            </Typography>
            <Link
              component={RouterLink}
              to="/services#assurance-auto"
              color="inherit"
              sx={{
                display: "block",
                mb: 1.5,
                textDecoration: "none",
                "&:hover": { color: theme.palette.secondary.main },
              }}
            >
              Assurance Auto
            </Link>
            <Link
              component={RouterLink}
              to="/services#assurance-habitation"
              color="inherit"
              sx={{
                display: "block",
                mb: 1.5,
                textDecoration: "none",
                "&:hover": { color: theme.palette.secondary.main },
              }}
            >
              Assurance Habitation
            </Link>
            <Link
              component={RouterLink}
              to="/services#assurance-sante"
              color="inherit"
              sx={{
                display: "block",
                mb: 1.5,
                textDecoration: "none",
                "&:hover": { color: theme.palette.secondary.main },
              }}
            >
              Assurance Santé
            </Link>
            <Link
              component={RouterLink}
              to="/services#assurance-professionnelle"
              color="inherit"
              sx={{
                display: "block",
                textDecoration: "none",
                "&:hover": { color: theme.palette.secondary.main },
              }}
            >
              Assurance Professionnelle
            </Link>
          </Grid>

          {showContactInfo && (
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Contact
              </Typography>
              <Box sx={{ display: "flex", mb: 2 }}>
                <LocationIcon
                  sx={{ mr: 1, color: theme.palette.secondary.main }}
                />
                <Typography variant="body2">
                  123 Avenue des Assurances, 75000 Paris
                </Typography>
              </Box>
              <Box sx={{ display: "flex", mb: 2 }}>
                <PhoneIcon
                  sx={{ mr: 1, color: theme.palette.secondary.main }}
                />
                <Typography variant="body2">+33 1 23 45 67 89</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <EmailIcon
                  sx={{ mr: 1, color: theme.palette.secondary.main }}
                />
                <Typography variant="body2">
                  contact@hanna-courtage.fr
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {currentYear} Hanna Courtage. Tous droits réservés.
          </Typography>
          <Box>
            <Link
              component={RouterLink}
              to="/mentions-legales"
              color="inherit"
              sx={{
                mx: 1,
                fontSize: "0.875rem",
                opacity: 0.8,
                textDecoration: "none",
                "&:hover": { color: theme.palette.secondary.main },
              }}
            >
              Mentions Légales
            </Link>
            <Link
              component={RouterLink}
              to="/politique-confidentialite"
              color="inherit"
              sx={{
                mx: 1,
                fontSize: "0.875rem",
                opacity: 0.8,
                textDecoration: "none",
                "&:hover": { color: theme.palette.secondary.main },
              }}
            >
              Politique de Confidentialité
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

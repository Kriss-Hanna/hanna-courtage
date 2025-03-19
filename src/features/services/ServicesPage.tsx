import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  useTheme,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  DirectionsCar as CarIcon,
  Home as HomeIcon,
  HealthAndSafety as HealthIcon,
  Business as BusinessIcon,
  Check as CheckIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const ServicesPage = () => {
  const theme = useTheme();

  // Données des services
  const services = [
    {
      id: "assurance-auto",
      title: "Assurance Auto",
      description:
        "Protégez votre véhicule avec nos offres d'assurance auto adaptées à vos besoins et à votre budget.",
      icon: <CarIcon sx={{ fontSize: 40 }} />,
      features: [
        "Responsabilité civile",
        "Garantie tous risques",
        "Protection du conducteur",
        "Assistance 24/7",
        "Véhicule de remplacement",
        "Protection juridique",
      ],
      image: "/service-auto.jpg",
    },
    {
      id: "assurance-habitation",
      title: "Assurance Habitation",
      description:
        "Sécurisez votre logement et vos biens avec nos solutions d'assurance habitation complètes.",
      icon: <HomeIcon sx={{ fontSize: 40 }} />,
      features: [
        "Garantie dégâts des eaux",
        "Protection contre l'incendie",
        "Couverture vol et vandalisme",
        "Responsabilité civile",
        "Protection juridique",
        "Assistance d'urgence 24/7",
      ],
      image: "/service-habitation.jpg",
    },
    {
      id: "assurance-sante",
      title: "Assurance Santé",
      description:
        "Prenez soin de votre santé avec nos offres de complémentaire santé adaptées à vos besoins.",
      icon: <HealthIcon sx={{ fontSize: 40 }} />,
      features: [
        "Remboursement des frais médicaux",
        "Couverture hospitalisation",
        "Prise en charge optique",
        "Soins dentaires",
        "Médecine alternative",
        "Téléconsultation médicale",
      ],
      image: "/service-sante.jpg",
    },
    {
      id: "assurance-professionnelle",
      title: "Assurance Professionnelle",
      description:
        "Protégez votre activité professionnelle avec nos solutions d'assurance dédiées aux entreprises.",
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      features: [
        "Responsabilité civile professionnelle",
        "Protection des locaux",
        "Assurance multirisque",
        "Protection juridique",
        "Couverture perte d'exploitation",
        "Cyber-assurance",
      ],
      image: "/service-pro.jpg",
    },
  ];

  return (
    <Box>
      {/* En-tête de la page */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: "white",
          py: 8,
          position: "relative",
          overflow: "hidden",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: "60%",
            background: `linear-gradient(135deg, transparent 0%, ${theme.palette.primary.dark} 100%)`,
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                }}
              >
                Nos Services d'Assurance
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  fontWeight: 400,
                  opacity: 0.9,
                  lineHeight: 1.5,
                }}
              >
                Des solutions adaptées à tous vos besoins d'assurance personnels
                et professionnels
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Introduction */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: theme.palette.primary.main,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -10,
                  left: 0,
                  width: 80,
                  height: 3,
                  backgroundColor: theme.palette.secondary.main,
                  borderRadius: 1,
                },
              }}
            >
              Des assurances sur mesure
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.6 }}
            >
              Chez Hanna Courtage, nous comprenons que chaque client a des
              besoins spécifiques en matière d'assurance. C'est pourquoi nous
              proposons une gamme complète de solutions personnalisées pour vous
              offrir la meilleure protection possible.
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.6 }}
            >
              Notre équipe d'experts analyse vos besoins et compare les offres
              des plus grandes compagnies d'assurance pour vous proposer les
              contrats les plus adaptés à votre situation et à votre budget.
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              component={RouterLink}
              to="/contact"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                fontWeight: 600,
              }}
            >
              Demander un devis
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/services-intro.jpg"
              alt="Services d'assurance"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Liste des services */}
      <Box sx={{ bgcolor: "#f8f9fa", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: theme.palette.primary.main,
            }}
          >
            Nos Solutions d'Assurance
          </Typography>

          <Typography
            variant="h5"
            align="center"
            sx={{
              maxWidth: 700,
              mx: "auto",
              color: theme.palette.text.secondary,
              mb: 6,
            }}
          >
            Découvrez notre gamme complète de services
          </Typography>

          {services.map((service, index) => (
            <Box
              key={service.id}
              id={service.id}
              sx={{
                mb: index !== services.length - 1 ? 8 : 0,
                scrollMarginTop: "100px",
              }}
            >
              <Grid
                container
                spacing={6}
                alignItems="center"
                direction={index % 2 === 0 ? "row" : "row-reverse"}
              >
                <Grid item xs={12} md={6}>
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: 2,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 70,
                        height: 70,
                        borderRadius: "50%",
                        backgroundColor: `${theme.palette.primary.main}15`,
                        color: theme.palette.primary.main,
                        mr: 2,
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h3"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.6 }}
                  >
                    {service.description}
                  </Typography>

                  <Card
                    sx={{
                      mb: 3,
                      borderRadius: 2,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        Ce que nous proposons :
                      </Typography>

                      <List>
                        {service.features.map((feature, i) => (
                          <ListItem key={i} disableGutters>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <CheckIcon
                                sx={{ color: theme.palette.secondary.main }}
                              />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>

                  <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to="/contact"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      borderRadius: "30px",
                      px: 3,
                      py: 1,
                      fontWeight: 600,
                    }}
                  >
                    En savoir plus
                  </Button>
                </Grid>
              </Grid>

              {index !== services.length - 1 && <Divider sx={{ mt: 8 }} />}
            </Box>
          ))}
        </Container>
      </Box>

      {/* Section CTA */}
      <Box
        sx={{
          py: 8,
          backgroundColor: theme.palette.primary.main,
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 700, mb: 3 }}
          >
            Besoin d'un conseil personnalisé ?
          </Typography>

          <Typography
            variant="h6"
            sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}
          >
            Nos experts sont à votre disposition pour vous aider à trouver la
            solution d'assurance idéale pour vos besoins.
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={RouterLink}
            to="/contact"
            sx={{
              py: 1.5,
              px: 5,
              fontSize: "1.1rem",
              fontWeight: 600,
              borderRadius: "30px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Contactez-nous
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage;

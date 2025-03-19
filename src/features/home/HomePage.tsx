import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Avatar,
  Rating,
  useTheme,
} from "@mui/material";
import {
  DirectionsCar as CarIcon,
  Home as HomeIcon,
  HealthAndSafety as HealthIcon,
  Business as BusinessIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import Banner from "../../shared/components/Banner";
import ServiceCard from "../../shared/components/ServiceCard";

const HomePage = () => {
  const theme = useTheme();

  // Données des services
  const services = [
    {
      id: "assurance-auto",
      title: "Assurance Auto",
      description:
        "Protégez votre véhicule avec nos offres d'assurance auto adaptées à vos besoins et à votre budget.",
      icon: <CarIcon />,
      linkTo: "/services#assurance-auto",
    },
    {
      id: "assurance-habitation",
      title: "Assurance Habitation",
      description:
        "Sécurisez votre logement et vos biens avec nos solutions d'assurance habitation complètes.",
      icon: <HomeIcon />,
      linkTo: "/services#assurance-habitation",
    },
    {
      id: "assurance-sante",
      title: "Assurance Santé",
      description:
        "Prenez soin de votre santé avec nos offres de complémentaire santé adaptées à vos besoins.",
      icon: <HealthIcon />,
      linkTo: "/services#assurance-sante",
    },
    {
      id: "assurance-professionnelle",
      title: "Assurance Professionnelle",
      description:
        "Protégez votre activité professionnelle avec nos solutions d'assurance dédiées aux entreprises.",
      icon: <BusinessIcon />,
      linkTo: "/services#assurance-professionnelle",
    },
  ];

  // Données des témoignages
  const testimonials = [
    {
      id: "1",
      name: "Sophie Martin",
      content:
        "Hanna Courtage m'a permis de trouver l'assurance auto parfaite pour mes besoins. Service rapide et conseils personnalisés, je recommande vivement !",
      rating: 5,
      date: "15/03/2023",
    },
    {
      id: "2",
      name: "Thomas Dubois",
      content:
        "Excellente expérience avec Hanna Courtage pour mon assurance habitation. Des conseillers à l'écoute et des tarifs compétitifs.",
      rating: 5,
      date: "22/05/2023",
    },
    {
      id: "3",
      name: "Julie Leroy",
      content:
        "Je cherchais une assurance santé adaptée à ma situation familiale. Hanna Courtage m'a proposé plusieurs options et m'a aidé à faire le meilleur choix.",
      rating: 4,
      date: "10/07/2023",
    },
  ];

  return (
    <Box>
      {/* Bannière principale */}
      <Banner
        title="Votre courtier en assurance de confiance"
        subtitle="Nous vous accompagnons dans la recherche des meilleures solutions d'assurance adaptées à vos besoins personnels et professionnels."
        backgroundImage="/banner-background.jpg"
        ctaText="Demander un devis gratuit"
        ctaLink="/contact"
      />

      {/* Section Nos Services */}
      <Box
        sx={{
          py: 8,
          backgroundColor: "#f8f9fa",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: theme.palette.primary.main,
              }}
            >
              Nos Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 700,
                mx: "auto",
                color: theme.palette.text.secondary,
                mb: 2,
              }}
            >
              Découvrez notre gamme complète de solutions d'assurance
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={3} key={service.id}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  linkTo={service.linkTo}
                />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="outlined"
              color="primary"
              component={RouterLink}
              to="/services"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: "30px",
                px: 3,
                py: 1,
                fontWeight: 600,
              }}
            >
              Voir tous nos services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Section Pourquoi nous choisir */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/why-choose-us.jpg"
                alt="Pourquoi nous choisir"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              />
            </Grid>
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
                Pourquoi nous choisir ?
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.6 }}
              >
                Chez Hanna Courtage, nous mettons notre expertise à votre
                service pour vous proposer les meilleures solutions d'assurance
                adaptées à vos besoins spécifiques.
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      fontSize: "1rem",
                    }}
                  >
                    1
                  </Box>
                  Expertise et conseil personnalisé
                </Typography>
                <Typography variant="body1" sx={{ ml: 7 }}>
                  Notre équipe d'experts vous accompagne dans le choix de vos
                  assurances avec des conseils adaptés à votre situation.
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      fontSize: "1rem",
                    }}
                  >
                    2
                  </Box>
                  Comparaison des meilleures offres
                </Typography>
                <Typography variant="body1" sx={{ ml: 7 }}>
                  Nous comparons pour vous les offres des plus grandes
                  compagnies d'assurance pour vous garantir le meilleur rapport
                  qualité/prix.
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      fontSize: "1rem",
                    }}
                  >
                    3
                  </Box>
                  Suivi et assistance
                </Typography>
                <Typography variant="body1" sx={{ ml: 7 }}>
                  Nous vous accompagnons tout au long de la vie de votre contrat
                  et vous assistons en cas de sinistre.
                </Typography>
              </Box>

              <Button
                variant="contained"
                color="secondary"
                component={RouterLink}
                to="/about"
                sx={{
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                }}
              >
                En savoir plus sur nous
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section Témoignages */}
      <Box
        sx={{
          py: 8,
          backgroundColor: "#f8f9fa",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: theme.palette.primary.main,
              }}
            >
              Ce que disent nos clients
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 700,
                mx: "auto",
                color: theme.palette.text.secondary,
                mb: 2,
              }}
            >
              Découvrez les témoignages de nos clients satisfaits
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial) => (
              <Grid item xs={12} md={4} key={testimonial.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 16px 32px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, flexGrow: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Avatar
                        sx={{
                          bgcolor: theme.palette.primary.main,
                          width: 50,
                          height: 50,
                          mr: 2,
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.date}
                        </Typography>
                      </Box>
                    </Box>

                    <Rating
                      value={testimonial.rating}
                      readOnly
                      sx={{ mb: 2 }}
                    />

                    <Typography
                      variant="body1"
                      sx={{
                        mb: 2,
                        fontStyle: "italic",
                        position: "relative",
                        "&::before": {
                          content: '"""',
                          fontSize: "3rem",
                          color: `${theme.palette.primary.main}20`,
                          position: "absolute",
                          top: -20,
                          left: -10,
                        },
                      }}
                    >
                      {testimonial.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
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
            Prêt à trouver la meilleure assurance ?
          </Typography>

          <Typography
            variant="h6"
            sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}
          >
            Contactez-nous dès aujourd'hui pour obtenir un devis gratuit et
            personnalisé.
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
            Demander un devis gratuit
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;

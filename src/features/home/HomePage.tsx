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
  Security as SecurityIcon,
  SelfImprovement as SelfImprovementIcon,
  Insights as InsightsIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import Banner from "../../shared/components/Banner";
import ServiceCard from "../../shared/components/ServiceCard";
import { PLACEHOLDER_IMAGES } from "../../core/config";

const HomePage = () => {
  const theme = useTheme();

  // Données des services
  const services = [
    {
      id: "assurances-gestion",
      title: "Assurances & Gestion de patrimoine",
      description:
        "Protection de la famille, optimisation de l'épargne, préparation de la retraite et transmission sur mesure grâce à une sélection indépendante.",
      icon: <SecurityIcon />,
      linkTo: "/services#assurances-gestion",
    },
    {
      id: "coaching-financier",
      title: "Coaching financier",
      description:
        "Reprenez confiance dans votre budget, structurez votre épargne et retrouvez une relation apaisée à l'argent avec un accompagnement humain.",
      icon: <SelfImprovementIcon />,
      linkTo: "/services#coaching-financier",
    },
    {
      id: "vision-patrimoniale",
      title: "Vision globale du patrimoine",
      description:
        "Un diagnostic complet pour aligner votre patrimoine sur vos projets de vie et éclairer chaque décision avec clarté.",
      icon: <InsightsIcon />,
      linkTo: "/services#vision-patrimoniale",
    },
  ];

  // Données des témoignages
  const testimonials = [
    {
      id: "1",
      name: "Laurence B.",
      content:
        "Françoise m'a aidée à clarifier ma retraite et à protéger mes enfants. Son approche est à la fois rassurante et très concrète.",
      rating: 5,
      date: "12/06/2024",
    },
    {
      id: "2",
      name: "Marc D.",
      content:
        "Grâce à son coaching financier, j'ai retrouvé la maîtrise de mon budget et mis en place une épargne régulière sans stress.",
      rating: 5,
      date: "04/02/2024",
    },
    {
      id: "3",
      name: "Alexandra G.",
      content:
        "L'analyse patrimoniale globale a été déterminante pour préparer notre transmission familiale. Un accompagnement précieux.",
      rating: 4,
      date: "18/09/2023",
    },
  ];

  return (
    <Box>
      {/* Bannière principale */}
      <Banner
        title="L'ABC DU PATRIMOINE — Comprendre, protéger, construire"
        subtitle="Parce que chaque situation patrimoniale est unique, je t'accompagne à clarifier tes décisions et à protéger les projets qui comptent pour toi."
        backgroundImage={PLACEHOLDER_IMAGES.banner}
        ctaText="Faire le point sur ma situation"
        ctaLink="/contact"
        secondaryCtaText="Prendre rendez-vous"
        secondaryCtaLink="/contact#calendly"
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
              Trois piliers pour construire ta sérénité financière
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 720,
                mx: "auto",
                color: theme.palette.text.secondary,
                mb: 2,
              }}
            >
              Depuis plus de 5 ans, j'accompagne particuliers et professionnels
              avec une approche indépendante, pédagogique et profondément
              humaine.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
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
              Découvrir mes accompagnements
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
                src={PLACEHOLDER_IMAGES.whyChooseUs}
                alt="Accompagnement patrimonial personnalisé"
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
                Pourquoi choisir L'ABC DU PATRIMOINE ?
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.6 }}
              >
                Un accompagnement serein est un accompagnement qui commence par
                l'écoute. Je prends le temps de comprendre ton histoire, tes
                projets et tes contraintes pour bâtir une feuille de route
                lucide et durable.
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
                  Écoute et pédagogie
                </Typography>
                <Typography variant="body1" sx={{ ml: 7 }}>
                  Je vulgarise chaque solution pour que tu décides en toute
                  autonomie, sans jargon et sans pression.
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
                  Indépendance totale
                </Typography>
                <Typography variant="body1" sx={{ ml: 7 }}>
                  Membre du réseau 360 Courtage, je sélectionne librement les
                  partenaires qui servent au mieux tes intérêts, jamais
                  l'inverse.
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
                  Transparence et suivi
                </Typography>
                <Typography variant="body1" sx={{ ml: 7 }}>
                  Chaque recommandation s'accompagne d'un plan d'action clair et
                  d'un suivi régulier pour ajuster le cap si nécessaire.
                </Typography>
              </Box>

              <Box
                sx={{
                  mb: 4,
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: `${theme.palette.secondary.main}15`,
                  border: `1px solid ${theme.palette.secondary.main}40`,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    color: theme.palette.secondary.main,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  Bientôt
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  En cours de certification AMF, j'élargirai prochainement mes
                  services vers le conseil en investissement financier pour
                  t'offrir un accompagnement encore plus global.
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
                Apprendre à me connaître
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
              Ce que disent mes clients
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
              Des accompagnements sur-mesure qui redonnent confiance et
              visibilité
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
            Prêt à faire le point sur ton patrimoine ?
          </Typography>

          <Typography
            variant="h6"
            sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}
          >
            Profite d'un premier échange gratuit et sans engagement pour
            clarifier ta situation.
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={RouterLink}
            to="/contact#calendly"
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
            Réserver une rencontre
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;

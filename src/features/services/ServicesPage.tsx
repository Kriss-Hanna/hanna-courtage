import React from "react";
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
import { Check as CheckIcon, ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const ServicesPage = () => {
  const theme = useTheme();

  const patrimonySolutions = [
    {
      title: "Assurances de personnes",
      items: [
        "Santé, prévoyance, décès et dépendance",
        "Maintien de revenu pour indépendants et dirigeants",
        "Protection familiale complète et évolutive",
      ],
    },
    {
      title: "Épargne & Retraite",
      items: [
        "Assurance-vie, PER et enveloppes projets",
        "Stratégies de retraite anticipée ou progressive",
        "Optimisation fiscale suivie dans le temps",
      ],
    },
    {
      title: "Transmission & Succession",
      items: [
        "Démembrement, donation et clause bénéficiaire",
        "Organisation de la transmission patrimoniale",
        "Accompagnement familial pour une transition sereine",
      ],
    },
    {
      title: "Immobilier & défiscalisation",
      items: [
        "Étude des dispositifs adaptés (Pinel, LMNP, etc.)",
        "Accompagnement à l'investissement locatif",
        "Pilotage des actifs immobiliers dans la durée",
      ],
    },
  ];

  const coachingHighlights = [
    "Bilan personnalisé pour comprendre ta situation et identifier tes priorités",
    "Plan d'action concret avec outils simples, budgets et objectifs réalistes",
    "Suivi humain, motivation et ajustements sur 1 à 3 mois",
    "Séances individuelles en visio ou en présentiel, sans jugement",
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
            <Grid item xs={12} md={8}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                }}
              >
                Protéger, valoriser et transmettre ton patrimoine
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
                Des solutions indépendantes pour sécuriser le présent, préparer l'avenir et accompagner chaque étape de ton parcours financier.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section assurances et gestion de patrimoine */}
      <Box id="assurances-gestion" sx={{ py: 8 }}>
        <Container maxWidth="lg">
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
                Assurances & Gestion de patrimoine
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.6 }}
              >
                Protéger ton avenir et celui de tes proches, préparer ta retraite, optimiser ton épargne : c'est tout le sens de mon métier de courtière en assurances et conseillère en gestion de patrimoine.
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.6 }}
              >
                Ensemble, nous construisons une stratégie claire, durable et alignée sur tes projets de vie, sans jamais sacrifier la transparence.
              </Typography>

              <Grid container spacing={3}>
                {patrimonySolutions.map((solution) => (
                  <Grid item xs={12} sm={6} key={solution.title}>
                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: 2,
                        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 2,
                            color: theme.palette.primary.main,
                          }}
                        >
                          {solution.title}
                        </Typography>
                        <List dense>
                          {solution.items.map((item) => (
                            <ListItem key={item} disableGutters>
                              <ListItemIcon sx={{ minWidth: 32 }}>
                                <CheckIcon
                                  sx={{ color: theme.palette.secondary.main }}
                                />
                              </ListItemIcon>
                              <ListItemText primary={item} />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: `${theme.palette.secondary.main}15`,
                  border: `1px solid ${theme.palette.secondary.main}30`,
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  Mon rôle
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  Te conseiller avec clarté, transparence et indépendance. Je sélectionne les solutions pour toi, pas pour un réseau.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/services-intro.jpg"
                alt="Stratégie patrimoniale"
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
      </Box>

      {/* Section coaching financier */}
      <Box id="coaching-financier" sx={{ py: 8, bgcolor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center" direction={{ xs: "column", md: "row-reverse" }}>
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
                Coaching financier
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.6 }}
              >
                Parce que l'argent n'est pas qu'une question de chiffres, je t'aide à en faire un allié de ton équilibre et de tes projets. L'objectif : reprendre la main sur ton budget et tes décisions.
              </Typography>

              <List>
                {coachingHighlights.map((item) => (
                  <ListItem key={item} disableGutters sx={{ alignItems: "flex-start" }}>
                    <ListItemIcon sx={{ minWidth: 32, mt: "2px" }}>
                      <CheckIcon sx={{ color: theme.palette.secondary.main }} />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>

              <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic" }}>
                Format : séances individuelles (visio ou présentiel), accompagnement sur 1 à 3 mois, toujours à ton rythme.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/services-coaching.jpg"
                alt="Coaching financier"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                onError={(event: React.SyntheticEvent<HTMLImageElement>) => {
                  event.currentTarget.src = "/services-intro.jpg";
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section vision globale */}
      <Box id="vision-patrimoniale" sx={{ py: 8 }}>
        <Container maxWidth="lg">
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
                Vision globale du patrimoine
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.6 }}
              >
                Avant toute recommandation, nous réalisons un diagnostic complet de ta situation patrimoniale. Cette vision 360° permet d'aligner ton patrimoine sur tes projets et d'éclairer chaque décision.
              </Typography>

              <Grid container spacing={3}>
                {[
                  "Analyse de la structure patrimoniale actuelle",
                  "Projection des scénarios et arbitrages possibles",
                  "Mise en perspective des impacts fiscaux et familiaux",
                  "Feuille de route priorisée et calendrier de suivi",
                ].map((item) => (
                  <Grid item xs={12} sm={6} key={item}>
                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: 2,
                        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <ListItem disableGutters sx={{ alignItems: "flex-start" }}>
                          <ListItemIcon sx={{ minWidth: 32, mt: "2px" }}>
                            <CheckIcon sx={{ color: theme.palette.secondary.main }} />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/vision-patrimoniale.jpg"
                alt="Vision globale"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                onError={(event: React.SyntheticEvent<HTMLImageElement>) => {
                  event.currentTarget.src = "/services-intro.jpg";
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Encadré certification */}
      <Box sx={{ py: 6, bgcolor: "#f8f9fa" }}>
        <Container maxWidth="md">
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  mb: 1,
                  color: theme.palette.secondary.main,
                }}
              >
                Bientôt
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                En cours de certification AMF, j'élargirai prochainement mes services vers le conseil en investissement financier afin d'accompagner mes clients encore plus globalement.
              </Typography>
            </CardContent>
          </Card>
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
            Besoin d'échanger sur ta situation ?
          </Typography>

          <Typography
            variant="h6"
            sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}
          >
            Réserve un rendez-vous gratuit pour faire le point et repartir avec des premières pistes concrètes.
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
            Prendre rendez-vous
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage;

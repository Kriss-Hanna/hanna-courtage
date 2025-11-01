import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  Timeline as TimelineIcon,
  Handshake as HandshakeIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { PLACEHOLDER_IMAGES } from "../../core/config";

const AboutPage = () => {
  const theme = useTheme();

  const methodSteps = [
    "Écoute & découverte de tes objectifs",
    "Analyse personnalisée de ta situation",
    "Recommandations claires et adaptées",
    "Mise en place & suivi dans la durée",
  ];

  const values = [
    {
      title: "Comprendre",
      description:
        "Chaque situation patrimoniale est unique. Je prends le temps de traduire la complexité en décisions simples et actionnables.",
    },
    {
      title: "Protéger",
      description:
        "Je sécurise les personnes et les projets qui comptent pour toi, avec des solutions indépendantes et durables.",
    },
    {
      title: "Construire",
      description:
        "Nous élaborons ensemble une stratégie évolutive, en cohérence avec tes aspirations de vie et ton rythme.",
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
                Françoise HANNA — Une approche humaine du conseil patrimonial
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
                Comprendre, protéger, construire : trois mots pour guider chaque
                accompagnement et rendre les décisions financières accessibles.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section parcours */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={PLACEHOLDER_IMAGES.aboutHistory}
                alt="Accompagnement patrimonial"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                onError={(event: React.SyntheticEvent<HTMLImageElement>) => {
                  if (
                    !event.currentTarget.src.includes(
                      PLACEHOLDER_IMAGES.servicesIntro
                    )
                  ) {
                    event.currentTarget.src = PLACEHOLDER_IMAGES.servicesIntro;
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <TimelineIcon
                  sx={{
                    color: theme.palette.secondary.main,
                    mr: 2,
                    fontSize: 30,
                  }}
                />
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                  }}
                >
                  Mon parcours
                </Typography>
              </Box>

              <Divider
                sx={{
                  mb: 3,
                  width: 80,
                  height: 3,
                  backgroundColor: theme.palette.secondary.main,
                }}
              />

              <Typography
                variant="body1"
                sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.6 }}
              >
                Depuis plus de 5 ans, j'accompagne les particuliers et les
                professionnels qui souhaitent clarifier leurs décisions
                patrimoniales. Mon objectif : transformer les sujets financiers
                en conversations simples, utiles et alignées avec tes projets de
                vie.
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.6 }}
              >
                En tant que courtière membre du réseau 360 Courtage, je
                bénéficie d'un large panel de partenaires pour sélectionner, en
                toute indépendance, les solutions les plus pertinentes pour toi.
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}
              >
                Ma conviction est simple : un bon conseil commence par l'écoute,
                se nourrit de pédagogie et se construit sur la confiance.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section méthode */}
      <Box sx={{ py: 8, bgcolor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <HandshakeIcon
                sx={{
                  color: theme.palette.secondary.main,
                  mr: 2,
                  fontSize: 30,
                }}
              />
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                }}
              >
                Une méthode claire en 4 étapes
              </Typography>
            </Box>

            <Divider
              sx={{
                mb: 3,
                mx: "auto",
                width: 80,
                height: 3,
                backgroundColor: theme.palette.secondary.main,
              }}
            />

            <Typography
              variant="h5"
              sx={{
                maxWidth: 720,
                mx: "auto",
                color: theme.palette.text.secondary,
              }}
            >
              Un accompagnement pédagogique, bienveillant et actionnable à
              chaque étape de ton projet.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {methodSteps.map((step, index) => (
              <Grid item xs={12} md={6} key={step}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 2,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        mb: 2,
                      }}
                    >
                      {index + 1}. {step}
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                      {index === 0 &&
                        "Nous prenons le temps d'échanger pour poser les bases de ta situation, tes besoins et tes envies."}
                      {index === 1 &&
                        "Je réalise un diagnostic précis de tes contrats, de ton budget et de ton patrimoine pour identifier les leviers d'optimisation."}
                      {index === 2 &&
                        "Tu reçois une feuille de route claire détaillant les solutions possibles, leurs impacts et les priorités à court et long terme."}
                      {index === 3 &&
                        "Je t'accompagne dans les démarches, puis nous planifions des points réguliers pour ajuster la stratégie si besoin."}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Section valeurs */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                color: theme.palette.primary.main,
                mb: 2,
              }}
            >
              Mes valeurs pour t'accompagner
            </Typography>

            <Typography
              variant="h5"
              sx={{
                maxWidth: 720,
                mx: "auto",
                color: theme.palette.text.secondary,
              }}
            >
              Des repères constants au service de décisions éclairées.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value) => (
              <Grid item xs={12} md={4} key={value.title}>
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
                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {value.title}
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                      {value.description}
                    </Typography>

                    <List sx={{ mt: 3 }}>
                      <ListItem
                        disableGutters
                        sx={{ alignItems: "flex-start" }}
                      >
                        <ListItemIcon sx={{ mt: "2px" }}>
                          <CheckCircleIcon
                            sx={{ color: theme.palette.secondary.main }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            value.title === "Comprendre"
                              ? "Décryptage pédagogique des enjeux"
                              : value.title === "Protéger"
                              ? "Sélection libre des partenaires"
                              : "Plans d'action évolutifs"
                          }
                        />
                      </ListItem>
                      <ListItem
                        disableGutters
                        sx={{ alignItems: "flex-start" }}
                      >
                        <ListItemIcon sx={{ mt: "2px" }}>
                          <CheckCircleIcon
                            sx={{ color: theme.palette.secondary.main }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            value.title === "Comprendre"
                              ? "Documents personnalisés et synthétiques"
                              : value.title === "Protéger"
                              ? "Focus sur les personnes et actifs clés"
                              : "Suivi programmé pour garder le cap"
                          }
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Section réseau */}
      <Box sx={{ py: 8, bgcolor: "#f8f9fa" }}>
        <Container maxWidth="md">
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  mb: 2,
                }}
              >
                Un réseau solide pour servir tes intérêts
              </Typography>

              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                L'ABC DU PATRIMOINE s'appuie sur le réseau national 360 Courtage
                pour élargir ton champ des possibles : solutions d'assurance
                innovantes, partenaires de confiance et outils digitaux
                performants. Cette force collective nourrit un accompagnement
                sur mesure, centré sur tes priorités.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Section CTA */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 2,
            }}
          >
            Envie d'aller plus loin ?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 640,
              mx: "auto",
              color: theme.palette.text.secondary,
              mb: 4,
            }}
          >
            Faisons le point sur ta situation et dessinons ensemble la prochaine
            étape de ton patrimoine.
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            component={RouterLink}
            to="/services"
            sx={{
              borderRadius: "30px",
              px: 4,
              py: 1.5,
              fontWeight: 600,
            }}
          >
            Découvrir mes accompagnements
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;

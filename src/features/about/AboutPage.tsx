import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  Timeline as TimelineIcon,
  Groups as GroupsIcon,
  Handshake as HandshakeIcon,
} from "@mui/icons-material";

const AboutPage = () => {
  const theme = useTheme();

  // Données de l'équipe
  const teamMembers = [
    {
      id: "1",
      name: "Marie Dupont",
      position: "Directrice Générale",
      bio: "Avec plus de 15 ans d'expérience dans le secteur de l'assurance, Marie dirige Hanna Courtage avec passion et expertise.",
      photoUrl: "/team-member-1.jpg",
    },
    {
      id: "2",
      name: "Jean Martin",
      position: "Responsable Commercial",
      bio: "Jean apporte son expertise en développement commercial et relations clients pour offrir le meilleur service à nos assurés.",
      photoUrl: "/team-member-2.jpg",
    },
    {
      id: "3",
      name: "Sophie Bernard",
      position: "Experte en Assurance Auto",
      bio: "Spécialiste des assurances automobiles, Sophie trouve les meilleures solutions adaptées à chaque profil de conducteur.",
      photoUrl: "/team-member-3.jpg",
    },
    {
      id: "4",
      name: "Thomas Leroy",
      position: "Expert en Assurance Habitation",
      bio: "Thomas accompagne nos clients dans la protection de leur logement avec des solutions sur mesure et compétitives.",
      photoUrl: "/team-member-4.jpg",
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
                À Propos de Hanna Courtage
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
                Votre partenaire de confiance pour toutes vos assurances depuis
                2010
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section Notre Histoire */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/about-history.jpg"
                alt="Notre Histoire"
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
                  Notre Histoire
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
                Fondée en 2010 par Marie Dupont, Hanna Courtage est née d'une
                vision simple : rendre l'assurance plus accessible et
                transparente pour tous. Après avoir travaillé pendant des années
                dans de grandes compagnies d'assurance, Marie a constaté que de
                nombreux clients se sentaient perdus face à la complexité des
                contrats et des options disponibles.
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.6 }}
              >
                C'est ainsi qu'est née Hanna Courtage, avec la mission
                d'accompagner chaque client dans la recherche de la solution
                d'assurance la plus adaptée à ses besoins spécifiques, en toute
                transparence et avec un service personnalisé.
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}
              >
                Aujourd'hui, notre équipe de professionnels passionnés continue
                de porter cette vision, en mettant l'humain au cœur de notre
                approche et en nous adaptant constamment aux évolutions du
                marché pour offrir les meilleures solutions à nos clients.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section Nos Valeurs */}
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
                Nos Valeurs
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
                maxWidth: 700,
                mx: "auto",
                color: theme.palette.text.secondary,
                mb: 5,
              }}
            >
              Les principes qui guident nos actions au quotidien
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
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
                      textAlign: "center",
                    }}
                  >
                    Transparence
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, textAlign: "center" }}
                  >
                    Nous croyons en une communication claire et honnête. Nous
                    expliquons les termes des contrats en langage simple et nous
                    assurons que nos clients comprennent parfaitement ce pour
                    quoi ils paient.
                  </Typography>

                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon
                          sx={{ color: theme.palette.secondary.main }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Information claire et précise" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon
                          sx={{ color: theme.palette.secondary.main }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Pas de frais cachés" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon
                          sx={{ color: theme.palette.secondary.main }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Explication détaillée des contrats" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
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
                      textAlign: "center",
                    }}
                  >
                    Excellence
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, textAlign: "center" }}
                  >
                    Nous visons l'excellence dans tout ce que nous faisons.
                    Notre équipe se forme continuellement pour offrir les
                    meilleurs conseils et services à nos clients.
                  </Typography>

                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon
                          sx={{ color: theme.palette.secondary.main }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Formation continue" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon
                          sx={{ color: theme.palette.secondary.main }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Recherche des meilleures offres" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon
                          sx={{ color: theme.palette.secondary.main }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Service client réactif" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
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
                      textAlign: "center",
                    }}
                  >
                    Engagement
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, textAlign: "center" }}
                  >
                    Nous nous engageons pleinement auprès de nos clients, en les
                    accompagnant à chaque étape de leur parcours d'assurance, de
                    la souscription à la gestion des sinistres.
                  </Typography>

                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon
                          sx={{ color: theme.palette.secondary.main }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Suivi personnalisé" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon
                          sx={{ color: theme.palette.secondary.main }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Assistance en cas de sinistre" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon
                          sx={{ color: theme.palette.secondary.main }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Révision régulière des contrats" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section Notre Équipe */}
      <Box sx={{ py: 8 }}>
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
              <GroupsIcon
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
                Notre Équipe
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
                maxWidth: 700,
                mx: "auto",
                color: theme.palette.text.secondary,
                mb: 5,
              }}
            >
              Des professionnels passionnés à votre service
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {teamMembers.map((member) => (
              <Grid item xs={12} sm={6} md={3} key={member.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 16px 32px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={member.photoUrl}
                    alt={member.name}
                  />
                  <CardContent sx={{ p: 3, flexGrow: 1 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {member.name}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        mb: 2,
                        color: theme.palette.primary.main,
                        fontWeight: 500,
                      }}
                    >
                      {member.position}
                    </Typography>

                    <Typography variant="body2">{member.bio}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;

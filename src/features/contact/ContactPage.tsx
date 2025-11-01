import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  Card,
  CardContent,
  Divider,
  Alert,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
} from "@mui/icons-material";
import ContactForm from "../../shared/components/ContactForm";
import { ContactFormData } from "../../core/types";
import { CALENDLY_LINK } from "../../core/config";
import CalendlyInlineWidget from "../../shared/components/CalendlyInlineWidget";

const ContactPage = () => {
  const theme = useTheme();
  const calendlyUrl = CALENDLY_LINK;
  const isCalendlyPlaceholder = calendlyUrl.includes("votre-lien");

  const handleSubmit = (data: ContactFormData) => {
    // Ici, vous implémenteriez la logique d'envoi du formulaire
    console.log("Formulaire soumis:", data);
    // Par exemple, appel API vers votre backend
  };

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
                Parlons de ta situation patrimoniale
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
                Chaque grand projet commence par une conversation. Faisons connaissance pour clarifier tes besoins et tes objectifs.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section principale */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Formulaire de contact */}
          <Grid item xs={12} md={7}>
            <ContactForm onSubmit={handleSubmit} />
          </Grid>

          {/* Informations de contact */}
          <Grid item xs={12} md={5}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: theme.palette.primary.main,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: 60,
                    height: 3,
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: 1,
                  },
                }}
              >
                Coordonnées et rendez-vous
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.6 }}
              >
                Choisis le canal qui te convient le mieux : message, appel, visio ou rencontre en présentiel. Je te réponds rapidement et avec bienveillance.
              </Typography>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          backgroundColor: `${theme.palette.primary.main}15`,
                          color: theme.palette.primary.main,
                          mr: 2,
                        }}
                      >
                        <LocationIcon fontSize="medium" />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          Adresse
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          [Adresse professionnelle à compléter]
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          backgroundColor: `${theme.palette.primary.main}15`,
                          color: theme.palette.primary.main,
                          mr: 2,
                        }}
                      >
                        <PhoneIcon fontSize="medium" />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          Téléphone
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          [Numéro à compléter]
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          backgroundColor: `${theme.palette.primary.main}15`,
                          color: theme.palette.primary.main,
                          mr: 2,
                        }}
                      >
                        <EmailIcon fontSize="medium" />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          Email
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          [Email à compléter]
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          backgroundColor: `${theme.palette.primary.main}15`,
                          color: theme.palette.primary.main,
                          mr: 2,
                        }}
                      >
                        <TimeIcon fontSize="medium" />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          Horaires d'ouverture
                        </Typography>
                      </Box>
                    </Box>

                    <Divider sx={{ mb: 2 }} />

                    <Grid container spacing={1}>
                      <Grid item xs={7}>
                        <Typography variant="body2" color="text.secondary">
                          Lundi - Vendredi
                        </Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography variant="body2" align="right">
                          9h00 - 18h30
                        </Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography variant="body2" color="text.secondary">
                          Samedi
                        </Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography variant="body2" align="right">
                          Sur rendez-vous
                        </Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography variant="body2" color="text.secondary">
                          Dimanche
                        </Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography variant="body2" align="right">
                          Fermé
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Card
              sx={{
                mt: 3,
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                backgroundColor: `${theme.palette.secondary.main}10`,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  Premier échange offert
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  Le premier rendez-vous est gratuit et sans engagement. Nous pouvons nous rencontrer en visio ou en présentiel selon tes disponibilités.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Box
        id="calendly"
        sx={{
          py: 8,
          backgroundColor: "#f8f9fa",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              textAlign: "center",
              mb: 3,
            }}
          >
            Réserver un créneau en ligne
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              maxWidth: 640,
              mx: "auto",
              color: theme.palette.text.secondary,
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            Choisis le créneau qui te convient pour un échange en visio ou en présentiel. Une confirmation te parviendra immédiatement après la réservation.
          </Typography>

          {isCalendlyPlaceholder ? (
            <Alert severity="info" sx={{ mb: 4 }}>
              Renseigne ton lien Calendly dans <code>src/core/config.ts</code> pour activer la prise de rendez-vous en ligne.
            </Alert>
          ) : (
            <CalendlyInlineWidget url={calendlyUrl} minHeight={780} />
          )}
        </Container>
      </Box>

      {/* Carte Google Maps */}
      <Box sx={{ height: "400px", width: "100%", mt: 4 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647874587200!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Carte Google Maps"
        ></iframe>
      </Box>
    </Box>
  );
};

export default ContactPage;

import { Box, Container, Typography, useTheme, List, ListItem, ListItemText } from "@mui/material";

const PrivacyPolicyPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, bgcolor: "#f8f9fa" }}>
      <Container maxWidth="md">
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 4,
            color: theme.palette.primary.main,
            fontSize: { xs: "2.4rem", md: "3rem" },
          }}
        >
          Politique de confidentialité
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
          Cette politique décrit comment L'ABC DU PATRIMOINE collecte, utilise et protège les données personnelles transmises via ce site. Elle sera mise à jour au fur et à mesure de l'évolution des services ou des obligations réglementaires.
        </Typography>

        <Typography variant="h3" sx={{ fontWeight: 600, mb: 2, fontSize: "1.75rem" }}>
          Données collectées
        </Typography>
        <List sx={{ mb: 4 }}>
          <ListItem disableGutters>
            <ListItemText primary="Informations d'identification (nom, prénom)" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Données de contact (email, téléphone)" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Message et contexte de la demande" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Préférences de rendez-vous (visio ou présentiel)" />
          </ListItem>
        </List>

        <Typography variant="h3" sx={{ fontWeight: 600, mb: 2, fontSize: "1.75rem" }}>
          Finalités
        </Typography>
        <List sx={{ mb: 4 }}>
          <ListItem disableGutters>
            <ListItemText primary="Répondre aux demandes de contact et organiser les rendez-vous" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Préparer des propositions d'accompagnement adaptées" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Assurer le suivi administratif et réglementaire" />
          </ListItem>
        </List>

        <Typography variant="h3" sx={{ fontWeight: 600, mb: 2, fontSize: "1.75rem" }}>
          Durée de conservation
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
          Les données sont conservées pendant une durée maximale de 3 ans après le dernier contact, sauf obligation légale contraire.
        </Typography>

        <Typography variant="h3" sx={{ fontWeight: 600, mb: 2, fontSize: "1.75rem" }}>
          Tes droits
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
          Tu peux à tout moment demander l'accès, la rectification ou la suppression de tes données personnelles en écrivant à [Email professionnel]. Tu disposes également d'un droit d'opposition et de portabilité dans les conditions prévues par le RGPD.
        </Typography>

        <Typography variant="h3" sx={{ fontWeight: 600, mb: 2, fontSize: "1.75rem" }}>
          Sécurité
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
          Des mesures techniques et organisationnelles appropriées sont mises en place pour protéger tes données contre tout accès non autorisé, altération ou divulgation.
        </Typography>

        <Typography variant="body2" sx={{ fontStyle: "italic", color: theme.palette.text.secondary }}>
          Pour toute question relative à la protection de tes données, contacte-moi à [Email professionnel]. Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}.
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicyPage;


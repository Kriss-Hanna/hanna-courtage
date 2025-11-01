import { Box, Container, Typography, useTheme, List, ListItem, ListItemText } from "@mui/material";

const MentionsLegalesPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8 }}>
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
          Mentions légales et conformité
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
          Les informations ci-dessous s'appliquent au site L'ABC DU PATRIMOINE opéré par Françoise HANNA. Elles pourront être complétées dès que les éléments réglementaires définitifs seront disponibles.
        </Typography>

        <Typography variant="h3" sx={{ fontWeight: 600, mb: 2, fontSize: "1.75rem" }}>
          Identité
        </Typography>
        <List sx={{ mb: 4 }}>
          <ListItem disableGutters>
            <ListItemText primary="Dénomination : L'ABC DU PATRIMOINE – Françoise HANNA" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Statut : Courtier en assurances — membre du réseau 360 Courtage" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="ORIAS : n° [à compléter]" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="RCP professionnelle : [Assureur + numéro de police]" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="RCS / SIREN : [à compléter]" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Adresse : [Adresse professionnelle à compléter]" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Contact : [Email professionnel] — [Téléphone professionnel]" />
          </ListItem>
        </List>

        <Typography variant="h3" sx={{ fontWeight: 600, mb: 2, fontSize: "1.75rem" }}>
          Activité réglementée
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
          En tant que courtier en assurances, Françoise HANNA exerce en libre prestation de services via le réseau 360 Courtage. Chaque recommandation est délivrée en toute indépendance, après analyse personnalisée des besoins du client.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
          En cours de certification AMF, l'activité de conseil en investissements financiers (CIF) sera ouverte dès obtention de l'agrément officiel. D'ici là, les contenus de ce site ne constituent pas des recommandations en matière d'investissement financier au sens de la réglementation en vigueur.
        </Typography>

        <Typography variant="h3" sx={{ fontWeight: 600, mb: 2, fontSize: "1.75rem" }}>
          Données personnelles (RGPD)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
          Les informations collectées via les formulaires ont pour seul objectif de répondre à tes demandes. Elles ne sont jamais revendues ni partagées avec des tiers sans ton accord explicite.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
          Tu peux exercer tes droits (accès, rectification, suppression) en envoyant un email à [Email professionnel]. Les données sont conservées pour une durée maximale de 3 ans après le dernier contact.
        </Typography>

        <Typography variant="h3" sx={{ fontWeight: 600, mb: 2, fontSize: "1.75rem" }}>
          Cookies
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
          Le site peut utiliser des cookies de mesure d'audience anonymisés afin d'améliorer l'expérience utilisateur. Tu peux paramétrer leur dépôt via les réglages de ton navigateur.
        </Typography>

        <Typography variant="h3" sx={{ fontWeight: 600, mb: 2, fontSize: "1.75rem" }}>
          Avertissement
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
          Les informations présentes sur ce site ont une vocation informative et générale. Elles ne remplacent pas un conseil personnalisé. Tout investissement comporte des risques, notamment de perte en capital.
        </Typography>

        <Typography variant="body2" sx={{ fontStyle: "italic", color: theme.palette.text.secondary }}>
          Ces mentions sont susceptibles d'évoluer. Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}.
        </Typography>
      </Container>
    </Box>
  );
};

export default MentionsLegalesPage;


import {
  Box,
  Container,
  Typography,
  useTheme,
  List,
  ListItem,
  ListItemText,
  Paper,
  Divider,
  Stack,
} from "@mui/material";

const MentionsLegalesPage = () => {
  const theme = useTheme();

  const sectionTitleSx = {
    fontWeight: 600,
    mb: 2,
    fontSize: { xs: "1.5rem", md: "1.75rem" },
  } as const;

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: theme.palette.grey[50] }}>
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

        <Stack spacing={4}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              border: `1px solid ${theme.palette.divider}`,
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Typography variant="h3" sx={sectionTitleSx}>
              Éditeur du site
            </Typography>
            <List sx={{ mb: 4 }}>
              <ListItem disableGutters>
                <ListItemText primary="Dénomination : L'ABC DU PATRIMOINE – Françoise HANNA" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Forme juridique : [à compléter] – Capital social : [à compléter]" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Siège social : [Adresse complète]" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="RCS / SIREN : [à compléter] – TVA intracommunautaire : [à compléter]" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Contact : [Téléphone] – [Email]" />
              </ListItem>
            </List>

            <Typography variant="h3" sx={sectionTitleSx}>
              Hébergement du site
            </Typography>
            <List sx={{ mb: 4 }}>
              <ListItem disableGutters>
                <ListItemText primary="Hébergeur : [Nom de l’hébergeur]" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Adresse : [Adresse de l’hébergeur]" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Téléphone : [Téléphone de l’hébergeur]" />
              </ListItem>
            </List>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h3" sx={sectionTitleSx}>
              Statuts et immatriculations
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
              L’ABC DU PATRIMOINE exerce en qualité de courtier en assurances, membre du réseau 360 Courtage.
            </Typography>
            <List sx={{ mb: 4 }}>
              <ListItem disableGutters>
                <ListItemText primary="Immatriculation ORIAS : n° [à compléter] (orias.fr)" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Autorité de contrôle : Autorité de Contrôle Prudentiel et de Résolution (ACPR) – 4 place de Budapest, CS 92459, 75436 Paris Cedex 09" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Absence de lien capitalistique avec une entreprise d’assurance" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Responsabilité civile professionnelle : [Assureur] – Police n° [à compléter]" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Garantie financière : [à compléter, si applicable]" />
              </ListItem>
            </List>

            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
              En cours de certification AMF pour l’obtention du statut de Conseillère en Investissements Financiers (CIF).
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
              Les conseils délivrés actuellement ne constituent pas des recommandations en investissements financiers au sens de la réglementation en vigueur.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h3" sx={sectionTitleSx}>
              Réclamations et médiation
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
              Pour toute réclamation, adresse-toi à [coordonnées du service réclamation]. Un accusé de réception te sera transmis sous 10 jours ouvrés et une réponse motivée sous 2 mois maximum.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
              En cas de désaccord persistant, tu peux saisir gratuitement La Médiation de l’Assurance – TSA 50110, 75441 Paris Cedex 09 – www.mediation-assurance.org.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h3" sx={sectionTitleSx}>
              Données personnelles (RGPD)
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
              Responsable du traitement : L’ABC DU PATRIMOINE – Françoise HANNA. Les données collectées via le site sont traitées pour gérer tes demandes, planifier un rendez-vous et assurer le suivi commercial.
            </Typography>
            <List sx={{ mb: 4 }}>
              <ListItem disableGutters>
                <ListItemText primary="Base juridique : consentement ou intérêt légitime selon la nature de la demande." />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Destinataires : l’équipe interne et, le cas échéant, les partenaires assureurs strictement nécessaires au traitement." />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Durée de conservation : 3 ans après le dernier contact ou pendant la durée légale applicable." />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Droits : accès, rectification, opposition, limitation, portabilité, suppression. Pour les exercer, écris à [ton email]." />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Autorité de contrôle : Commission Nationale de l’Informatique et des Libertés (CNIL) – cnil.fr." />
              </ListItem>
            </List>

            <Typography variant="h3" sx={sectionTitleSx}>
              Cookies & traceurs
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
              Le site utilise uniquement des cookies techniques nécessaires à son fonctionnement et, le cas échéant, des cookies de mesure d’audience anonymisés. Tu peux paramétrer le dépôt des cookies via les réglages de ton navigateur.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h3" sx={sectionTitleSx}>
              Propriété intellectuelle
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
              L’ensemble des contenus (textes, visuels, logos, structure) présents sur ce site est protégé par le droit d’auteur et la propriété intellectuelle. Toute reproduction ou représentation, même partielle, est soumise à autorisation préalable.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
              Les marques et logos de tiers restent la propriété de leurs titulaires respectifs.
            </Typography>

            <Typography variant="h3" sx={sectionTitleSx}>
              Responsabilités
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
              Malgré le soin apporté à la mise à jour du site, des erreurs ou omissions peuvent subsister. L’ABC DU PATRIMOINE ne peut être tenue responsable des dommages directs ou indirects résultant de l’accès ou de l’utilisation du site. Les liens hypertextes vers d’autres sites n’engagent pas la responsabilité de l’éditeur.
            </Typography>

            <Typography variant="h3" sx={sectionTitleSx}>
              Avertissement réglementaire
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
              Les informations diffusées sur ce site sont à visée informative et ne remplacent pas un conseil personnalisé tenant compte de ta situation. Tout investissement comporte un risque de perte en capital.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h3" sx={sectionTitleSx}>
              Loi applicable
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              Le présent site est régi par le droit français. En cas de litige, les tribunaux compétents seront ceux du ressort du siège social de L’ABC DU PATRIMOINE, sous réserve des dispositions d’ordre public applicables.
            </Typography>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default MentionsLegalesPage;


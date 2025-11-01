import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "Qui est Françoise Hanna ?",
    answer:
      "Je suis courtière en assurances, conseillère en gestion de patrimoine et coach financier. Depuis plus de 5 ans, j'accompagne les particuliers et les professionnels à clarifier leurs décisions patrimoniales avec pédagogie et indépendance.",
  },
  {
    question: "Qu'est-ce qui différencie L'ABC DU PATRIMOINE d'une banque ?",
    answer:
      "Je ne dépends d'aucun établissement financier. Cette indépendance me permet de sélectionner librement les solutions les plus pertinentes pour toi, en fonction de tes objectifs et non d'un catalogue imposé.",
  },
  {
    question: "Comment se déroule le premier rendez-vous ?",
    answer:
      "Nous faisons connaissance pendant environ 45 minutes (en visio ou en présentiel). Tu exprimes tes attentes, je pose un premier diagnostic et nous définissons ensemble les prochaines étapes. Ce rendez-vous est gratuit et sans engagement.",
  },
  {
    question: "Combien de temps dure un accompagnement ?",
    answer:
      "Tout dépend de ta demande : un coaching financier s'étale généralement sur 1 à 3 mois, alors qu'une mission de gestion de patrimoine peut s'inscrire sur plusieurs mois avec des points de suivi réguliers.",
  },
  {
    question: "Proposes-tu des solutions pour les professionnels ?",
    answer:
      "Oui, j'accompagne les dirigeants, indépendants et professions libérales sur la protection sociale, le maintien de revenu, la préparation de la retraite et la structuration de leur patrimoine professionnel.",
  },
  {
    question: "Interviens-tu à distance ?",
    answer:
      "Bien sûr ! Les rendez-vous peuvent se tenir en visio partout en France. Si tu préfères, nous pouvons également nous rencontrer dans mes bureaux ou à l'endroit qui te convient le mieux.",
  },
  {
    question: "Que se passe-t-il si j'ai déjà des contrats ?",
    answer:
      "Nous réalisons un audit détaillé de tes contrats existants pour identifier les points forts, les zones de risque et les optimisations possibles. L'objectif n'est pas de tout changer, mais de t'assurer que chaque solution reste cohérente avec tes projets.",
  },
  {
    question: "Comment choisis-tu les partenaires et assureurs ?",
    answer:
      "Je m'appuie sur le réseau national 360 Courtage et sur une veille permanente du marché. Chaque partenaire est sélectionné pour la qualité de ses garanties, sa solidité et sa capacité à répondre à tes besoins spécifiques.",
  },
  {
    question: "Les honoraires sont-ils transparents ?",
    answer:
      "Toujours. Avant toute mission, je te présente une lettre de mission détaillant le périmètre d'intervention, les modalités de rémunération et les éventuels frais associés. Pas de surprise ni de frais cachés.",
  },
  {
    question: "Quand proposeras-tu du conseil en investissement financier ?",
    answer:
      "Je suis actuellement en cours de certification AMF pour obtenir le statut de Conseillère en Investissements Financiers (CIF). Ce nouveau service sera proposé dès l'obtention de l'agrément, afin de t'accompagner encore plus globalement.",
  },
];

const FaqPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, bgcolor: "#f8f9fa" }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: theme.palette.primary.main,
              fontSize: { xs: "2.5rem", md: "3.2rem" },
            }}
          >
            Foire aux questions
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 600,
              mx: "auto",
              color: theme.palette.text.secondary,
              lineHeight: 1.6,
            }}
          >
            Tu as une question ? Voici les réponses les plus fréquentes pour mieux comprendre ma manière d'accompagner ton patrimoine.
          </Typography>
        </Box>

        {faqs.map((faq, index) => (
          <Accordion
            key={faq.question}
            defaultExpanded={index === 0}
            sx={{
              mb: 2,
              borderRadius: 2,
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
              "&::before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "white",
                borderRadius: 2,
                "& .MuiAccordionSummary-content": {
                  alignItems: "center",
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "white" }}>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Une autre question ?
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
            Écris-moi via le formulaire de contact : je te répondrai avec plaisir et rapidité.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FaqPage;


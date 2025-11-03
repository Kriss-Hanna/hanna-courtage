import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  Divider,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
  Alert,
} from "@mui/material";
import {
  Visibility as VisibilityIcon,
  ArrowBack as ArrowBackIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ContactMessage } from "../../core/types";

const DEMO_MESSAGES: ContactMessage[] = [
  {
    id: "1",
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean.dupont@example.com",
    phone: "06 12 34 56 78",
    message:
      "Je souhaite obtenir un devis pour une assurance auto pour ma nouvelle voiture.",
    serviceInterest: "Assurance Auto",
    date: "2023-05-15T10:30:00",
    read: true,
  },
  {
    id: "2",
    firstName: "Marie",
    lastName: "Martin",
    email: "marie.martin@example.com",
    phone: "07 23 45 67 89",
    message:
      "Bonjour, je cherche une assurance habitation pour mon nouvel appartement à Paris.",
    serviceInterest: "Assurance Habitation",
    date: "2023-05-16T14:45:00",
    read: false,
  },
  {
    id: "3",
    firstName: "Pierre",
    lastName: "Durand",
    email: "pierre.durand@example.com",
    phone: "06 34 56 78 90",
    message:
      "Je souhaiterais comparer les offres d'assurance santé pour ma famille (2 adultes, 2 enfants).",
    serviceInterest: "Assurance Santé",
    date: "2023-05-17T09:15:00",
    read: false,
  },
  {
    id: "4",
    firstName: "Sophie",
    lastName: "Leroy",
    email: "sophie.leroy@example.com",
    phone: "07 45 67 89 01",
    message:
      "Je suis à la recherche d'une assurance professionnelle pour mon cabinet d'architecte.",
    serviceInterest: "Assurance Professionnelle",
    date: "2023-05-18T16:20:00",
    read: true,
  },
  {
    id: "5",
    firstName: "Thomas",
    lastName: "Moreau",
    email: "thomas.moreau@example.com",
    phone: "06 56 78 90 12",
    message:
      "Bonjour, pouvez-vous me contacter pour discuter des options d'assurance pour ma nouvelle entreprise de livraison ?",
    serviceInterest: "Assurance Professionnelle",
    date: "2023-05-19T11:10:00",
    read: false,
  },
];

const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(
    null
  );
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/admin");
      return;
    }

    const fetchMessages = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setMessages(DEMO_MESSAGES);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Erreur lors du chargement des messages"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [navigate]);

  const handleViewMessage = (message: ContactMessage) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === message.id ? { ...m, read: true } : m))
    );

    setSelectedMessage(message);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleLogout = () => {
    // localStorage.removeItem("adminLoggedIn");
    navigate("/admin");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Tableau de bord administrateur
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
        >
          Déconnexion
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Messages des clients
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Statut</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Nom</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Service</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {messages.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    Aucun message trouvé
                  </TableCell>
                </TableRow>
              ) : (
                messages.map((message) => (
                  <TableRow
                    key={message.id}
                    sx={{
                      "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" },
                      bgcolor: message.read
                        ? "inherit"
                        : "rgba(25, 118, 210, 0.08)",
                    }}
                  >
                    <TableCell>
                      <Chip
                        label={message.read ? "Lu" : "Non lu"}
                        color={message.read ? "default" : "primary"}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{formatDate(message.date)}</TableCell>
                    <TableCell>{`${message.firstName} ${message.lastName}`}</TableCell>
                    <TableCell>{message.email}</TableCell>
                    <TableCell>
                      {message.serviceInterest || "Non spécifié"}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleViewMessage(message)}
                        size="small"
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseDialog}
              aria-label="close"
              sx={{ mr: 1 }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6">Détail du message</Typography>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          {selectedMessage && (
            <Box>
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Expéditeur
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {`${selectedMessage.firstName} ${selectedMessage.lastName}`}
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Coordonnées
                </Typography>
                <Typography variant="body1">
                  Email: {selectedMessage.email}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Téléphone: {selectedMessage.phone}
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Service d'intérêt
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {selectedMessage.serviceInterest || "Non spécifié"}
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Date
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {formatDate(selectedMessage.date)}
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Message
                </Typography>
                <Paper
                  variant="outlined"
                  sx={{ p: 2, bgcolor: "background.default" }}
                >
                  <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
                    {selectedMessage.message}
                  </Typography>
                </Paper>
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Fermer</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminDashboardPage;

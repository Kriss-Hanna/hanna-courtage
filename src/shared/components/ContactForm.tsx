import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  MenuItem,
  Alert,
  CircularProgress,
  useTheme,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { ContactFormProps } from "../../core/interfaces";
import { ContactFormData } from "../../core/types";

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  loading = false,
  error,
}) => {
  const theme = useTheme();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    serviceInterest: "",
    remoteMeeting: false,
  });
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [success, setSuccess] = useState(false);

  const serviceOptions = [
    {
      value: "assurances-gestion",
      label: "Assurances & Gestion de patrimoine",
    },
    { value: "coaching-financier", label: "Coaching financier" },
    {
      value: "vision-patrimoniale",
      label: "Vision globale du patrimoine",
    },
    { value: "autre", label: "Autre" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Effacer l'erreur lorsque l'utilisateur commence à taper
    if (formErrors[name as keyof ContactFormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      errors.firstName = "Le prénom est requis";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Le nom est requis";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "L'email est requis";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Format d'email invalide";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = "Le numéro de téléphone est requis";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Le message est requis";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
      setSuccess(true);

      // Réinitialiser le formulaire après soumission réussie
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        serviceInterest: "",
        remoteMeeting: false,
      });

      // Masquer le message de succès après 5 secondes
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: { xs: 2, md: 4 },
        borderRadius: 2,
        backgroundColor: "white",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          mb: 3,
          fontWeight: 600,
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
        Contactez-nous
      </Typography>

      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Votre message a été envoyé avec succès. Nous vous contacterons
          bientôt.
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Prénom"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={!!formErrors.firstName}
            helperText={formErrors.firstName}
            required
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Nom"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={!!formErrors.lastName}
            helperText={formErrors.lastName}
            required
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
            required
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Téléphone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!formErrors.phone}
            helperText={formErrors.phone}
            required
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Service d'intérêt"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            sx={{ mb: 2 }}
          >
            {serviceOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={formData.remoteMeeting || false}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    remoteMeeting: event.target.checked,
                  }))
                }
              />
            }
            label="Je souhaite un rendez-vous en visio"
            sx={{ mb: 1 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            error={!!formErrors.message}
            helperText={formErrors.message}
            required
            sx={{ mb: 3 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            disabled={loading}
            sx={{
              py: 1.5,
              fontWeight: 600,
              position: "relative",
              overflow: "hidden",
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`,
                transition: "all 0.5s ease",
              },
              "&:hover::after": {
                left: "100%",
              },
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Envoyer"
            )}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;

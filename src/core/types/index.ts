// Types pour l'application de courtage en assurance

// Type pour les informations de contact
export type ContactInfo = {
  email: string;
  phone: string;
  address: string;
};

// Type pour les services d'assurance
export type InsuranceService = {
  id: string;
  title: string;
  description: string;
  icon?: string;
};

// Type pour les membres de l'équipe
export type TeamMember = {
  id: string;
  name: string;
  position: string;
  bio: string;
  photoUrl?: string;
};

// Type pour les témoignages clients
export type Testimonial = {
  id: string;
  clientName: string;
  content: string;
  rating: number;
  date: string;
};

// Type pour les formulaires de contact
export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  serviceInterest?: string;
};

// Type pour les données de connexion admin
export type AdminLoginData = {
  email: string;
  password: string;
};

// Type pour les messages de contact (pour l'administration)
export type ContactMessage = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  serviceInterest?: string;
  date: string;
  read: boolean;
}; 
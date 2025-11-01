// Interfaces pour l'application de courtage en assurance

// Interface pour les props du composant Header
export interface HeaderProps {
  transparent?: boolean;
  activePath?: string;
}

// Interface pour les props du composant Footer
export interface FooterProps {
  showContactInfo?: boolean;
}

// Interface pour les props du composant de carte de service
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo?: string;
}

// Interface pour les props du composant de formulaire de contact
export interface ContactFormProps {
  formSubmitEmail?: string;
}

// Interface pour les props du composant de bannière
export interface BannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

// Interface pour les props du composant de témoignage
export interface TestimonialCardProps {
  name: string;
  content: string;
  rating: number;
  date: string;
}

// Interface pour les props du composant de formulaire de connexion admin
export interface AdminLoginFormProps {
  onSubmit: (data: import('../types').AdminLoginData) => void;
  loading?: boolean;
  error?: string;
}

// Interface pour les props du composant de tableau des messages
export interface MessageTableProps {
  messages: import('../types').ContactMessage[];
  loading?: boolean;
  error?: string;
  onViewDetails?: (id: string) => void;
}

// Interface pour les props du composant de détail de message
export interface MessageDetailProps {
  message: import('../types').ContactMessage;
  onBack: () => void;
}

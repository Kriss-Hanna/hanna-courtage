import { Box, Typography, Button, Container, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { BannerProps } from "../../core/interfaces";

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  backgroundImage = "/banner-background.jpg",
  ctaText = "En savoir plus",
  ctaLink = "/contact",
  secondaryCtaText,
  secondaryCtaLink,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        color: "white",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)",
          zIndex: -2,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(135deg, ${theme.palette.primary.dark}80 0%, ${theme.palette.primary.main}40 100%)`,
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "60%" },
            animation: "fadeIn 1s ease-out",
            "@keyframes fadeIn": {
              from: { opacity: 0, transform: "translateY(20px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
                fontWeight: 400,
                textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                lineHeight: 1.5,
              }}
            >
              {subtitle}
            </Typography>
          )}

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={RouterLink}
              to={ctaLink}
              sx={{
                py: 1.5,
                px: 4,
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: "30px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                },
                transition: "all 0.3s ease",
              }}
            >
              {ctaText}
            </Button>

            {secondaryCtaText && (
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                component={RouterLink}
                to={secondaryCtaLink || ctaLink}
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  borderRadius: "30px",
                  borderColor: "rgba(255,255,255,0.8)",
                  color: "white",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255,255,255,0.12)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {secondaryCtaText}
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

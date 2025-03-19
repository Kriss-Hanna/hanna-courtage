import {
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
  CardActionArea,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ServiceCardProps } from "../../core/interfaces";

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  linkTo,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
        },
      }}
    >
      <CardActionArea
        component={linkTo ? RouterLink : "div"}
        to={linkTo}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          height: "100%",
          p: 0,
        }}
      >
        <CardContent sx={{ p: 3, width: "100%", flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              height: 60,
              borderRadius: "50%",
              backgroundColor: `${theme.palette.primary.main}15`,
              color: theme.palette.primary.main,
              mb: 2,
              transition: "all 0.3s ease",
              "& svg": {
                fontSize: 30,
              },
            }}
          >
            {icon}
          </Box>

          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 600,
              mb: 1.5,
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -8,
                left: 0,
                width: 40,
                height: 3,
                backgroundColor: theme.palette.secondary.main,
                borderRadius: 1,
              },
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mt: 2.5,
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;

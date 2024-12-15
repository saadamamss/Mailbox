import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box sx={{ textAlign: "center", maxWidth: "500px" }}>
          <Typography variant="h2" component="h2" sx={{ fontWeight: "500" }}>
            404 <br />
            Page Not Found
          </Typography>
          <p style={{ fontSize: "20px" }}>
            The page you are looking for doesn't exist or has been moved
          </p>

          <Link
            to="/"
            style={{
              padding: "20px",
              backgroundColor: "#222",
              display: "block",
              color: "#fff",
              textDecoration: "none",
              fontSize: "20px",
            }}
          >
            Back To Home
          </Link>
        </Box>
      </Container>
    </>
  );
}

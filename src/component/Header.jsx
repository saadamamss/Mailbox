import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/61b8e11ef05654e5f691a97c_Group 625.svg";
const pages = [
  { name: "Home", url: "/" },
  { name: "Features", url: "/#feature" },
  { name: "Blog", url: "/blog" },
  { name: "Pricing", url: "/pricing" },
];
function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { pathname } = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(!anchorElNav);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="header">
      <Container
        maxWidth="xl"
        sx={{
          maxWidth: "1350px !important",
          padding: "25px 10px",
          position: "relative",
        }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              srcSet={`${logo}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${logo}?w=161&fit=crop&auto=format`}
              alt=""
              loading="lazy"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Box>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="info"
              >
                <MenuIcon sx={{ color: "#222" }} />
              </IconButton>
              <img
                srcSet={`${logo}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${logo}?w=161&fit=crop&auto=format`}
                alt=""
                loading="lazy"
              />
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <ul className="list">
              
              {pages.map((page, index) => (
                <li
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                >
                  <Link
                  
                    to={page.url}
                    className={`pages ${page.url === pathname && "active"}`}
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button variant="contained" className="subscribebtn">
              Subscribe
            </Button>
          </Box>
          <Box
            className="menubox"
            sx={{
              width: "100%",
              position: "absolute",
              bgcolor: "#fff",
              top: "100%",
              left: "0px",
              height: anchorElNav ? `${pages.length * 40}px` : "0px",
              display: { xs: "block", md: "none" },
            }}
          >
            <ul
              style={{
                listStyle: "none",
                color: "#000",
                padding: "0px",
                margin: "0px",
              }}
            >
              {pages.map((page, index) => {
                return (
                  <li key={index} style={{ height: "40px" }}>
                    <Link
                      to={page.url}
                      className={`pages ${page.url === pathname && "active"}`}
                    >
                      {page.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-section">
        <hr />
      <Container sx={{ maxWidth: "1250px !important" , padding:"40px 20px"}}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box className="footer-container" sx={{ display: "flex" , justifyContent:"space-between" }}>
            <Box className="footer-left-container" sx={{ maxWidth:"500px" , paddingRight:"40px" }}>
              <Link
                to="/"
                aria-current="page"
                className="footer-brand-logo w-inline-block w--current"
              >
                <img
                  src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654e5f691a97c_Group%20625.svg"
                  loading="lazy"
                  alt=""
                />
              </Link>
              <p className="paragraph-16px-light" style={{ fontSize: "18px" }}>
                The hottest newsletter for readers, writers, and publishing
                professionals everywhere.
              </p>
              <Box sx={{ display: "flex", gap: "30px", padding: "30px 0px" }}>
                <Link
                  data-w-id="9fef59bf-6833-afda-7579-a898c848f908"
                  to="http://www.twitter.com"
                  className="social-links-icons w-inline-block"
                >
                  <img
                    width="30px"
                    src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61bba2a0809ede27ff2cef89_footer%20social%203.svg"
                    loading="lazy"
                    alt=""
                    className="social-images"
                  />
                </Link>
                <Link
                  data-w-id="98f02539-ba0e-3eaa-396d-05995a7a59dd"
                  to="http://www.facebook.com"
                  className="social-links-icons w-inline-block"
                >
                  <img
                    width="30px"
                    src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61bba29f7b53e21a8ba16c59_Footer%20social%202.svg"
                    loading="lazy"
                    alt=""
                    className="social-images"
                  />
                </Link>
                <Link
                  data-w-id="249fff95-dd4a-8b39-ce8e-5776f788885b"
                  to="http://www.instagram.com"
                  className="social-links-icons w-inline-block"
                >
                  <img
                    width="30px"
                    src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61bba2a03802ed250cad56c0_Footer%20Social.svg"
                    loading="lazy"
                    alt=""
                    className="social-images"
                  />
                </Link>
              </Box>
            </Box>

            <Box
              className="footer-right-container"
              sx={{ display: "flex" }}
            >
              <Box
                className="footer-subcontainers"
                sx={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <Box className="footer-titles">Pages</Box>
                <Link
                  to="/"
                  aria-current="page"
                  className="footer-text w--current"
                >
                  Homepage
                </Link>
                <Link to="/#features" className="footer-text">
                  Features
                </Link>
                <Link to="/pricing" className="footer-text">
                  Pricing
                </Link>
                <Link to="/blog" className="footer-text">
                  Blog
                </Link>
              </Box>
              <Box
                className="footer-subcontainers"
                sx={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <Box className="footer-titles">Useful</Box>
                <Link to="/reference/style-guide" className="footer-text">
                  Style Guide
                </Link>
                <Link to="/reference/licensing" className="footer-text">
                  Licenses
                </Link>
                <Link to="/reference/changelog" className="footer-text">
                  Changelog
                </Link>
                <Link to="/reference/instructions" className="footer-text">
                  Instructions
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="footer-down-wrapper" sx={{ padding: "40px 0px" }}>
            <Box className="footer-down-left">
              <Box className="footer-text no-hover" sx={{ fontSize: "18px" }}>
                © All rights reserved.{" "}
                <Link
                  to="https://www.conversionflow.co/"
                  target="_blank"
                  className="footer-down-links"
                >
                  Conversionflow
                </Link>
                . Powered by{" "}
                <Link
                  to="https://webflow.com/"
                  target="_blank"
                  className="footer-down-links"
                >
                  Webflow
                </Link>
                .{" "}
                <Link to="/reference/licensing" className="footer-down-links">
                  Image License Info
                </Link>
                .
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}

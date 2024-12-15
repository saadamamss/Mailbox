import { Box, Container, Grid2, Typography } from "@mui/material";
import Header from "./component/Header.jsx";
import { Favorite, Star } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import Footer from "./component/Footer.jsx";
import { useEffect, useRef } from "react";
export default function Home() {
  const refFeat = useRef(null);
  const location = useLocation();
  useEffect(() => {
    location.hash === "#feature" &&
      refFeat.current.scrollIntoView({
        top: true,
        behavior: "smooth",
      });
  }, []);
  return (
    <>
      <Header />
      {/********************************************** */}
      <Box>
        <Container sx={{ maxWidth: "1250px !important" }}>
          <Box className="hero-section home-hero">
            <Box className="wrapper-1200px home-hero">
              <Box className="section-text-container home-hero">
                <h1 className="h1-hero-heading">
                  <span className="h1-home-text-span">Hot off the press,</span>
                  <span className="green-text h1-home-text-span">
                    into your inpox
                  </span>
                  <span className="h1-home-text-span">every week</span>
                  <span className="red-text">.</span>
                </h1>
                <Box className="slide-in-wrapper">
                  <Box className="form-block w-form">
                    <form
                      id="email-form"
                      name="email-form"
                      data-name="Email Form"
                      method="get"
                      className="home-hero-form"
                    >
                      <input
                        type="email"
                        className="home-hero-email w-input"
                        maxLength="256"
                        name="email"
                        data-name="Email"
                        placeholder="Enter your e-mail"
                        id="email"
                        required=""
                      />
                      <input
                        type="submit"
                        value="Subscribe"
                        data-wait="Please wait..."
                        className="submit-button w-button"
                      />
                    </form>
                  </Box>
                </Box>
                <Box style={{ padding: "25px 0px" }}>
                  <Box
                    data-w-id="c35ceb5f-78d4-f7aa-c5e3-8f6abb156100"
                    className="slide-in-wrapper"
                  >
                    <Box className="pointers-text-wrapper">
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        className="pointers-text-icon"
                      />
                      <Box className="pointers-text">
                        The freshest new releases every month
                      </Box>
                    </Box>
                  </Box>
                  <Box className="slide-in-wrapper">
                    <Box className="pointers-text-wrapper">
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        className="pointers-text-icon"
                      />
                      <Box className="pointers-text">
                        Insider interviews with authors
                      </Box>
                    </Box>
                  </Box>
                  <Box className="slide-in-wrapper">
                    <Box className="pointers-text-wrapper">
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        className="pointers-text-icon"
                      />
                      <Box className="pointers-text">
                        Reviews, giveaways &amp; more for bookworms
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="section-image-container home-hero">
                <Box className="home-hero-image">
                  <Box className="home-hero-image-2">
                    <img
                      src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef056546ac791a952_Group%20555.svg"
                      loading="lazy"
                      alt="Vector "
                      className="hero-path"
                    />
                  </Box>
                  <Box className="home-hero-image-3">
                    <img
                      src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61ba7bc9e6448d89c6e6e4fc_popup.png"
                      loading="lazy"
                      alt=""
                      className="hero-image-3"
                    />
                  </Box>
                  <Box className="home-hero-image-1">
                    <img
                      src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef0565462e091a965_pexels-oladimeji-ajegbile-2379886%201-min.png"
                      loading="lazy"
                      srcSet="
                  https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef0565462e091a965_pexels-oladimeji-ajegbile-2379886%25201-min-p-500.png 500w,
                  https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef0565462e091a965_pexels-oladimeji-ajegbile-2379886%201-min.png         874w
                "
                      sizes="(max-width: 479px) 72vw, (max-width: 767px) 68vw, (max-width: 991px) 57vw, (max-width: 1439px) 33vw, 440px"
                      alt=""
                      className="hero-image"
                    />
                  </Box>
                </Box>
                <img
                  src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654d36c91a979_Ellipse%20106-min%20(1).png"
                  loading="lazy"
                  style={{ opacity: "1" }}
                  data-w-id="67b4ba1e-ace0-a2e0-eadc-f553230bdea3"
                  sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 72vw, (max-width: 1439px) 41vw, 550px"
                  srcSet="
              https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654d36c91a979_Ellipse%2520106-min%2520(1)-p-500.png 500w,
              https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654d36c91a979_Ellipse%20106-min%20(1).png           993w
            "
                  alt=""
                  className="shadow"
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/************************************************** */}
      <Box sx={{ height: "auto" }}>
        <Container sx={{ maxWidth: "1250px !important" }}>
          <Grid2 container spacing={10} sx={{ justifyContent: "center" }}>
            <Grid2
              size={{ xs: 12, sm: 10, md: 6 }}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid2
                size={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "0px 20px",
                }}
              >
                <Typography
                  variant="h2"
                  component="h2"
                  className="herotxt"
                  sx={{ fontWeight: "700", fontSize: "64px" }}
                >
                  50K
                </Typography>
                <Box style={{ display: "flex", color: "red" }}>
                  <Favorite style={{ fontSize: "18px" }} />
                  <Favorite style={{ fontSize: "18px" }} />
                  <Favorite style={{ fontSize: "18px" }} />
                  <Favorite style={{ fontSize: "18px" }} />
                </Box>
                <h3>Total Subscriber</h3>
              </Grid2>

              <Grid2
                size={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  padding: "0px 20px",
                }}
              >
                <Typography
                  variant="h2"
                  component="h2"
                  className="herotxt"
                  sx={{ fontWeight: "700", fontSize: "64px" }}
                >
                  4.7
                </Typography>
                <Box style={{ display: "flex", color: "gold" }}>
                  <Star style={{ fontSize: "18px" }} />
                  <Star style={{ fontSize: "18px" }} />
                  <Star style={{ fontSize: "18px" }} />
                  <Star style={{ fontSize: "18px" }} />
                </Box>
                <h3>342 Ratings</h3>
              </Grid2>
            </Grid2>
            <Grid2
              size={{ xs: 12, sm: 10, md: 6 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: "700",
                  fontSize: "35px",
                  letterSpacing: "1.5px",
                }}
              >
                Join a
                <span style={{ color: "#71a78d" }}>thriving community</span> of
                readers, writers & publishers who love talking about books.
              </Typography>
              <br />
              <h3 style={{ opacity: "0.7", fontSize: "20px" }}>
                Read by people at these leading companies:
              </h3>
              <Box className="trusted-brand-logos" style={{ opacity: "0.7" }}>
                <img
                  src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654fa6491a988_1.png"
                  loading="lazy"
                  width="133"
                  alt=""
                  className="company-icons"
                />
                <img
                  src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654964191a987_3.png"
                  loading="lazy"
                  width="128"
                  alt=""
                  className="company-icons"
                />
                <img
                  src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef056540ea391a986_2.png"
                  loading="lazy"
                  width="134"
                  alt=""
                  className="company-icons"
                />
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      {/******************************************************** */}
      <Box
        sx={{ paddingTop: "50px", height: "auto" }}
        ref={refFeat}
        id="feature"
      >
        <Container sx={{ maxWidth: "1250px !important" }}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "40px 0px",
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              className="featurehead"
              sx={{
                fontWeight: "700",
                fontSize: "58px",
                maxWidth: "600px",
                textAlign: "center",
              }}
            >
              Get the latest from the world of books
              <span style={{ color: "#71a78d" }}> with mailbox </span>
            </Typography>
          </Box>
          <Grid2 container spacing={6} sx={{ justifyContent: "center" }}>
            <Grid2
              size={{ xs: 8, sm: 4, md: 4, lg: 3.5 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box className="three-card-icon-wrap">
                <img
                  src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef056546fa891a954_Group%20603.svg"
                  loading="lazy"
                  alt=""
                  className="three-card-icon"
                />
              </Box>
              <h2
                style={{
                  fontSize: "25px",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              >
                Guest Feature
              </h2>
              <p style={{ fontSize: "18px", opacity: "0.7" }}>
                We're committed to covering Boxerse writers and genres in every
                edition of mailbox.
              </p>
              <Link
                to=""
                style={{
                  textDecoration: "none",
                  fontSize: "18px",
                  color: "#71a78d",
                }}
              >
                Learn More{" "}
              </Link>
            </Grid2>

            <Grid2
              size={{ xs: 8, sm: 4, md: 4, lg: 3.5 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box className="three-card-icon-wrap">
                <img
                  src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef056542e3b91a955_Group%20602.svg"
                  loading="lazy"
                  alt=""
                  className="three-card-icon"
                />
              </Box>
              <h2
                style={{
                  fontSize: "25px",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              >
                Insider Info
              </h2>
              <p style={{ fontSize: "18px", opacity: "0.7" }}>
                We're committed to covering Boxerse writers and genres in every
                edition of mailbox.
              </p>
              <Link
                to=""
                style={{
                  textDecoration: "none",
                  fontSize: "18px",
                  color: "#71a78d",
                }}
              >
                Learn More{" "}
              </Link>
            </Grid2>
            <Grid2
              size={{ xs: 8, sm: 4, md: 4, lg: 3.5 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box className="three-card-icon-wrap">
                <img
                  src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654c3ae91a953_Group%20601.svg"
                  loading="lazy"
                  alt=""
                  className="three-card-icon"
                />
              </Box>
              <h2
                style={{
                  fontSize: "25px",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              >
                Boxers Voices
              </h2>
              <p style={{ fontSize: "18px", opacity: "0.7" }}>
                We're committed to covering Boxerse writers and genres in every
                edition of mailbox.
              </p>
              <Link
                to=""
                style={{
                  textDecoration: "none",
                  fontSize: "18px",
                  color: "#71a78d",
                }}
              >
                Learn More{" "}
              </Link>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      {/********************************************************** */}
      <Box sx={{ paddingTop: "100px" }}>
        <Container sx={{ maxWidth: "1250px !important" }}>
          <Box className="hero-section home-hero">
            <Box
              className="wrapper-1200px home-hero"
              sx={{ paddingBottom: "50px !important" }}
            >
              <Box className="section-image-container blog-hero">
                <Box className="home-blog-image">
                  <Box className="home-blog-image-2">
                    <img
                      src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef056543f3991a970_Group%20584.svg"
                      loading="lazy"
                      alt=""
                      className="path-icon"
                    />
                  </Box>
                  <Box className="home-blog-image-3">
                    <img
                      src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef056546ac791a952_Group%20555.svg"
                      loading="lazy"
                      alt="Vector "
                      className="path-icon"
                    />
                  </Box>

                  <Box className="home-blog-image-4">
                    <img
                      src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61bb8367db0e75b3d3ea68d7_mailbox%20white.svg"
                      loading="lazy"
                      alt=""
                    />
                  </Box>

                  <img
                    style={{ position: "relative", zIndex: "1" }}
                    src={require(`./assets/one1.png`)}
                    loading="lazy"
                    srcSet={`${require("./assets/one500.png")} 500w, ${require("./assets/one800.png")} 800w, ${require("./assets/one1.png")} 880w`}
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 57vw, (max-width: 1439px) 34vw, 440px"
                    alt=""
                    className="hero-image"
                  />
                </Box>

                <img
                  src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654d36c91a979_Ellipse%20106-min%20(1).png"
                  loading="lazy"
                  srcSet="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654d36c91a979_Ellipse%2520106-min%2520(1)-p-500.png 500w, https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654d36c91a979_Ellipse%20106-min%20(1).png 993w"
                  sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 57vw, (max-width: 1439px) 34vw, 440px"
                  alt=""
                  className="shadow"
                />
              </Box>
              <Box className="section-text-container blog-hero">
                <Typography
                  variant="h2"
                  component="h1"
                  className="h1-hero-heading text-wrap blog"
                >
                  <span className="h1-home-text-span">Join </span>
                  <span className="h1-home-text-span">a </span>
                  <span className="green-text h1-home-text-span">book </span>
                  <span className="green-text h1-home-text-span"> club</span>
                  <span className="h1-home-text-span">and </span>
                  <span className="h1-home-text-span">read</span>
                  <span className="h1-home-text-span">
                    along
                    <span className="red-text">.</span>
                  </span>
                </Typography>
                <Box className="slide-in-wrapper">
                  <p
                    style={{
                      fontSize: "18px",
                      letterSpacing: "1.1px",
                      opacity: "0.7",
                    }}
                  >
                    Do you struggle with your reading habit? We host several
                    book clubs for readers of every genre and exciting new books
                    are assigned every month. Read along with our community of
                    enthusiastic bookworms and rediscover the joy of talking to
                    a like-minded group about what you're reading.
                  </p>
                </Box>
                <hr />
                <Box style={{ padding: "15px 0px" }}>
                  <Box
                    data-w-id="c35ceb5f-78d4-f7aa-c5e3-8f6abb156100"
                    className="slide-in-wrapper"
                  >
                    <Box className="pointers-text-wrapper">
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        className="pointers-text-icon"
                      />
                      <Box className="pointers-text">
                        The freshest new releases every month
                      </Box>
                    </Box>
                  </Box>
                  <Box className="slide-in-wrapper">
                    <Box className="pointers-text-wrapper">
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        className="pointers-text-icon"
                      />
                      <Box className="pointers-text">
                        Insider interviews with authors
                      </Box>
                    </Box>
                  </Box>
                  <Box className="slide-in-wrapper">
                    <Box className="pointers-text-wrapper">
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        className="pointers-text-icon"
                      />
                      <Box className="pointers-text">
                        Reviews, giveaways &amp; more for bookworms
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/****************************************** */}
      <Box>
        <Container sx={{ maxWidth: "1250px !important" }}>
          <Box sx={{ marginBottom: "60px" }}>
            <Typography
              variant="h2"
              component="h1"
              className="h1-hero-heading text-wrap cardsHead"
            >
              <span className="h1-home-text-span">If</span>
              <span className="h1-home-text-span">you</span>
              <span className="h1-home-text-span green-text">love</span>
              <span className="h1-home-text-span green-text">reading,</span>
              <span className="h1-home-text-span">you’ll</span>
              <span className="h1-home-text-span">love</span>

              <span className="h1-home-text-span">
                mailbox<span className="red-text">.</span>
              </span>
            </Typography>

            <p
              style={{
                fontSize: "18px",
                opacity: "0.7",
                letterSpacing: "1px",
                maxWidth: "600px",
              }}
            >
              Whether you have super specific likes (and dislikes) or just very
              little time, the mailbox community has room for you.
            </p>
          </Box>
          <Box>
            <Grid2 container spacing={6} sx={{ justifyContent: "center" }}>
              <Grid2 size={{ xs: 12, sm: 9, md: 6 }}>
                <Box
                  sx={{ bgcolor: "#fff", padding: "40px" }}
                  className="home-four-card"
                >
                  <Box
                    className="home-four-card-icon"
                    sx={{ marginBottom: "15px" }}
                  >
                    <img
                      src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef056546fa891a954_Group%20603.svg"
                      width={70}
                      loading="lazy"
                      alt=""
                      className="three-card-icon"
                    />
                  </Box>
                  <Typography
                    variant="h2"
                    component="h2"
                    className="home-four-card-title"
                    sx={{
                      fontSize: "35px",
                      fontWeight: "500",
                      marginBottom: "0px",
                    }}
                  >
                    New on the block
                  </Typography>
                  <p style={{ fontSize: "18px", opacity: "0.7" }}>
                    A regular section for debut novels to help you discover new
                    voices and expand your reading horizons.
                  </p>
                  <Box
                    data-w-id="b9521cac-25de-273e-7520-fbfc8c8a7d8c"
                    className="learn-more-link"
                  >
                    <span className="green-text">Learn More </span>
                    <span>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654330691a978_Vector.svg"
                        loading="lazy"
                        alt=""
                        className="arrow-hovers"
                      />
                    </span>
                  </Box>
                </Box>
              </Grid2>

              <Grid2 size={{ xs: 12, sm: 9, md: 6 }}>
                <Box
                  sx={{ bgcolor: "#fff", padding: "40px" }}
                  className="home-four-card"
                >
                  <Box
                    className="home-four-card-icon"
                    sx={{ marginBottom: "15px" }}
                  >
                    <img
                      src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef056546fa891a954_Group%20603.svg"
                      width={70}
                      loading="lazy"
                      alt=""
                      className="three-card-icon"
                    />
                  </Box>
                  <Typography
                    variant="h2"
                    component="h2"
                    className="home-four-card-title"
                    sx={{
                      fontSize: "35px",
                      fontWeight: "500",
                      marginBottom: "0px",
                    }}
                  >
                    New on the block
                  </Typography>
                  <p style={{ fontSize: "18px", opacity: "0.7" }}>
                    A regular section for debut novels to help you discover new
                    voices and expand your reading horizons.
                  </p>
                  <Box
                    data-w-id="b9521cac-25de-273e-7520-fbfc8c8a7d8c"
                    className="learn-more-link"
                  >
                    <span className="green-text">Learn More </span>
                    <span>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654330691a978_Vector.svg"
                        loading="lazy"
                        alt=""
                        className="arrow-hovers"
                      />
                    </span>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 9, md: 6 }}>
                <Box
                  sx={{ bgcolor: "#fff", padding: "40px" }}
                  className="home-four-card"
                >
                  <Box
                    className="home-four-card-icon"
                    sx={{ marginBottom: "15px" }}
                  >
                    <img
                      src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef056546fa891a954_Group%20603.svg"
                      width={70}
                      loading="lazy"
                      alt=""
                      className="three-card-icon"
                    />
                  </Box>
                  <Typography
                    variant="h2"
                    component="h2"
                    className="home-four-card-title"
                    sx={{
                      fontSize: "35px",
                      fontWeight: "500",
                      marginBottom: "0px",
                    }}
                  >
                    New on the block
                  </Typography>
                  <p style={{ fontSize: "18px", opacity: "0.7" }}>
                    A regular section for debut novels to help you discover new
                    voices and expand your reading horizons.
                  </p>
                  <Box
                    data-w-id="b9521cac-25de-273e-7520-fbfc8c8a7d8c"
                    className="learn-more-link"
                  >
                    <span className="green-text">Learn More </span>
                    <span>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654330691a978_Vector.svg"
                        loading="lazy"
                        alt=""
                        className="arrow-hovers"
                      />
                    </span>
                  </Box>
                </Box>
              </Grid2>

              <Grid2 size={{ xs: 12, sm: 9, md: 6 }}>
                <Box
                  sx={{ bgcolor: "#fff", padding: "40px" }}
                  className="home-four-card"
                >
                  <Box
                    className="home-four-card-icon"
                    sx={{ marginBottom: "15px" }}
                  >
                    <img
                      src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef056546fa891a954_Group%20603.svg"
                      width={70}
                      loading="lazy"
                      alt=""
                      className="three-card-icon"
                    />
                  </Box>
                  <Typography
                    variant="h2"
                    component="h2"
                    className="home-four-card-title"
                    sx={{
                      fontSize: "35px",
                      fontWeight: "500",
                      marginBottom: "0px",
                    }}
                  >
                    New on the block
                  </Typography>
                  <p style={{ fontSize: "18px", opacity: "0.7" }}>
                    A regular section for debut novels to help you discover new
                    voices and expand your reading horizons.
                  </p>
                  <Box
                    data-w-id="b9521cac-25de-273e-7520-fbfc8c8a7d8c"
                    className="learn-more-link"
                  >
                    <span className="green-text">Learn More </span>
                    <span>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654330691a978_Vector.svg"
                        loading="lazy"
                        alt=""
                        className="arrow-hovers"
                      />
                    </span>
                  </Box>
                </Box>
              </Grid2>
            </Grid2>
          </Box>
        </Container>
      </Box>

      {/**********************testemoial******************** */}
      <Box sx={{ paddingTop: "150px" }}>
        <Box sx={{ margin: "50px 0px", position: "relative" }}>
          <Box sx={{}} className="tesmonialbg"></Box>
          <Container
            sx={{ maxWidth: "1250px !important", position: "relative" }}
          >
            <Box className="hero-section home-hero" sx={{}}>
              <Box className="wrapper-1200px home-hero testmonial">
                <Box className="section-image-container blog-hero">
                  <Box className="home-hero-image">
                    <Box className="home-testmonial-image-2">
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654306b91a951_Group%2019.svg"
                        loading="lazy"
                        alt=""
                        className="path-icon"
                      />
                    </Box>

                    <img
                      style={{ position: "relative", zIndex: "1" }}
                      src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef056547b7e91a964_pexels-andrea-piacquadio-774909%202-min.png"
                      loading="lazy"
                      alt=""
                      className="testimonial-image-1"
                    />
                  </Box>

                  <img
                    src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654d36c91a979_Ellipse%20106-min%20(1).png"
                    loading="lazy"
                    srcSet="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654d36c91a979_Ellipse%2520106-min%2520(1)-p-500.png 500w, https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654d36c91a979_Ellipse%20106-min%20(1).png 993w"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 57vw, (max-width: 1439px) 34vw, 440px"
                    alt=""
                    className="shadow"
                  />
                </Box>
                <Box className="section-text-container blog-hero tesmonial">
                  <Box className="testimonial-text-wrapper">
                    <Box className="testimonial-brand-icon">
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654764991a989_5.png"
                        loading="lazy"
                        width="150"
                        alt=""
                        className="testimonial-brand-icon"
                      />
                    </Box>
                    <Box>
                      <p className="testimonial-text">
                        I look forward to mailbox every month! It's my favorite
                        way to spend weekends because it's not just a
                        newsletter— it's the source of all my planned reading.
                      </p>
                    </Box>
                    <Box className="testimonial-author">Julia Franklin</Box>
                    <Box className="testimonial-author-bio">
                      Marketing Executive
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      {/******************************************************** */}
      <Box sx={{ padding: "80px 0px" }}>
        <Container sx={{ maxWidth: "1250px !important" }}>
          <Box className="cat-section" sx={{ marginTop: "50px" }}>
            <Typography
              variant="h2"
              component="h1"
              className="h1-hero-heading text-wrap"
            >
              <span className="h1-home-text-span">So,</span>
              <span className="h1-home-text-span">what</span>
              <span className="h1-home-text-span">are</span>
              <span className="h1-home-text-span">you</span>
              <span className="green-text h1-home-text-span">next</span>
              <span className="green-text h1-home-text-span">
                reading
                <span className="red-text">?</span>
              </span>
            </Typography>
            <Box className="slide-in-wrapper" sx={{ padding: "30px 0px" }}>
              <Box className="form-block w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  className="home-hero-form"
                >
                  <input
                    type="email"
                    className="home-hero-email w-input"
                    maxLength="256"
                    name="email"
                    data-name="Email"
                    placeholder="Enter your e-mail"
                    id="email"
                    required=""
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    data-wait="Please wait..."
                    className="submit-button w-button"
                  />
                </form>
              </Box>
            </Box>
            <Box className="catsection-cats">
              <Box
                data-w-id="c35ceb5f-78d4-f7aa-c5e3-8f6abb156100"
                className="slide-in-wrapper"
              >
                <Box className="pointers-text-wrapper">
                  <img
                    src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                    loading="lazy"
                    alt="Green Check Mark"
                    className="pointers-text-icon"
                  />
                  <Box className="pointers-text">
                    The freshest new releases every month
                  </Box>
                </Box>
              </Box>
              <Box className="slide-in-wrapper">
                <Box className="pointers-text-wrapper">
                  <img
                    src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                    loading="lazy"
                    alt="Green Check Mark"
                    className="pointers-text-icon"
                  />
                  <Box className="pointers-text">
                    Insider interviews with authors
                  </Box>
                </Box>
              </Box>
              <Box className="slide-in-wrapper">
                <Box className="pointers-text-wrapper">
                  <img
                    src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                    loading="lazy"
                    alt="Green Check Mark"
                    className="pointers-text-icon"
                  />
                  <Box className="pointers-text">
                    Reviews, giveaways &amp; more for bookworms
                  </Box>
                </Box>
              </Box>
              <Box className="slide-in-wrapper">
                <Box className="pointers-text-wrapper">
                  <img
                    src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                    loading="lazy"
                    alt="Green Check Mark"
                    className="pointers-text-icon"
                  />
                  <Box className="pointers-text">
                    Reviews, giveaways &amp; more for bookworms
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {/******************************************************** */}
      <Footer />
    </>
  );
}

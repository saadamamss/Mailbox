import { Box, Container, Grid2, Tab, Tabs } from "@mui/material";
import Footer from "./component/Footer";
import Header from "./component/Header.jsx";
import "./assets/blog.css";
import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ paddingBlock: 3 }}>{children}</Box>}
    </Box>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Blog() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />

      <Box sx={{ paddingBlock: "60px" }}>
        <Container sx={{ maxWidth: "1250px !important", position: "relative" }}>
          <Box className="bloghero">
            <Box className="leftbox">
              <img
                src="https://cdn.prod.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654af9491a971_pexels-moose-photos-1036641%201-min.jpg"
                loading="lazy"
                alt=""
                sizes="(max-width: 479px) 90vw, (max-width: 991px) 85vw, (max-width: 1279px) 59vw, 700px"
                srcSet="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654af9491a971_pexels-moose-photos-1036641%25201-min-p-500.jpeg 500w, https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654af9491a971_pexels-moose-photos-1036641%25201-min-p-1080.jpeg 1080w, https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654af9491a971_pexels-moose-photos-1036641%201-min.jpg 1400w"
                className="blog-hero-image"
              />
            </Box>
            <Box className="rightbox">
              <Box className="text-container">
                <Link
                  href="/post/a-short-history-of-romance-writers-of-america"
                  className="blog-hero-content-wrapper w-inline-block"
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box className="blog-small-text">Kevin Smith</Box>
                    <Box className="blog-small-text">March 4, 2021</Box>
                  </Box>
                  <h1 className="blog-hero-heading">
                    A Short History of Romance Writers of America{" "}
                  </h1>
                  <p className="blog-hero-subtext">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin fringilla erat id lectus sollicitudin, eget fringilla
                    massa viverra. Ut vitae ornare dui.
                  </p>
                  <Box
                    data-w-id="135fe4a8-1238-9173-f3b0-2a6a142a37b3"
                    className="read-more-link"
                  >
                    <Box
                      className="green-text-16px red-color"
                      sx={{ paddingBlock: "20px" }}
                    >
                      <span>Read More </span>
                      <img
                        src="https://cdn.prod.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654c68d91a973_Vector.svg"
                        loading="lazy"
                        alt=""
                        className="arrow-hovers"
                      />
                    </Box>
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ position: "relative" }}>
        <Container sx={{}}>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className="tabContainer"
              TabIndicatorProps={{ display: "none" }}
            >
              <Tab label="Romance" {...a11yProps(0)} />
              <Tab label="Thriller" {...a11yProps(1)} />
              <Tab label="Horror" {...a11yProps(2)} />
              <Tab label="Biography" {...a11yProps(3)} />
              <Tab label="Literary Fiction" {...a11yProps(4)} />
              <Tab label="Adventure" {...a11yProps(5)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Grid2
              container
              spacing={5}
              sx={{
                padding: "0px",
                justifyContent: { xs: "center", sm: "inherit" },
              }}
            >
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
            </Grid2>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            <Grid2
              container
              spacing={5}
              sx={{
                padding: "0px",
                justifyContent: { xs: "center", sm: "inherit" },
              }}
            >
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
            </Grid2>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={2}>
            <Grid2
              container
              spacing={5}
              sx={{
                padding: "0px",
                justifyContent: { xs: "center", sm: "inherit" },
              }}
            >
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
            </Grid2>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={3}>
            <Grid2
              container
              spacing={5}
              sx={{
                padding: "0px",
                justifyContent: { xs: "center", sm: "inherit" },
              }}
            >
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
            </Grid2>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={4}>
            <Grid2
              container
              spacing={5}
              sx={{
                padding: "0px",
                justifyContent: { xs: "center", sm: "inherit" },
              }}
            >
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
            </Grid2>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={5}>
            <Grid2
              container
              spacing={5}
              sx={{
                padding: "0px",
                justifyContent: { xs: "center", sm: "inherit" },
              }}
            >
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 11, sm: 6, md: 4 }} className="blog-card">
                <Box className="imagebox">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 40vw, (max-width: 1439px) 26vw, 373.328125px"
                    srcSet="https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%252013-min-p-500.jpeg 500w, https://cdn.prod.website-files.com/61b8e11ef05654873091a926/61b8e11ef056547bb491a943_pexels-oladimeji-ajegbile-2379886%2013-min.jpg 746w"
                    className="blog-card-image"
                  />
                </Box>
                <Box className="textbox">
                  <Box className="blog-card-subcontainer">
                    <Box className="backcardbg"></Box>
                    <Box sx={{ position: "relative", zIndex: "5" }}>
                      <Box className="author-wrapper">
                        <ul>
                          <li className="blog-small-text">
                            <span>Abby Rose</span>
                          </li>
                          <li className="blog-small-text">April 23, 2021</li>
                        </ul>
                      </Box>
                      <h2 className="blog-heading">
                        Review : A Good Book for You by Judy Par
                      </h2>
                      <Link className="blogcard-link red-color">Read More</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
            </Grid2>
          </CustomTabPanel>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

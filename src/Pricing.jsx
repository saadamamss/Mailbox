import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid2,
  Link,
  Typography,
} from "@mui/material";
import Footer from "./component/Footer";
import Header from "./component/Header";
import styles from "./assets/pricingstyles";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

export default function Pricing() {
  return (
    <>
      <Header />
      <Box>
        <Container sx={{ maxWidth: "1250px !important" }}>
          <Box sx={styles.pricingHeadBox}>
            <Typography
              variant="h1"
              component="h2"
              align="center"
              sx={styles.pricingHead}
            >
              How <span style={styles.greencolor}> involved </span>
              <br /> do you want to be?
            </Typography>
          </Box>
          <Box sx={{ bgcolor: "#f6f4f2", marginTop: "100px" }}>
            <Grid2 container spacing={0} sx={{ justifyContent: "center" }}>
              <Grid2 size={{ xs: 12, md: 4 }} sx={styles.pricingContainer}>
                <Box sx={styles.planBox} className="planBox">
                  <Box sx={styles.pricingTableText}>
                    <Box sx={styles.pricingCategory}>The Snippet</Box>
                    <Box>
                      <Typography variant="h3" component="h3" sx={styles.price}>
                        $0
                      </Typography>
                      <Box sx={styles.priceTime}>/monthly</Box>
                    </Box>
                    <Box sx={styles.priceSubtext}>
                      Just the basics to help you stay in the loop.
                    </Box>
                    <Link to="/" sx={styles.pricingButton}>
                      Get Started
                    </Link>
                  </Box>

                  <Box sx={styles.pricingTableContainer}>
                    <Box sx={styles.pointersTextWrapper}>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        style={styles.pointersTextIcon}
                      />
                      <Box sx={styles.pointersText}>
                        No credit card required
                      </Box>
                    </Box>
                    <Box sx={styles.pointersTextWrapper}>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        style={styles.pointersTextIcon}
                      />
                      <Box sx={styles.pointersText}>
                        No credit card required
                      </Box>
                    </Box>
                    <Box sx={styles.pointersTextWrapper}>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        style={styles.pointersTextIcon}
                      />
                      <Box sx={styles.pointersText}>
                        No credit card required
                      </Box>
                    </Box>
                    <Box sx={styles.pointersTextWrapper}>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        style={styles.pointersTextIcon}
                      />
                      <Box sx={styles.pointersText}>
                        No credit card required
                      </Box>
                    </Box>
                    <Box sx={styles.pointersTextWrapper}>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        style={styles.pointersTextIcon}
                      />
                      <Box sx={styles.pointersText}>
                        No credit card required
                      </Box>
                    </Box>
                    <Box sx={styles.pointersTextWrapper}>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        style={styles.pointersTextIcon}
                      />
                      <Box sx={styles.pointersText}>
                        No credit card required
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }} sx={styles.pricingContainer}>
                <Box sx={[styles.planBox, styles.blackBg, styles.greenshadow]}>
                  <Box sx={[styles.pricingTableText, styles.blackBg]}>
                    <Box sx={[styles.pricingCategory, styles.whiteColor]}>
                      The Snippet
                    </Box>
                    <Box>
                      <Typography
                        variant="h3"
                        component="h3"
                        sx={[styles.price, styles.whiteColor]}
                      >
                        $0
                      </Typography>
                      <Box sx={[styles.priceTime, styles.whiteColor]}>
                        /monthly
                      </Box>
                    </Box>
                    <Box sx={[styles.priceSubtext, styles.whiteColor]}>
                      Just the basics to help you stay in the loop.
                    </Box>
                    <Link
                      to="https://www.webflow.com/"
                      target="_blank"
                      sx={styles.diffpricingButton}
                    >
                      Get Started
                    </Link>
                  </Box>

                  <Box sx={styles.pricingTableContainer}>
                    <Box sx={styles.pointersTextWrapper}>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        style={styles.pointersTextIcon}
                      />
                      <Box sx={[styles.pointersText, styles.whiteColor]}>
                        No credit card required
                      </Box>
                    </Box>
                    <Box sx={styles.pointersTextWrapper}>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        style={styles.pointersTextIcon}
                      />
                      <Box sx={styles.pointersText}>
                        No credit card required
                      </Box>
                    </Box>
                    <Box sx={styles.pointersTextWrapper}>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        style={styles.pointersTextIcon}
                      />
                      <Box sx={styles.pointersText}>
                        No credit card required
                      </Box>
                    </Box>
                    <Box sx={styles.pointersTextWrapper}>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        style={styles.pointersTextIcon}
                      />
                      <Box sx={styles.pointersText}>
                        No credit card required
                      </Box>
                    </Box>
                    <Box sx={styles.pointersTextWrapper}>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        style={styles.pointersTextIcon}
                      />
                      <Box sx={styles.pointersText}>
                        No credit card required
                      </Box>
                    </Box>
                    <Box sx={styles.pointersTextWrapper}>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        style={styles.pointersTextIcon}
                      />
                      <Box sx={styles.pointersText}>
                        No credit card required
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }} sx={styles.pricingContainer}>
                <Box sx={styles.planBox}>
                  <Box sx={styles.pricingTableText}>
                    <Box sx={styles.pricingCategory}>The Snippet</Box>
                    <Box>
                      <Typography variant="h3" component="h3" sx={styles.price}>
                        $0
                      </Typography>
                      <Box sx={styles.priceTime}>/monthly</Box>
                    </Box>
                    <Box sx={styles.priceSubtext}>
                      Just the basics to help you stay in the loop.
                    </Box>
                    <Link
                      to="https://www.webflow.com/"
                      target="_blank"
                      sx={styles.pricingButton}
                    >
                      Get Started
                    </Link>
                  </Box>

                  <Box sx={styles.pricingTableContainer}>
                    <Box sx={styles.pointersTextWrapper}>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        style={styles.pointersTextIcon}
                      />
                      <Box sx={styles.pointersText}>
                        No credit card required
                      </Box>
                    </Box>
                    <Box sx={styles.pointersTextWrapper}>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        style={styles.pointersTextIcon}
                      />
                      <Box sx={styles.pointersText}>
                        No credit card required
                      </Box>
                    </Box>
                    <Box sx={styles.pointersTextWrapper}>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        style={styles.pointersTextIcon}
                      />
                      <Box sx={styles.pointersText}>
                        No credit card required
                      </Box>
                    </Box>
                    <Box sx={styles.pointersTextWrapper}>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        style={styles.pointersTextIcon}
                      />
                      <Box sx={styles.pointersText}>
                        No credit card required
                      </Box>
                    </Box>
                    <Box sx={styles.pointersTextWrapper}>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        style={styles.pointersTextIcon}
                      />
                      <Box sx={styles.pointersText}>
                        No credit card required
                      </Box>
                    </Box>
                    <Box sx={styles.pointersTextWrapper}>
                      <img
                        src="https://assets.website-files.com/61b8e11ef05654a43b91a915/61b8e11ef05654417d91a963_Group%20605.svg"
                        loading="lazy"
                        alt="Green Check Mark"
                        style={styles.pointersTextIcon}
                      />
                      <Box sx={styles.pointersText}>
                        No credit card required
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
            </Grid2>
          </Box>
        </Container>
        <hr />
        <Container
          sx={{ maxWidth: "1250px !important", paddingBlock: "100px" }}
        >
          <Grid2 container spacing={10}>
            <Grid2 size={{ md: 6 }}>
              <Typography variant="h2" component="h2" sx={styles.pricingHead}>
                Frequently asked questions.
              </Typography>
              <p style={styles.priceSubtext}>
                Yeah, we get these a lot, so, we figured we'd save you some
                time.
              </p>
            </Grid2>

            <Grid2 size={{ md: 6 }}>
              <Accordion sx={styles.accordion}>
                <AccordionSummary
                  expandIcon={<AddIcon className="expandIcon" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    lineHeight: "25px",
                  }}
                >
                  Can I cancel my subscripion ?
                </AccordionSummary>
                <AccordionDetails sx={{ fontSize: "18px", lineHeight: "30px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion sx={styles.accordion}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    lineHeight: "25px",
                  }}
                >
                  What if I want to upgrade?
                </AccordionSummary>
                <AccordionDetails sx={{ fontSize: "18px", lineHeight: "30px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>

              <Accordion sx={styles.accordion}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    lineHeight: "25px",
                  }}
                >
                  Why didn't I get a swag bag after 6 months?
                </AccordionSummary>
                <AccordionDetails sx={{ fontSize: "18px", lineHeight: "30px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion sx={styles.accordion}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    lineHeight: "25px",
                  }}
                >
                  Do you offer annual plans?
                </AccordionSummary>
                <AccordionDetails sx={{ fontSize: "18px", lineHeight: "30px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

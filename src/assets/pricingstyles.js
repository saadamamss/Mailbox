import { colors } from "@mui/material";

const styles = {
  pricingHeadBox: {
    maxWidth: "600px",
    justifySelf: "center",
    padding: "50px 0px",
  },
  pricingHead: {
    fontSize: "64px",
    fontWeight: "700",
    color: "#111",
  },
  greencolor: {
    color: "#71a78d",
  },
  pricingContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "50px",
  },

  planBox: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f8f1eb",
    maxWidth: { xs: "380px", md: "100%" },
  },
  blackBg: {
    backgroundColor: "#111",
  },
  whiteColor: {
    color: "#fff !important",
  },
  greenshadow: {
    boxShadow: "-8px -8px 0px 0px #ecb22e",
    marginTop: { md: "-60px" },
    paddingTop: { md: "60px" },
  },
  pricingTableText: {
    backgroundColor: "#fff",
    padding: { md: "35px", xs: "40px" },
  },
  pricingCategory: {
    fontSize: "26px",
    fontWeight: "550",
    display: "block",
  },
  price: {
    fontSize: { md: "64px", sm: "54px", xs: "45px" },
    display: "inline-block",
    margin: "15px 0px",
    fontWeight: "500",
  },
  priceTime: {
    display: "inline-block",
    fontSize: "16px",
    padding: "5px",
  },
  priceSubtext: {
    fontSize: "18px",
    lineHeight: "25px",
    color: "#666",
  },
  pricingButton: {
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#f95252",
    padding: "18px 25px",
    fontSize: "18px",
    display: "inline-block",
    marginTop: "30px",
    boxShadow: "0px 0px 20px 1px rgba(249, 82, 82, 0.5)",
    transition: "background-color 0.4s ease",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#71a78d",
    },
  },
  diffpricingButton: {
    textDecoration: "none",
    color: "#f95252",
    backgroundColor: "#fff",
    padding: "18px 25px",
    fontSize: "18px",
    display: "inline-block",
    marginTop: "30px",
    boxShadow: "0px 0px 20px 1px rgba(249, 82, 82, 0.5)",
    transition: "all 0.4s ease",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#f95252",
      color: "#ffff",
    },
  },
  pricingTableContainer: {
    padding: { md: "35px", xs: "40px" },
  },
  pointersTextWrapper: {
    display: "flex",
    columnGap: "12px",
    padding: "10px 0px",
    alignItems: "center",
  },
  pointersTextIcon: {
    width: "24px",
  },
  pointersText: {
    fontSize: "18px",
    color: "#555",
  },
  accordion: {
    margin: "0px !important",
    backgroundColor: "transparent !important",
    boxShadow: "none !important",
    padding: "15px 0px",
  },
};

export default styles;

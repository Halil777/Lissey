import { Container, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
import img3 from "../../img/img3.jpg";
import img4 from "../../img/img4.jpg";
import img7 from "../../img/img7.jpg";
// import img8 from "../../img/img8.jpg";
import img10 from "../../img/img10.jpg";
import img11 from "../../img/img11.jpg";
import img12 from "../../img/img12.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { i18n } from "../../Language/LangConfig";
import { TabPanel } from "@mui/lab";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
import "./professia.css";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  borderTopLeftRadius: "12px",
  borderBottom: "0px none transparent",
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#007632",
    height: "48px",
    borderRadius: "12px",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    color: "#FFFFFF",
    borderRadius: "12px",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    borderRadius: "12px",
    borderColor: "#658AAC",
    borderStyle: "solid",
    borderWidth: "1px",
    color: "#000000",
    textDecoration: "underline",
    textDecorationColor: "#000000",
    textUnderlineOffset: "6px",
    "&.Mui-selected": {
      color: "#fff",
      zIndex: "1",
      textDecoration: "underline",
      textDecorationColor: "#FFFFFF",
      borderRadius: "12px",
      textUnderlineOffset: "6px",
      borderWidth: "0px",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#FFFFFF",
      borderRadius: "12px",
    },
  })
);

const Professia = () => {
  const { t } = useTranslation();
  useEffect(() => {
    let l = localStorage.getItem("lang");
    // nodeRef = {nodeRef}
    if (l != null && typeof l !== "undefined") {
      i18n.changeLanguage(l);
    } else {
      i18n.changeLanguage("ru");
    }
  }, []);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tab1 = t("timee");

  const tab2 = t("time");
  return (
    <div id="professia" className="professiaContainer">
      <Container maxWidth="lg">
        <div className="profTitleMedia">
          <Stack direction="column">
            <span>{t("okuw")} :</span>
            <div className="lineContainer">
              <img src="./image/Line.svg" alt="#" style={{ width: "70px" }} />
            </div>
          </Stack>
        </div>
        <Grid container>
          <Grid item lg={12} md={12} xs={2.5} sm={2.5}></Grid>
          <Grid
            item
            lg={12}
            md={12}
            xs={7.5}
            sm={7.5}
            mb={4}
            className="proTitleMedia"
          >
            <Stack spacing={0.5}>
              <span className="spanMediaa">{t("okuw")} :</span>
              <img src="./image/Line.svg" alt="#" style={{ width: "110px" }} />
            </Stack>
          </Grid>
        </Grid>
        <Grid container className="professia" mt={-2}>
          <Grid item lg={12} md={12} xs={12} sm={12} mt={-2}>
            <Box
              sx={{
                // borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <StyledTabs
                className="styleTabss"
                value={value}
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <StyledTab
                  style={{ marginLeft: "15px" }}
                  label={tab1.replace(/ /g, "\u00a0")}
                  value="1"
                />
                <StyledTab
                  style={{ marginLeft: "10px" }}
                  label={tab2.replace(/ /g, "\u00a0")}
                  value="2"
                />
              </StyledTabs>
            </Box>
            <hr
              style={{
                marginTop: "20px",
                padding: "0.5px",
                background: "#000",
              }}
            />
          </Grid>
          <Grid item lg={6} md={6} xs={12} sm={12} mt={-3}>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <TabPanel value="1">
                    <Grid item lg={12} md={12} xs={12} sm={12}>
                      <Stack
                        className="professiaName"
                        direction="column"
                        spacing={1.5}
                        mt={3}
                      >
                        <p>
                          <b>{t("professia2")}</b>
                        </p>
                        <hr />

                        <p>
                          <b>{t("professia6")}</b>
                        </p>
                        <hr />

                        <p>
                          <b>{t("professia7")}</b>
                        </p>
                        <hr />

                        <p>
                          <b>{t("professia9")}</b>
                        </p>
                        <hr />
                        <p>
                          <b>
                            {t("professia11")}
                            {t("professia12")}
                          </b>
                        </p>
                        <hr />
                        <p>
                          <b>{t("professia15")}</b>
                        </p>
                        <hr />
                        <p>
                          <b>{t("professia13")}</b>
                        </p>
                        <hr />
                      </Stack>
                    </Grid>
                  </TabPanel>
                  <TabPanel value="2">
                    <Grid item lg={12} md={12} xs={12} sm={12} mt={2}>
                      <Stack
                        className="professiaName"
                        direction="column"
                        spacing={1.5}
                        mt={3}
                      >
                        <p>
                          <b>{t("professia1")}</b>
                        </p>
                        <hr />{" "}
                        <p>
                          <b>{t("professia3")}</b>
                        </p>
                        <hr />{" "}
                        <p>
                          <b>{t("professia4")}</b>
                        </p>
                        <hr />{" "}
                        <p>
                          <b>{t("professia5")}</b>
                        </p>
                        <hr />
                        <p>
                          <b>{t("professia8")}</b>
                        </p>
                        <hr />
                        <p>
                          <b>{t("professia10")}</b>
                        </p>
                        <hr />
                        <p>
                          <b>{t("professia14")}</b>
                        </p>
                        <hr />
                      </Stack>
                    </Grid>
                  </TabPanel>
                </TabContext>
              </Box>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} xs={12} sm={12} pt={4} pl={5}>
            <div className="responsive">
              <Carousel
                className="main-slide profffmed"
                showThumbs={false}
                autoPlay={true}
                showArrows={false}
                emulateTouch={true}
                interval={7000}
                transitionTime={3000}
                showStatus={false}
                infiniteLoop={true}
              >
                <div className="proffImg">
                  <img src={img3} alt="#" />
                </div>
                {/* <div className="proffImg">
                  <img src={img4} alt="#" />
                </div> */}
                {/* <div className="proffImg">
                  <img src={img7} alt="#" />
                </div> */}

                <div className="proffImg">
                  <img src={img12} alt="#" />
                </div>
              </Carousel>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Professia;

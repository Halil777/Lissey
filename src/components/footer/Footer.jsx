import { Container, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { i18n } from "../../Language/LangConfig";
import "./footer.css";

const Footer = () => {
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
  return (
    <div className="footer" id="footer">
      <Container maxWidth="lg">
        <Grid container mt={5}>
          {/* First column start here */}

          <Grid item lg={4} md={4} sm={12} xs={12} textAlign="center">
            <Stack direction="column" alignItems={"center"} spacing={3}>
              <img src="./image/Gerb.svg" width="130px" alt="#" />
              <span className="footerText">{t("title")}</span>
            </Stack>
          </Grid>

          {/* First column ends here */}
          <Grid item lg={1} md={1}></Grid>
          {/* Second column start here */}

          <Grid item lg={2} md={2} sm={6} xs={12}>
            <Stack direction="column" className="footerDeartment" spacing={2}>
              <Link
                spy={true}
                smooth={true}
                to="header"
                className="bottomNavbar"
                activeClass="activeClass"
              >
                <li style={{ marginTop: "-10px" }}>{t("homePage")}</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                className="bottomNavbar"
                to="comeToLearn"
              >
                <li>{t("aboutUs")}</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                className="bottomNavbar"
                to="professia"
              >
                <li>{t("raspisaniya")}</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                className="bottomNavbar"
                to="contact"
              >
                <li>{t("contactUs")}</li>
              </Link>
            </Stack>
          </Grid>

          {/* Second column ends here */}
          <Grid item lg={1} md={1}></Grid>

          {/* Third column start here */}
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Stack direction={"row"} spacing={2}>
                <span className="infoSpan">{t("adress")}</span>
                <p style={{ fontFamily: "fontRegular", fontSize: "16px" }}>
                  {t("addres")}
                </p>
              </Stack>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12} mt={3}>
              <Stack direction="row" spacing={3}>
                <span className="infoSpan">{t("mail")}</span>
                <a
                  className="phoneNumbersFooter"
                  style={{ fontFamily: "fontRegular", fontSize: "16px" }}
                  href="bhom8@mail.ru"
                >
                  bhom8@mail.ru
                </a>
              </Stack>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12} mt={3}>
              <Stack direction="row" spacing={2.5}>
                <span className="infoSpan">{t("phone")}</span>
              </Stack>
            </Grid>
            <Grid container>
              <Grid item lg={5} md={5} xs={12} sm={12}></Grid>
              <Grid item lg={7} md={7} xs={7} sm={7} mt={-2.5}>
                <Stack spacing={2} className="pnFooter">
                  <a className="phoneNumbersFooter" href="tel:+99312 92 73 08">
                    +(993) 12 92 73 08
                  </a>
                  <a className="phoneNumbersFooter" href="tel:+99312 92 47 83">
                    +(993) 12 92 47 83
                  </a>
                  <a className="phoneNumbersFooter" href="tel:+99312 92 47 89">
                    +(993) 12 92 47 89
                  </a>
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          {/* Third column ends here */}
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} pt={7} textAlign="center">
          <p
            style={{
              fontFamily: "fontRegular",
              wordSpacing: "3px",
              fontSize: "17px",
            }}
          >
            {t("titlee")}
          </p>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;

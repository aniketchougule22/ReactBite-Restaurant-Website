import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
            color: "goldenrod",
            textShadow: "1px 1px black"
          },
          "& p": {
            textAlign: "justify",
            mx: 10,
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to ReactBite Restaurant</Typography>
        <p>
          Renowned for creating “Yours Truly” service, Sayaji Group of Hotels is
          a sophisticated collection of individually designed hotels catering to
          both leisure and business travellers with stylish guest rooms and
          versatile meeting facilities. Besides earning recognition for our
          world-class amenities and services in the hospitality sector, Sayaji
          has spread its wings with its Pan-India presence.
        </p>
        <br />
        <hr />
        <Typography variant="h4">Who We Are</Typography>
        <p>
          Sayaji Group of Hotels is known for its bespoke experiences and
          signature hospitality. We are a home-grown Indian brand competing with
          the biggest hotel entities from across the globe. The management
          solely believes in providing exemplary luxury, quality, and service.
          The brand works on combining diversity with culture and inheriting the
          core values, especially including taking utmost care of people and
          their well-being. Our services and amenities are 360° in the truest
          sense.
        </p>
        <br />
        <hr />
        <Typography variant="h4">Our Brands</Typography>
        <p>
          Today, Sayaji Hotels is around 3 decades old and now it has 3 hotel
          brands – Sayaji, Effotel by Sayaji and Enrise by Sayaji under the
          umbrella of Sayaji. Our properties across India in all the major
          cities offer exemplary service and great hospitality. With our
          foundation built on trust, we work to satisfy our guests with
          everything we can offer.
        </p>
      </Box>
    </Layout>
  );
};

export default About;

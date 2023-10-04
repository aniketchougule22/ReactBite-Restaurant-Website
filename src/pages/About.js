import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          // my: 15,
          mb: 4,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
            color: "goldenrod",
            textShadow: "1px 1px black",
          },
          "& p": {
            textAlign: "justify",
            mx: 10,
          },
          "& span": {
            fontWeight: "bold",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">About Us</Typography>
        <p>
          Welcome to ReactBite Restaurant, where every meal is a celebration of
          flavor, tradition, and the joy of dining. Our story began [Year of
          Establishment] when a group of passionate food enthusiasts came
          together with a shared vision: to create a culinary haven that offers
          extraordinary experiences to every guest who walks through our doors.
        </p>
        <br />
        <hr />
        <Typography variant="h4">Our Philosophy:</Typography>
        <p>
          At ReactBite Restaurant, we believe that great food is more than just
          a meal; it's a journey. Our talented chefs meticulously craft each
          dish, sourcing the finest ingredients to ensure that every bite is a
          delightful symphony of flavors. We take pride in offering a diverse
          menu that caters to various tastes and dietary preferences, all while
          preserving the essence of traditional recipes passed down through
          generations.
        </p>
        <br />
        <hr />
        <Typography variant="h4">Our Commitment:</Typography>
        <p>
          <span>- Quality: </span> We are committed to using the freshest and
          highest-quality ingredients in every dish we serve.
          <br />
          <br />
          <span>- Hospitality: </span> Our warm and welcoming staff is dedicated
          to providing impeccable service, ensuring that your dining experience
          is nothing short of exceptional.
          <br />
          <br />
          <span>- Community: </span> We are proud to be a part of this vibrant
          community and are actively involved in supporting local causes and
          initiatives.
        </p>
        <br />
        <hr />
        <Typography variant="h4">Join Us:</Typography>
        <p>
          We invite you to be a part of our culinary journey. Whether you're a
          regular patron or visiting us for the first time, we look forward to
          serving you and sharing our love for food and hospitality.
          <br />
          <br />
          <br />
          Thank you for choosing ReactBite Restaurant. We're excited to have you here, and we
          can't wait to share our passion for food with you.
        </p>
      </Box>
    </Layout>
  );
};

export default About;

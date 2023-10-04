import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Layout from "../components/Layout/Layout";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
            color: "goldenrod",
            textShadow: "1px 1px black",
          },
          "& p": {
            textAlign: "justify",
            // mx: 10,
            mr: 8,
          },
        }}
      >
        <Typography variant="h4">Contact Our Restaurant</Typography>
        <p>
          Welcome to ReactBite's "Contact Us" page! We value your feedback,
          inquiries, and suggestions, and we're here to make it easy for you to
          get in touch with us. Whether you want to reserve a table for a
          special occasion, have questions about our menu, or simply want to
          share your thoughts, we're just a message away.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max=-width: 600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    backgroundColor: "black",
                    color: "goldenrod",
                    textShadow: "1px 1px black",
                  }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  chouguleaniket03@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <PhoneIcon sx={{ color: "red", pt: 1 }} /> +91 8698696612
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "green", pt: 1 }} />{" "}
                  1800-00-0000
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <LocationOnIcon sx={{ color: "orange", pt: 1 }} /> Janta
                  Bazaar Chowk, Rajarampuri 1st lane, Kolhapur, Maharashtra
                  416001
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        sx={{
          my: 5,
          ml: 10,
          "& h5": {
            fontWeight: "bold",
            mb: 2,
            color: "goldenrod",
            textShadow: "1px 1px black",
          },
          "& p": {
            textAlign: "justify",
            // mx: 10,
            mr: 8,
          },
        }}
      >
        <Typography variant="h5">We Want to Hear from You:</Typography>
        <p>
          Your feedback is invaluable to us, and it helps us continually improve
          our services. Whether you have a comment, suggestion, or praise for
          our team, please don't hesitate to reach out. We look forward to
          serving you and ensuring your dining experience at ReactBite Restaurant
          is exceptional. Thank you for choosing ReactBite Restaurant, where
          culinary excellence meets warm hospitality. We can't wait to assist
          you and welcome you to our restaurant soon!
        </p>
      </Box>
    </Layout>
  );
};

export default Contact;

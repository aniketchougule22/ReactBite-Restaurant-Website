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
            textShadow: "1px 1px black"
          },
        }}
      >
        <Typography variant="h4">Contact My Restaurant</Typography>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolor
          similique nihil dolores! Quam nesciunt sit explicabo a culpa quidem,
          minus laborum similique facilis ducimus doloremque iure, accusamus
          aliquam totam.
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
    </Layout>
  );
};

export default Contact;

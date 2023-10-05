import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
                color: 'goldenrod',
                transform: 'translateX(5px)',
                transition: "all 400ms"
            }
          }}
        >
          {/* icons */}
          <Link href="https://www.instagram.com/aniket__c/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
          </Link>

          <Link href="https://www.linkedin.com/in/aniket-chougule-637a68221" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
          </Link>

          <Link href="https://github.com/aniketchougule22" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
          </Link>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width: 600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Right Reserved &copy; - Aniket Chougule
        </Typography>
      </Box>
    </>
  );
};

export default Footer;

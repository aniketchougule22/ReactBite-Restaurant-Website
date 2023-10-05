import React from 'react'
import Layout from '../components/Layout/Layout'
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Pagenotfound = () => {
  return (
    <Layout>
 
    <Box sx={{
          my: 10,
          mb: 24,
          ml: 15,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
            color: "goldenrod",
            textShadow: "1px 1px black",
          },
          "& p": {
            textAlign: "justify",
            mr: 8,
          },
        }}
    >
      <Typography variant="h4" gutterBottom>
        404, Page Not Found !
      </Typography>
      <Typography variant="body1" paragraph>
        The page you are looking for might have been removed had its name changed <br /> or is temporarily unavailbale.
      </Typography>
      <Button
      sx={{ color: 'white', backgroundColor: '#1A1A19' }}
        component={Link}
        to="/"
        variant="contained"
      >
        Go to Home
      </Button>
    </Box>

    </Layout>
  )
}

export default Pagenotfound

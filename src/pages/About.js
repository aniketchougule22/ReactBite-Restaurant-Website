import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 15,
        textAlign: 'center',
        p: 2,
        "& h4": {
          fontWeight: 'bold',
          my: 2,
          fontSize: '2rem'
        },
        "& p": {
          textAlign: 'justify'
        },
        "@media (max-width:600px)": {
          mt: 0,
          fontSize: '1.5rem'
        }
      }}>
        <Typography variant="h4">Welcome to ReactBite Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
          accusantium esse et soluta cupiditate asperiores placeat, doloremque
          veritatis fugit architecto sapiente neque quae necessitatibus
          temporibus quibusdam recusandae nam sed perspiciatis rem, tempora
          ratione ipsam voluptatem fuga! Alias sunt soluta tenetur dolore eaque
          repudiandae, molestias expedita labore corrupti, voluptate
          exercitationem tempora iusto nobis perspiciatis earum consectetur
          unde? Aperiam, et libero. Earum et expedita eligendi sunt reiciendis
          odio! Iusto saepe ex porro ipsam sint recusandae possimus,
          exercitationem maxime. Exercitationem praesentium culpa a iste nam?
          Repellendus quasi accusantium incidunt ea officiis similique?
          Voluptatem quo sint, qui repellat ipsa modi fuga adipisci architecto
          veritatis?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe porro
          mollitia eum, modi rerum quo? Aut exercitationem fugiat aperiam omnis
          delectus quas officiis magni. Eum harum ea accusamus ducimus, ut, qui
          consequuntur quis aliquam voluptate numquam obcaecati distinctio,
          adipisci temporibus earum animi! Ipsa quia deserunt cumque, explicabo,
          necessitatibus harum in incidunt eos commodi soluta quibusdam animi
          voluptatem modi ipsum quis asperiores aut maxime! Omnis nihil, illo
          dolorum dolorem suscipit sunt non blanditiis dignissimos quos natus
          doloremque aut perferendis iure recusandae, voluptas neque error esse
          repudiandae eius praesentium excepturi? Excepturi rerum magnam
          inventore natus iure quae doloremque iusto nemo! Perspiciatis, cum?
        </p>
      </Box>
    </Layout>
  );
};

export default About;

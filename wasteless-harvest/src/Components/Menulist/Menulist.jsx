import React from "react";
import { Menu} from "./data";
import Layout from "./components/Layout/layout";
import './Menulist.css';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menulist = () => {
  return (
    <Layout className='layout'>
      <Box >
        {Menu.map((menulist) => (
          <Card >
            <CardActionArea>
              <CardMedia
               className='cardmedia'
                component={"img"}
                src={menulist.image}
                alt={menulist.name}
              />
              <CardContent>
                <Typography >
                  {menulist.name}
                </Typography>
                <Typography >{menulist.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};


export default Menulist;

import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import Star from "../../assets/star.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      direction="column"
      // alignItems="center"
      justifyContent="center"
      bgcolor="black"
      px={6}
    >
      <Grid item display="flex" xs={3}  justifyContent="space-between">
        <Box>
          <Link to="/dashboard"><img src={Star} width="80" height="50" alt="star"></img> </Link>
          
        </Box>
        <Box>
          <Button
            onClick={() => {
              navigate("/people");
            }}
          >
            People
          </Button>
          <Button
            onClick={() => {
              navigate("/planet");
            }}
          >
            Planet
          </Button>
          <Button
            onClick={() => {
              navigate("/starship");
            }}
          >
            starships
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Navbar;

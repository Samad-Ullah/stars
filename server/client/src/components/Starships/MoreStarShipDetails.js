//React Imports
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Axios from "axios";

//Styles Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

//Component and Function imports
import { isAuthenticated } from "../../api";
import Navbar from "../Navbar/Navbar";

//styles
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });

const MoreStarShipDetails = () => {
  
  const token = isAuthenticated().token;
  const { name } = useParams();
  const [planet, setStarships] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const getPlanets = async () => {
      const data = await Axios.get(`https://swapi.dev/api/starships/${name}`);
      setStarships(data.data);
      setloading(false);
    };
    getPlanets();
  }, []);
  return (
    <>
      {token ? (
        <>
          <Navbar />
          <Grid container spacing={2}>
            {[darkTheme].map((theme, index) => (
              <Grid item xs={12} key={index}>
                <ThemeProvider theme={theme}>
                  <Box
                    sx={{
                      p: 8,
                      bgcolor: "background.default",
                      display: "grid",
                      gridTemplateColumns: { md: "1fr 1fr" },
                      gap: 2,
                    }}
                  >
                    {loading ? (
                      <Box sx={{ textAlign: "center" }}>
                        {" "}
                        <CircularProgress color="secondary" />
                      </Box>
                    ) : (
                      <>
                        <Item>Name:&nbsp;&nbsp;&nbsp;&nbsp;{planet.name}</Item>
                        <Item>
                          Cargo Capacity:&nbsp;&nbsp;&nbsp;&nbsp;
                          {planet.cargo_capacity}
                        </Item>
                        <Item>
                          Manufacturer:&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                          {planet.manufacturer}
                        </Item>
                        <Item>
                          Passengers :&nbsp;&nbsp;&nbsp;&nbsp;
                          {planet.passengers}
                        </Item>
                        <Item>
                          StarShip Class :&nbsp;&nbsp;&nbsp;&nbsp;
                          {planet.starship_class}
                        </Item>
                      </>
                    )}
                  </Box>
                </ThemeProvider>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Typography variant="h3">No Authorized</Typography>
      )}
    </>
  );
};

export default MoreStarShipDetails;

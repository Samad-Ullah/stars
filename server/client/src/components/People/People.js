import Navbar from "../Navbar/Navbar";

import { Box, Grid, Paper, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { useGetPeopleQuery } from "../../redux/services/myservice";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../api";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const People = () => {
  const token = isAuthenticated().token;

  const { data, error, isLoading, isError, isSuccess } = useGetPeopleQuery();

  return (
    <>
    {
      token?(<>
         <Navbar />
      <Grid container spacing={2}>
        {[darkTheme].map((theme, index) => (
          <Grid item xs={12} key={index}>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  p: 6,
                  bgcolor: "background.default",
                  display: "grid",
                  gridTemplateColumns: { md: "1fr 1fr  1fr " },
                  gap: 1,
                }}
              >
                <Box mt={1} ml={3}>
                  <Typography variant="h4" color="white">
                    People
                  </Typography>
                </Box>
                {isLoading ? (
                  <Box sx={{ textAlign: "center" }}>
                    {" "}
                    <CircularProgress color="secondary" />
                  </Box>
                ) : (
                  data.data.results.map((planet, i) => (
                    <Link to={`/peoples/${i + 1}`}>
                      <Item key={i}>{planet.name}</Item>
                    </Link>
                  ))
                )}
              </Box>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
      
      </>):(<Typography variant="h2"> No Authorized</Typography>)
    }
   
    </>
  );
};

export default People;

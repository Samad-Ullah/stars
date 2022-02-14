import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";

import { login , authenticate} from "../../api";

//styling

const useStyles = makeStyles({
  loginBox: {
    marginTop: "50%",
    
  },
});

const Login = () => {

  const [error, setError] = useState("");
  const [redirectTo, setRedirectTo] = useState(false);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => { 
      login(values).then((data) => {
        console.log(data);
        if (data.error) {
            setError("error" + data.error);
            setLoading(false);
        } else {
            authenticate(data, () => {
                setRedirectTo("/dashboard");
            });
        }
    });
    },
  });

  if (redirectTo) {
    return <Navigate to={redirectTo} />;
  }
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="right"
      height="100vh"
      bgcolor="#D3D3D3"    
    >
      <Grid item alignItem="right" xs={3}>
        <Box className={classes.loginBox}>
          <Typography variant="h5">Login To Your StarWars</Typography>
          <br/>
          <form onSubmit={formik.handleSubmit}>
          <Box>
          <label htmlFor="email">Email:</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <Box>{formik.errors.email}</Box>
            ) : null}
          </Box>
           
            <br />
            <Box>
            <label htmlFor="email">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            </Box>
         
            <br />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

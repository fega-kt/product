import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
// require('dotenv').config()
import { Helmet } from 'react-helmet';

function LoginPage() {
  console.log(`${process.env.REACT_APP_TITLE_NAME}`, "process")

  return <>
   <Helmet>
          <title>{ process.env.REACT_APP_TITLE_NAME }</title>
    </Helmet>

   <Grid item justifyItems="center" container>
   <Grid item justifyItems="center" md={6} xs={6} >
      { process.env.REACT_APP_PROJECT_NAME }
    </Grid>
   </Grid>
  </>
}

export default LoginPage;

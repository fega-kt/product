import { Button, Card, CardActions, CardContent, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Helmet } from 'react-helmet';
import './style.scss'
function LoginPage() {
  console.log(`${process.env.REACT_APP_TITLE_NAME}`, "process")

  return <>
   <Helmet>
          <title>{ process.env.REACT_APP_TITLE_NAME }</title>
    </Helmet>

   <Grid item id={"mainLoginPage"} container>
   <Grid item  md={6} xs={6} className="login">
      <Paper elevation={3}className="paper">
      { process.env.REACT_APP_PROJECT_NAME }

      </Paper>

    </Grid>
   </Grid>
  </>
}

export default LoginPage;

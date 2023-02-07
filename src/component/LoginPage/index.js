import { Button, Card, CardActions, CardContent, Grid, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import AccountCircle from '@mui/icons-material/AccountCircle';
// import { makeStyles } from '@mui/core/styles';

import { Helmet } from 'react-helmet';
import './style.scss'
// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));
function LoginPage() {
  console.log(`${process.env.REACT_APP_TITLE_NAME}`, "process")
  // const classes = useStyles();

  return <>
    <Helmet>
      <title>{process.env.REACT_APP_TITLE_NAME}</title>
    </Helmet>

    <Grid item id={"mainLoginPage"} container>
      <Grid item md={3} xs={3} sm={6} className="login" spacing={64}>
        <Paper elevation={3} className="paper">
          {process.env.REACT_APP_PROJECT_NAME}


          <Grid item md={8} xs={8} sm={6} className="contentPaper">
            <TextField
              id="input-with-icon-textfield"
              label="TextField"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Grid>
        </Paper>

      </Grid>
    </Grid>
  </>
}

export default LoginPage;

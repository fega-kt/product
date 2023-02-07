import { Button, Card, CardActions, CardContent, Grid, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';

import { Helmet } from 'react-helmet';
import './style.scss'
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
function LoginPage() {
  console.log(`${process.env.REACT_APP_TITLE_NAME}`, "process")
  const classes = useStyles();

  return <>
   <Helmet>
          <title>{ process.env.REACT_APP_TITLE_NAME }</title>
    </Helmet>

   <Grid item id={"mainLoginPage"} container>
   <Grid item  md={4} xs={4}  sm ={6} className="login">
      <Paper elevation={3}className="paper">
      { process.env.REACT_APP_PROJECT_NAME }
      <Grid>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      </Grid>
      </Paper>

    </Grid>
   </Grid>
  </>
}

export default LoginPage;

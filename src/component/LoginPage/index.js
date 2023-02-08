import { Button, Card, CardActions, CardContent, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { Helmet } from 'react-helmet';
import './style.scss'
// import { makeStyles } from ' @mui/styles';
import Cookies from 'js-cookie'

import { handleGetTitle } from '../../common'

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));
function LoginPage() {
  // const classes = useStyles();
  const [language, setLanguage] = useState("ENG")
  useEffect(() => {
    const lang = Cookies.get('language')
    if (lang) setLanguage(lang)
  }, [])
  return <>
    <Helmet>
      <title>{process.env.REACT_APP_TITLE_NAME}</title>
    </Helmet>

    <Grid item id={"mainLoginPage"} container>
      <Grid item md={4.5} xs={4.5} sm={3} className="login" >

      </Grid>
      <Grid item md={3} xs={3} sm={6} className="login" >
        <Paper elevation={3} className="paper">
          <Grid item className="contentLogin">
            {handleGetTitle("login", language, true)}
          </Grid>

          <Grid item md={8} xs={8} sm={6} className="contentPaper">
            <TextField
              id="input-with-icon-textfield"
              label={handleGetTitle("account", language, true)}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Grid>

          <Grid item md={8} xs={8} sm={6} className="contentPaper">
            <TextField
              id="input-with-icon-textfield"
              label={handleGetTitle("password", language, true)}
              fullWidth
              type={"password"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Grid>
        </Paper>

      </Grid>
      <Grid item md={4.5} xs={4.5} sm={3} className="loginLanguage" >
        <Grid item md={4.5} xs={4.5} sm={3}>
          <FormControl variant="outlined"
            fullWidth
          // className={classes.formControl}
          >
            <InputLabel id="demo-simple-select-outlined-label">{handleGetTitle("selectLanguage", language, true)}</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value)
                Cookies.set('language', e.target.value)

              }}
              fullWidth
              label={handleGetTitle("selectLanguage", language, true)}
            >

              <MenuItem value={"ENG"}>{handleGetTitle("language", "ENG", true)}</MenuItem>
              <MenuItem value={"VI"}>{handleGetTitle("language", "VI", true)}</MenuItem>
            </Select>
          </FormControl>
        </Grid>

      </Grid>

    </Grid>
  </>
}

export default LoginPage;

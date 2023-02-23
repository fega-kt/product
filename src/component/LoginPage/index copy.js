import { Button, Grid, InputAdornment, Paper, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { Helmet } from 'react-helmet';
import './style.scss'
// import { makeStyles } from ' @mui/styles';
import Cookies from 'js-cookie'
import Radio from '@mui/material/Radio';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { handleGetTitle } from '../../common'
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

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
  const [view, setView] = useState(false)

  useEffect(() => {
    const lang = Cookies.get('language')
    if (lang) setLanguage(lang)
  }, [])

  const controlProps = (item) => ({
    checked: language === item,
    onChange: (data) => {
      setLanguage(data.target.value)
      Cookies.set('language', data.target.value)
    },
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  return <>
    <Helmet>
      <title>{process.env.REACT_APP_TITLE_NAME}</title>

    </Helmet>

    <Grid item={true} id={"mainLoginPage"} container >
      <Grid item={true} md={3} xs={3} sm={1} className="leftSidebar" zeroMinWidth>

      </Grid>
      <Grid item={true} md={6} xs={6} sm={10} className="login" container >
        <Grid item={true} md={6} xs={6} sm={6} className="" >
          <h1 className="nameWeb">{handleGetTitle("nameWeb", language, true)}</h1>
          <h1 className="description">{handleGetTitle("descriptionWeb", language, true)}</h1>

        </Grid>
        <Grid item={true} md={6} xs={6} sm={6} className="" >
          <Paper elevation={3} className="paper">
            {/* <Grid item={true}className="contentLogin">
            {handleGetTitle("loginAccount", language, true)}
          </Grid> */}

            <Grid item={true} md={8} xs={8} sm={6} className="contentPaper">
              <TextField
                label={handleGetTitle("account", language, true)}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                id="outlined-search"
                type="search"
              />
            </Grid>

            <Grid item={true} md={8} xs={8} sm={6} className="contentPaper">
              <TextField
                label={handleGetTitle("password", language, true)}
                fullWidth
                type={view ? "text" : "password"}
                InputProps={{
                  startAdornment: (
                    <>
                      <InputAdornment position="end">
                        <LockIcon />
                      </InputAdornment>
                    </>

                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      {
                        view ? <VisibilityIcon className="viewPassword" onClick={() => setView(!view)} /> :
                          <VisibilityOffIcon className="viewPassword" onClick={() => setView(!view)} />
                      }

                    </InputAdornment>
                  )
                }}
                id="outlined-search"
              />
            </Grid>
            <Grid item={true} md={10} xs={10} sm={6} className="contentPaper">
              <Stack spacing={1} direction="row">
                <Button variant="contained" fullWidth size="large" className="btnLogin">{handleGetTitle("login", language, true)}</Button>
              </Stack>
            </Grid>
            <Grid item={true} md={10} xs={10} sm={6} className="forgottenpassword">
              {handleGetTitle("forgottenPassword", language, true)} {" ?"}
              <hr />
            </Grid>
            <Grid md={8} xs={8} sm={6} className="contentPaper">
              <Stack spacing={1} direction="row">
                <Button variant="contained" fullWidth size="large" className="btnCreateNewAccount">{handleGetTitle("createNewAccount", language, true)}</Button>
              </Stack>
            </Grid>
          </Paper>
        </Grid>


      </Grid>
      <Grid item={true} md={3} xs={3} sm={1} className="rightSidebar" zeroMinWidth>
        <Grid >

          <Radio {...controlProps('VI')} />{handleGetTitle("vietnamese", language, true)}
          <Radio {...controlProps('ENG')} color="success" />{handleGetTitle("english", language, true)}

        </Grid>

      </Grid>

    </Grid>
  </>
}

// export default LoginPage;

LoginPage.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // addExecutiveDocuments: makeSelectAddExecutiveDocuments(),
  // dashboardPage: makeSelectDashboardPage(),
  // profile: makeSelectProfile(),
  // miniActive: makeSelectMiniActive(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    // mergeData: data => dispatch(mergeData(data)),
    // onAddExecutiveDocument: (query, cb, types) => {
    //   dispatch(addExecutiveDocument(query, cb, types));
    // },
    // onDeleteExecutiveDocument: ids => {
    //   dispatch(deleteExecutiveDocument(ids));
    // },
    // onUpdateExecutiveDocument: (data, cb) => {
    //   dispatch(updateExecutiveDocument(data, cb));
    // },
    // onChangeSnackbar: obj => dispatch(changeSnackbar(obj)),
  };
}

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );



export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
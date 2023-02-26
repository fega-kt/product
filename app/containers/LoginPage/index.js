import { Container, Grid, Hidden, InputAdornment, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
// import Stack from '@material-ui/core/Stack';
import { mergeData } from './action'
import LockIcon from '@material-ui/icons/Lock';
import { Helmet } from 'react-helmet';
import './styles.scss'
// import { styled } from '@mui/material/styles';
import Cookies from 'js-cookie'
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';

import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { handleGetTitle } from 'utils/common'
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { compose } from "redux";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));
function LoginPage(props) {
  // const classes = useStyles();
  const [language, setLanguage] = useState("ENG")
  const [view, setView] = useState(false)
  useEffect(() => {
    const lang = Cookies.get('language')
    if (lang) setLanguage(lang)
  }, [])

  const controlProps = (item, color) => ({
    checked: language === item,
    onChange: (data) => {
      setLanguage(data.target.value)
      Cookies.set('language', data.target.value)
    },
    value: item,
    name: 'radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  return <>
    <div className="main">

      <Container maxWidth={false} >
        <Grid container spacing={2} className="contentLogin">
          <Hidden smDown>
            <Grid item xs={12} sm={8} md={4} className="description">
              <Grid >
                <h1 className="nameWeb">{handleGetTitle("nameWeb", language, true)}</h1>
                <h1 className="description">{handleGetTitle("descriptionWeb", language, true)}</h1>

              </Grid>
            </Grid>
          </Hidden>

          <Grid item xs={12} sm={8} md={4} className="content">
            <Paper >
              {/* login nè */}

              <Grid className="mainContent">
                <Grid item md={10} xs={8} sm={8} className="contentPaper">
                  {handleGetTitle("loginAccount", language, true)}
                </Grid>
                <Grid item md={10} xs={8} sm={8} className="contentPaper">
                  <TextField
                    label={handleGetTitle("account", language, true)}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="end">
                          <AccountCircleIcon />
                        </InputAdornment>
                      ),
                    }}
                    id="outlined-search"
                    type="search"
                  />
                </Grid>

                <Grid item md={10} xs={8} sm={8} className="contentPaper">
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
                <Grid item md={10} xs={10} sm={8} className="contentPaper">
                  {/* <Stack spacing={1} direction="row"> */}
                  <Button variant="contained" fullWidth size="large"
                    className="btnLogin">
                    {handleGetTitle("login", language, true)}
                  </Button>
                  {/* </Stack> */}
                </Grid>
                <Grid item md={10} xs={10} sm={8} className="forgottenpassword">
                  {handleGetTitle("forgottenPassword", language, true)} {" ?"}
                  <hr />
                </Grid>
                <Grid item md={8} xs={8} sm={8} className="contentPaper">
                  {/* <Stack spacing={1} direction="row"> */}
                  <Button variant="contained" fullWidth size="large"
                    className="btnCreateNewAccount"
                    onClick={() => props.mergeData()}>
                    {handleGetTitle("createNewAccount", language, true)}
                  </Button>
                  {/* </Stack> */}
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8} md={4} className="language">
            <Radio {...controlProps('VI')} color='primary' />{handleGetTitle("vietnamese", language, true)}
            <Radio {...controlProps('ENG')} color='secondary' />{handleGetTitle("english", language, true)}
          </Grid>
        </Grid>
      </Container>
    </div>
  </>
}


LoginPage.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  // dispatch: PropTypes.func.isRequired,
};

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

const mapStateToProps = createStructuredSelector({
  // addExecutiveDocuments: makeSelectAddExecutiveDocuments(),
  // dashboardPage: makeSelectDashboardPage(),
  // profile: makeSelectProfile(),
  // miniActive: makeSelectMiniActive(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    mergeData: data => dispatch(mergeData(data)),
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

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// export default LoginPage;

export default compose(
  withReducer,
  withSaga,
  withConnect,
  // styled(styles),
)(LoginPage);


import React from "react";
import Cookies from 'js-cookie'
import { Helmet } from 'react-helmet';

class DashboardHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reload: new Date() * 1
    };
  };

  handleCheckToken = () => {
    const token = Cookies.get('token')
    console.log(token, "token")
    if (!token && this.props.navigate) {
      this.props.navigate("login")
      this.setState({ reload: new Date() * 1 })
    }

  }
  componentDidUpdate() {
    this.handleCheckToken()
  };
    componentDidMount() {
    this.handleCheckToken()
  };
  render() {
    return (
      <>
      <Helmet>
          <title>{ process.env.REACT_APP_TITLE_NAME }</title>
    </Helmet>
        home

      </>
    )
  }
}

export default DashboardHome;

import React from "react";
import Cookies from 'js-cookie'

class DashboardHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  handleCheckToken = () => {
    const token = Cookies.get('token')
    console.log(token, "token")
    if (!token) {
      this.props.navigate && this.props.navigate("login")
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
        home
      </>
    )
  }
}

export default DashboardHome;

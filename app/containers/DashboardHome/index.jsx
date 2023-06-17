import Cookies from 'js-cookie';
import React from "react";

class DashboardHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reload: new Date() * 1,
    };
  };

  handleCheckToken = () => {
    const token = Cookies.get('token')
    console.log(token, "token")
    if (!token) {
      this.props.history.push('/login')
      this.setState({ reload: new Date() * 1 });
    }
  }
  componentDidUpdate() {
    this.handleCheckToken()
  };
  componentDidMount() {
    console.log(this.props, "props");
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

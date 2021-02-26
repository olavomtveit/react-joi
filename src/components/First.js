import { Component } from "react";

class First extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("component did mount");
    setTimeout(() => {
      console.log("... updating");
      this.setState({ count: 1 });
    }, 1000);
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log("render");
    return <div>Hello First</div>;
  }
}

export default First;

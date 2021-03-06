import React, { Component } from "react";
import socketIOClient from "socket.io-client";
class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://localhost:4001"
    };
  }
componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint, {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd"
      }
    });
    socket.on("FromAPI", data => {
      console.log("Dtaasdas")
      this.setState({ response: data })
    })
    ;
  }
render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {response
          ? <p>
              The temperature in Florence is: {response} °F
            </p>
          : <p>Loading...</p>}
      </div>
    );
  }
}
export default App;
import * as React from "react";
const Title = () => <h1>Hello</h1>;

class Hello extends React.Component<any, {}> {
  render() {
    let logo = require("@/assets/logo.svg");
    return (
      <div>
        <Title />
        <h2>your reduxName is</h2>
        <img src={logo} style={{ width: 200 }} alt="" />
      </div>
    );
  }
}

export default Hello;

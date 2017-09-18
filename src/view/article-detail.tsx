import * as React from "react";
const Title = () => <h1>Hello</h1>;

class About extends React.Component<any, {}> {
  render() {
    return (
      <div>
        <Title />
        <h2>your reduxName is article detail</h2>
      </div>
    );
  }
}

export default About;

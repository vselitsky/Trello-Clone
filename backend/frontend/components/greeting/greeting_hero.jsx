import React from "react";
import { Link } from "react-router-dom";

class GreetingHero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="hero">
        <div className="white-space" />
        <div className="container">
          <h1>Yello lets you work more collaboratively and get more done.</h1>
          <p className="lead">
            Yello’s boards, lists, and cards enable you to organize and
            prioritize your projects in a fun, flexible, and rewarding way.
          </p>
          <p>
            <Link to={`/signup`} className="cta">
              Sign Up - It's Free!
            </Link>
          </p>
        </div>
        <div className="hero-image" />
      </section>
    );
  }
}

export default GreetingHero;

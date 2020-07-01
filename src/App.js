import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      // intializing the state with an empty object
    };
  }

  componentDidMount() {
    axios(`https://codifyinditest.com/script_test/api-test/`).then((res) => {
      const data = res.data; //storing the response
      const temp = data["script test"]; // assigning it to temp variable before updating state
      this.setState({ data: temp });
    });
  }
  render() {
    const { data } = this.state; //destructing the state
    return (
      <div className="container">
        <div className="wrapper">
          <div className="d-flex flex-column">
            <h3 className="wrapperTitle text-center">{data.labels}</h3>
          </div>
          <div className="content text-center">
            <a href="tel:{data.phone_number}" className="teleLink">
              <div className="phoneIcon">
                <svg viewBox="0 0 578.106 578.106">
                  <path d="M577.83 456.128c1.225 9.385-1.635 17.545-8.568 24.48l-81.396 80.781c-3.672 4.08-8.465 7.551-14.381 10.404-5.916 2.857-11.729 4.693-17.439 5.508-.408 0-1.635.105-3.676.309-2.037.203-4.689.307-7.953.307-7.754 0-20.301-1.326-37.641-3.979s-38.555-9.182-63.645-19.584c-25.096-10.404-53.553-26.012-85.376-46.818-31.823-20.805-65.688-49.367-101.592-85.68-28.56-28.152-52.224-55.08-70.992-80.783-18.768-25.705-33.864-49.471-45.288-71.299-11.425-21.828-19.993-41.616-25.705-59.364S4.59 177.362 2.55 164.51-.306 141.56.102 134.216c.408-7.344.612-11.424.612-12.24.816-5.712 2.652-11.526 5.508-17.442s6.324-10.71 10.404-14.382L98.022 8.756c5.712-5.712 12.24-8.568 19.584-8.568 5.304 0 9.996 1.53 14.076 4.59s7.548 6.834 10.404 11.322l65.484 124.236c3.672 6.528 4.692 13.668 3.06 21.42-1.632 7.752-5.1 14.28-10.404 19.584l-29.988 29.988c-.816.816-1.53 2.142-2.142 3.978s-.918 3.366-.918 4.59c1.632 8.568 5.304 18.36 11.016 29.376 4.896 9.792 12.444 21.726 22.644 35.802s24.684 30.293 43.452 48.653c18.36 18.77 34.68 33.354 48.96 43.76 14.277 10.4 26.215 18.053 35.803 22.949 9.588 4.896 16.932 7.854 22.031 8.871l7.648 1.531c.816 0 2.145-.307 3.979-.918 1.836-.613 3.162-1.326 3.979-2.143l34.883-35.496c7.348-6.527 15.912-9.791 25.705-9.791 6.938 0 12.443 1.223 16.523 3.672h.611l118.115 69.768c8.571 5.308 13.67 12.038 15.303 20.198z"></path>
                </svg>
              </div>
              <div className="phoneText">{data.phone_number}</div>
            </a>
          </div>
        </div>
        <div className="iconHolder">
          <div className="buttonHolder d-inline-flex">
            <div className="buttonIcon">
              <svg width="12" height="12" viewBox="0 0 16 16" focusable="false">
                <path d="M9.414,8l6.112-6.112c0.396-0.396,0.401-1.032,0.009-1.423c-0.39-0.39-1.027-0.387-1.423,0.009L8,6.585 L1.888,0.473C1.492,0.077,0.854,0.074,0.465,0.464C0.073,0.856,0.078,1.492,0.474,1.888L6.586,8l-6.112,6.112 c-0.396,0.396-0.401,1.033-0.009,1.423c0.39,0.391,1.027,0.387,1.423-0.008L8,9.415l6.112,6.113 c0.396,0.394,1.033,0.399,1.423,0.008c0.39-0.39,0.387-1.027-0.009-1.423L9.414,8z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

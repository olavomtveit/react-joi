import React, { Component } from "react";
import Joi from "joi-browser";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: "",
        password: "",
      },
      errors: {},
    };
  }

  schema = Joi.object({
    username: Joi.string().required().min(3).max(30),
    password: Joi.string().required(),
  });

  validateInputs = (username, password) => {
    const { error, value } = this.schema.validate({
      username: username,
      password: password,
    });
    if (error) {
      this.setState({ errors: error.message });
    } else {
      this.setState({
        data: { username: username, password: password },
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target[0];
    const userPassword = e.target[1];

    this.validateInputs(userName.value, userPassword.value);
  };

  render() {
    return (
      <>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="form" method="post">
            <div>
              <label htmlFor="userNameInput" className="form-label">
                Username
              </label>
              <input type="text" className="form-control" id="serNameInput" />
            </div>
            <div>
              <label htmlFor="passwordInput" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary mb-3">
                Login
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Form;

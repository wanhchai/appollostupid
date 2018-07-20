import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      query: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {}

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="query">Query</label>
        <div className="form-group">
          <textarea
            style={{ height: "100px" }}
            type="text"
            className="form-control"
            id="query"
            value={query}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-success btn-lg">
            Run
          </button>
        </div>
      </form>
    );
  }
}

export default Form;

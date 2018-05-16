import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import PropTypes from "prop-types";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";
import { PROGRESS_NOT_STARTED } from "../constants/constants.js";

const mapDispatchToProps = dispatch => { //Redux dispatch actions mapped to React props. 
    //The React component can dispatch actions fired in Redux
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

class ConnectedForm extends Component { //A regular React.js component class, with state.
  constructor() {
    super();

    this.state = {
      title: "",
      description: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, description } = this.state;
    const progress = PROGRESS_NOT_STARTED;
    const id = uuidv1();
    this.props.addArticle({ title, description, progress, id }); //Because of mapDispatchToProps, we can reference this function call
    this.setState({ title: "", description: "" });
  }

  render() {
    const { title, description } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
          
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = withRouter(connect(null, mapDispatchToProps)(ConnectedForm));

ConnectedForm.propTypes = {
  addArticle: PropTypes.func.isRequired
};

export default Form;

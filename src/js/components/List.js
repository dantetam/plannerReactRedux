import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import PropTypes from "prop-types";
import { changeProgressArticle } from "../actions/index";
import { PROGRESS_NOT_STARTED } from "../constants/constants.js";

const mapStateToProps = state => { //Map a Redux state into a regular React props object
  return { articles: state.articles };
};

const mapDispatchToProps = dispatch => { //Redux dispatch actions mapped to React props. 
    //The React component can dispatch actions fired in Redux
  return {
    toggleProgress: article => dispatch(changeProgressArticle(article))
  };
};

class ConnectedList extends Component {
    constructor() {
      super();
      this.state = {};
      this.handleToggleProgress = this.handleToggleProgress.bind(this);
    }
    
    handleToggleProgress(event) {
        event.preventDefault();
        let title = event.target.getAttribute('data-title');
        let description = event.target.getAttribute('data-description');
        this.props.toggleProgress({ title, description }); //Because of mapDispatchToProps, we can reference this function call
    }

    render() {
        let self = this;
        return (
            <ul className="list-group list-group-flush">
              {this.props.articles.map(el => ( //Note that articles, the parameter, is read from props
                <li className="list-group-item" key={el.id}>
                    <button data-title={el.title} data-description={el.description} onClick={function(event) {
                        self.handleToggleProgress(event);        
                    }}>
                      {el.progress === PROGRESS_NOT_STARTED ? "X" : "V"}
                    </button>&emsp;
                    {el.title}:&emsp;
                    {el.description}&emsp;
                    ({el.progress})&emsp;
                </li>
              ))}
            </ul>
        );
    }
}

const List = withRouter(connect(mapStateToProps, mapDispatchToProps)(ConnectedList)); //Note: the actual DOM element is the result of this connect

ConnectedList.propTypes = { //JSX validation
  articles: PropTypes.array.isRequired
};

export default List;

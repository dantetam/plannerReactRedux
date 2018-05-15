import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => { //Map a Redux state into a regular React props object
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => ( //A stateless JSX element
  <ul className="list-group list-group-flush">
    {articles.map(el => ( //Note that articles, the parameter, is read from props
      <li className="list-group-item" key={el.id}>
        {el.title}:&emsp;
        {el.description}&emsp;
        ({el.progress})
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList); //Note: the actual DOM element is the result of this connect

ConnectedList.propTypes = { //JSX validation
  articles: PropTypes.array.isRequired
};

export default List;

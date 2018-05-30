import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const mapStateToProps = state => { //Map a Redux state into a regular React props object
    return {};
  //return { articles: state.articles };
};

const mapDispatchToProps = dispatch => { //Redux dispatch actions mapped to React props. 
    //The React component can dispatch actions fired in Redux
  /*
  return {
    toggleProgress: article => dispatch(changeProgressArticle(article))
  };
  */
  return {};
};

class Calendar extends Component {
    constructor() {
      super();
      this.state = {};
      this.handleToggleProgress = this.handleToggleProgress.bind(this);
    }
    
    handleToggleProgress(event) {
        event.preventDefault();
        console.log("Fired event in calendar");
    }

    render() {
        let self = this;
        
          const { match } = this.props // coming from React Router.

        return (
            <div className="calendar">
                <h2>{match.url}</h2>
                
                <Link to="/calendar/apr2018">Prev month</Link>
                <Link to="/calendar/may2018">This month</Link>
                <Link to="/calendar/jun2018">Next month</Link>
                    
                <div className="month"> 
                  <ul>
                    <li className="prev">&#10094;</li>
                    <li className="next">&#10095;</li>
                  </ul>
                </div>

                <ul className="weekdays">
                  <li>Mo</li>
                  <li>Tu</li>
                  <li>We</li>
                  <li>Th</li>
                  <li>Fr</li>
                  <li>Sa</li>
                  <li>Su</li>
                </ul>

                <ul className="days"> 
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                  <li><span className="active">10</span></li>
                  <li>11</li>
                </ul>
            </div>
        );
    }
}

const ReduxCalendar = withRouter(connect(mapStateToProps, mapDispatchToProps)(Calendar)); //Note: the actual DOM element is the result of this connect

export default ReduxCalendar;

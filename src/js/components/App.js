import React from "react";
import List from "./List";
import Form from "./Form";
import Calendar from "./Calendar";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//A regular JSX element but with combined Redux/React components

const App = () => (
  <div>
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Planner</h2>
          <List />
        </div>
        <div className="col-md-4 offset-md-1">
          <h2>Add a new time block</h2>
          <Form />
        </div>
      </div>
      <div>
          <nav>
            <Link to="/calendar">Calendar</Link>
          </nav>  
          <div>
            <Route path="/calendar" component={Calendar}/>
          </div>
      </div>
  </div>
);

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import upper, { text1, text2, text3 } from './file1';
import obj from './file2';
import { males } from './file2';
import { females } from './file2';


function Home() {
    return (
      <div>
            <h2>ex 1</h2>
            <p>{upper('please uppercase me')}</p>
      <p>{text1}</p>
      <p>{text2}</p>
            <p>{text3}</p>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
            <h2>ex 2</h2>
            <p>
        {obj.firstName} {obj.email}
      </p>

      </div>
    );
  }
  



class Header extends React.Component {
    render() { 
        return( <div>
            <Router>
        <div>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                ex 1
              </NavLink>
            </li>
            <li>
              <NavLink exact to="About">
               ex 2
              </NavLink>
            </li>
          </ul>
  
          <hr />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </div>
            </Router>
        </div>
        );
    }

}
 
export default Header;
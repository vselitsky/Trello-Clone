import React from 'react';

import GreetingNavBar from './greeting_nav';
import GreetingHero from './greeting_hero';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
   return (
        <div>
       <GreetingNavBar/>
        <GreetingHero />
       </div>
   ) 
   // const sessionLinks = () => (
   //    <nav className="login-signup">
   //       <Link to="/login">Login</Link>
   //       &nbsp;or&nbsp;
   //    <Link to="/signup">Sign up!</Link>
   //    </nav>
   // );
   // const personalGreeting = () => (
   //    <hgroup className="header-group">
   //       <h2 className="header-name">Hi, {currentUser.username}!</h2>
   //       <button className="header-button" onClick={logout}>Log Out</button>
   //    </hgroup>
   // );

   // return currentUser ? personalGreeting() : sessionLinks();
};



export default Greeting;


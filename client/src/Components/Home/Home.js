import React from 'react';
import { BrowserRouter , Link } from "react-router-dom";

const Home = ( { userName, logOutUser }) => {
   
    return (
      <div className="text-center mt-4">
        <span className="text-secondary font-weight-bold pl-1">
          Welcome {userName}
        </span>
        ,
        <BrowserRouter>
        <Link
          to="/login"
          className="font-weight-bold text-primary pl-1"
          onClick={e => logOutUser(e)}
        >
          log out
        </Link></BrowserRouter>
      </div>
    );
  };

export default Home;

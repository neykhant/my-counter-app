import React from 'react';

const NavBar =  (props) => {
    
    const { totalCounter } = props;
    return (  
            <nav className="navbar navbar-light bg-light m-2" >
                <span className="navbar-brand mb-0 h1" >
                    NavBar {''}
        <span className="badge badge-secondary">{totalCounter}</span>
                </span>
            </nav>
    );
}
 
export default NavBar;

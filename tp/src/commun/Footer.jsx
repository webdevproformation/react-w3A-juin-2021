import React from 'react';

class Footer extends React.Component {
    state = {  }
    render() { 
        return ( <footer className="text-center my-3">
            &copy; {(new Date()).getFullYear()} - Malik H
        </footer> );
    }
}

export default Footer;
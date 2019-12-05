import React from 'react';
import SearchBar from '../../containers/SearchBar/SearchBar'
import './App.css'
import Heading from "../Heading/Heading";

const Footer = (props) => {
    return (
        <p>
            &copy; {props.message}
        </p>
    );
};
const App = (props) => {
    return (

        <div className={'container'}>

            <div>

                <header>
                    <Heading/>
                </header>


                    <SearchBar/>


                <footer className={'footer'}>
                    {/*<Footer message={` All Rights Reserved.`}/>*/}
                </footer>

            </div>

        </div>
    );

};

export default App;



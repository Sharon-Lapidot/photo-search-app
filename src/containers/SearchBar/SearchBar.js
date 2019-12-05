import React from 'react';
import PictureDisplay from '../PictureDisplay/PictureDisplay'
import './SearchBar.css'
import Heading from '../../components/Heading/Heading'


export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            change: false,
            value: '',
            shouldDisplayPicture: false
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value , change: false});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`submit was pressed value in state is ${this.state.value}`);
        if (this.state.value !== '') {
            this.setState({shouldDisplayPicture: true, change: true});
        }
    };

    render() {
        console.log(`now in the state: value= ${this.state.value}`);

        return (
            <div className={'search_bar'}>

                <div className={'my-form'}>
                    <form onSubmit={this.handleSubmit}>
                        <input className={'input'} type={'text'} value={this.state.value} onChange={this.handleChange}/>
                        <button className={'button'}>SEARCH</button>
                    </form>
                </div>

                <div>
                    {this.state.shouldDisplayPicture && this.state.change ?
                        <PictureDisplay value={this.state.value}></PictureDisplay>
                        : null}
                </div>

            </div>
        );
    }
}
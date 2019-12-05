import React from 'react'
import './PictureDisplay.css'

export default class PictureDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            data: Array(8).fill(''),
            searchWord: this.props.value,
            querySuccess: false,
            preformedSearch : false,
        };
       this.pullData = this.pullData.bind(this);
    }

    async componentDidMount() {
        console.log('component did mount')
        // this.setState({querySuccess: true});
        this.pullData();
    }



    async pullData() {
        try {
            console.log('pulling data...');
            const response = await fetch(`https://pixabay.com/api/?key=14078430-80affd04b36ab29223c11cb82&q=${this.props.value}&image_type=photo`);
            const json = await response.json();
            console.log(json);
            console.log(this.state.data);

            if (json.hits.length >= 8) {
                let num = (Math.floor(Math.random() * [json.hits.length-8]));
                this.setState({data: json.hits.slice(num,num+8), searchWord: this.props.value, querySuccess: true ,preformedSearch :true});
            } else {
                this.setState({querySuccess: false, preformedSearch: true});
            }

        } catch (e) {
            this.setState({querySuccess: false});
            console.log(`Opss There is an error...`);
        }
    }

    render() {
        console.log(`render pictureDisplay, props is ${this.props.value}`);
        console.log('querySuccess is ' + this.state.querySuccess);

        let images = [];

        let message =
            <div className={'error-heading'}>
                <h2>Pictures not found, try again</h2>
            </div>;



        if (this.state.querySuccess){
             images =      <div className={'image-container'}>
                <img className={'image'} src={`${this.state.data[0].webformatURL}`} alt={'Pic1'}/>
                <img className={'image'} src={`${this.state.data[1].webformatURL}`} alt={'Pic2'}/>
                <img className={'image'} src={`${this.state.data[2].webformatURL}`} alt={'Pic3'}/>
                <img className={'image'} src={`${this.state.data[3].webformatURL}`} alt={'Pic4'}/>
                <img className={'image'} src={`${this.state.data[4].webformatURL}`} alt={'Pic5'}/>
                <img className={'image'} src={`${this.state.data[5].webformatURL}`} alt={'Pic6'}/>
                <img className={'image'} src={`${this.state.data[6].webformatURL}`} alt={'Pic7'}/>
                <img className={'image'} src={`${this.state.data[7].webformatURL}`} alt={'Pic8'}/>

            </div>
        }

        return (
            <div className={'picture-container'}>

                {this.state.querySuccess === false && this.state.preformedSearch === true ? message : images}

            </div>
        );
    }
}

import React from 'react';
import Newz from './news.jsx';

class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : {
                source: 'Yahoo Finance',
                title: 'Stocks, Stocks, and more Stocks',
                description: 'Investing.com-Technology Stocks',
                viewership: 466,
                url: '#',
                img: 'http://lorempixel.com/400/200',
                time: '7h'
            
        }
    }
}

    render() {
    return (
        <div id='theNewz'>
            <Newz props={this.state.data} />
        </div>
    )
    }

}


export default NewsList
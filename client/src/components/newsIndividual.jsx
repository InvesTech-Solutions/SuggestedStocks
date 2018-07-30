import React from 'react';

var NewsIndividual = (props) => {
    props = props || {data : {}};

    return  (
        <div id='mainNews'>
            <div id='innerNewsContainer'>
            <img src={props.data.img} />
            <div id='newsInfoContainer'>
                    <div id='articleTime'> 
                        <span className='bold'> {props.data.source} </span>
                        <span id='time'> {props.data.time} </span>
                    </div>
                    <div id='titleDescriptionNews'>
                    <h3 id='dataTitle'> {props.data.title} </h3>
                    <h3 id='dataDescription'> {props.data.description} </h3>
                    </div>

                <span id='views'>
                <svg title="494 views" width="14" height="11" viewBox="0 0 14 11" id='theEye'><path fillRule="evenodd" d="M7,10.8888889 C3.13400675,10.8888889 0,7.04766168 0,5.44444444 C9.81687425e-17,3.84122721 3.13400675,0 7,0 C10.8659932,0 14,3.84312609 14,5.44444444 C14,7.0457628 10.8659932,10.8888889 7,10.8888889 Z M7,7.77777778 C8.28866442,7.77777778 9.33333333,6.73310886 9.33333333,5.44444444 C9.33333333,4.15578003 8.28866442,3.11111111 7,3.11111111 C5.71133558,3.11111111 4.66666667,4.15578003 4.66666667,5.44444444 C4.66666667,6.73310886 5.71133558,7.77777778 7,7.77777778 Z"></path></svg>
                {props.data.viewership}
                </span>
            </div>
            </div>
            <a id='linkNews' href='https://www.google.com' target="_blank"/>
        </div>
    )
}

export default NewsIndividual
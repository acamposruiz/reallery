/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
import React from 'react';
import utils from './utils.es6';

function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
}

function getWidth() {
    getWidth.width = getWidth.width || (utils.is_mobile('phone')? window.innerWidth: Math.max((window.innerWidth/2) - 15, Math.min(window.innerWidth, 340)));

    return getWidth.width;
}

class Videos extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        var width = getWidth();

        var videos = this.props.videos.map(videoId => {

            return <div key={videoId} id={videoId} className="video-item">

                <iframe style={{border:'none'}} id={videoId} type="text/html" width={width}  height={(3*width)/4}
                        src={`http://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://antoniocamposruiz.com`}/>
            </div>
        });

        return (
            <div className="video-gallery-container"> {videos} </div>
        );
    }
}
;

export default Videos;

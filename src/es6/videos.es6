/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
import React from 'react';
import utils from './utils.es6';
import YouTube from 'react-youtube';

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

            const opts = {
                width: width,
                playerVars: { // https://developers.google.com/youtube/player_parameters
                    autoplay: 0
                }
            };

            return <div key={videoId} className="video-item">
                <YouTube
                    key={videoId}
                    videoId={videoId}
                    opts={opts}
                    onReady={_onReady}
                />
            </div>
        });

        return (
            <div className="video-gallery-container"> {videos} </div>
        );
    }
}
;

export default Videos;

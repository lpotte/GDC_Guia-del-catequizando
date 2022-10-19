import React from 'react';

import { YoutubePlayer } from 'capacitor-youtube-player';

import { Plugins, Capacitor } from '@capacitor/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { VideoPlay} from "../declarations";

interface VideoProps extends RouteComponentProps {
    Videos: VideoPlay[];
}

const VideoEmbebido: React.FunctionComponent<VideoProps> = ({Videos}) => {
    Videos.forEach((Video, index) => {
    console.log('App::componentDidMount() | method called')

    async function initializeYoutubePlayerPluginWeb() {
        console.log('App::initializeYoutubePlayerPluginWeb() | method called');
        const options = {playerId: 'youtube-player', playerSize: {width: 640, height: 360}, videoId: Video.ID, debug: true};
        const result = await YoutubePlayer.initialize(options);
        console.log('playerReady', result);
        (result as any).player.addEventListener('onPlaybackQualityChange', (event: any) => {
            console.log('playback quality is', event);
        });
        (result as any).player.addEventListener('onStateChange', (event: any) => {
            console.log('state is', event);
        });
    };

    async function initializeYoutubePlayerPluginNative() {
        const { YoutubePlayer } = Plugins;

        const options = {width: 640, height: 360, videoId: Video.ID};
        const playerReady = await YoutubePlayer.initialize(options);
        console.log('playerReady', playerReady);
    };

    if (Capacitor.platform === 'web') {
        initializeYoutubePlayerPluginWeb();
    } else { // Native
        initializeYoutubePlayerPluginNative();
    }
    })
    return (
            <div className="App">
                    {/* The <iframe> (and video player) will replace this <div> tag. */}
                    <div id="youtube-player"></div>
            </div>
    );
};

export default withRouter(VideoEmbebido);
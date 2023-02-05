import { useState } from 'react';
import useSound from 'use-sound';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { brown } from '@material-ui/core/colors';
import song from '../assets/song.mp3';

const VolumeToggle = () => {
    const [play, { stop }] = useSound(song, { volume: 0.5, interrupt: true, playbackRate: 0.8, onend: () => { play() }});
    const [mute, setMute] = useState(true);

    const toggleMute = () => {
        if (mute) {
            play();
        } else {
            stop();
        }
        setMute(!mute);
    };

    return (
        <div onClick={toggleMute}>
            {mute ? <VolumeOffIcon sx={{ fontSize: 40, color: brown[500] }} /> : <VolumeUpIcon sx={{ fontSize: 40, color: brown[500] }} />}
        </div>
    );
};

export default VolumeToggle;
import { useState } from 'react';
import useSound from 'use-sound';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { brown } from '@material-ui/core/colors';

const VolumeToggle = () => {
    const [play, { stop }] = useSound('/sounds/doorbell.mp3', { volume: 0.25 });
    const [mute, setMute] = useState(false);

    const toggleMute = () => {
        setMute(!mute);
        if (mute) {
            stop();
        } else {
            play();
        }
    };

    return (
        <div onClick={toggleMute}>
            {mute ? <VolumeOffIcon sx={{ fontSize: 40, color: brown[500] }} /> : <VolumeUpIcon sx={{ fontSize: 40, color: brown[500] }} />}
        </div>
    );
};

export default VolumeToggle;
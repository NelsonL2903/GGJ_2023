import { useState } from 'react';
import useSound from 'use-sound';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import PauseIcon from '@mui/icons-material/Pause';
import { brown } from '@material-ui/core/colors';


const VolumeToggle = (props: any) => {
    const [play, { stop }] = useSound('', { volume: 0.25 });
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
        <div className='absolute flex right-4 top-4'>
            <div>
                {
                    props.pause ??
                    < PauseIcon sx={{ fontSize: 40, color: brown[500] }} />
                }
            </div>
            <div onClick={toggleMute}>
                {mute ? <VolumeOffIcon sx={{ fontSize: 40, color: brown[500] }} /> : <VolumeUpIcon sx={{ fontSize: 40, color: brown[500] }} />}
            </div>
        </div>

    );
};

export default VolumeToggle;
import DeadTree from "../assets/DeadTree.png";
import { RootState } from "../store/store";
import { useSelector, useDispatch } from 'react-redux';


const Tree = () => {
    const life = useSelector((state: RootState) => state.game.life);

    return (
        <div>
            {
            <img src={DeadTree} className="h-[100vh] w-[100vw] z-4 absolute bottom-[0] left-[-2vw]"></img>
            }
            
        </div>

    );
};

export default Tree; 

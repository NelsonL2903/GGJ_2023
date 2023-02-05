import PauseMenu from "./PauseMenu";

const LeftMenu = (props: any) => {
  return (
    <div className="absolute flex right-16 top-4 z-20">
      <div>
        <PauseMenu />
      </div>
    </div>
  );
};

export default LeftMenu;

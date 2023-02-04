const Background = (props: any) => {
  return (
    <div className="bg-gradient-to-t from-indigo-500 to-blue-300 h-[100vh]">
      {props.children}
    </div>
  );
};

export default Background;

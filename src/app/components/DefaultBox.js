const DefaultBox = (props) => {
  return (
    <div className="relative aspect-[1003/563] bg-cyan w-full">
      <div className="absolute mx-auto my-auto z-2 right-0 left-[1.5%] top-[2%] bottom-0 aspect-[938/505] w-[93.8%] bg-darkcyan"></div>
      <div className="absolute mx-auto my-auto z-[10] right-0 left-0 top-0 bottom-0 aspect-[938/505] w-[93.8%] bg-back">
        {props.children}
      </div>
    </div>
  );
};

export default DefaultBox;

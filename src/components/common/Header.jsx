const Header = () => {
  return (
    <div className="w-1/2 flex justify-center items-center flex-col mx-auto my-10 gap-4 text-center">
      {/* TODO: Fix transition here */}
      <h1 className="text-4xl text-teal-700 font-semibold tracking-tight hover:tracking-widest transition duration-1000 ease">
        WRITE A TODO!
      </h1>
      <h3 className="text-slate-700 font-mono">
        Achieve your dreams by completing your tasks today!
      </h3>
    </div>
  );
};

export default Header;

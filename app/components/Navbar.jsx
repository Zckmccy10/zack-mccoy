const Navbar = () => {
  return (
    <div className="flex items-center gap-2 px-4  divide-x border-b-2 border-solid border-white/10">
      <img
        src="/zm-blue-thumb.png"
        alt="logo"
        className="w-[50px] h-[50px] opacity-30"
      />
      <p className="text-lg font-bold opacity-60 pl-2">Zack McCoy</p>
    </div>
  );
};

export default Navbar;

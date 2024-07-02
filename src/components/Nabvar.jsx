const Nabvar = () => {
  return (
    <nav className="flex w-full max-w-7xl m-auto h-10  justify-between items-center">
      <div>
        <h3 className="font-bold text-2xl text-slate-800 cursor-pointer">
          WFL.cloth
        </h3>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-4">
          <li className="hover-underline-animation ">
            <a href="#" className=" text-slate-800 hover:text-slate-500">
              Home
            </a>
          </li>

          <li className="hover-underline-animation ">
            <a href="#" className=" text-slate-800 hover:text-slate-500">
              About
            </a>
          </li>
          <li className="hover-underline-animation ">
            <a href="#" className=" text-slate-800 hover:text-slate-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <button
          type="button"
          className="bg-slate-800 text-white px-8 py-2 rounded-full text-sm hover:bg-slate-600  hover:scale-105 transition-all duration-150 "
        >
          Order
        </button>
      </div>
    </nav>
  );
};

export default Nabvar;

import { Link, NavLink } from "react-router-dom";

const Navbar = ({
  handleSearch,
  searchItem,
  setSeachItem,
  input,
  saveItem,
}) => {
  const navActive = ({ isActive }) => {
    return {
      color: isActive ? "#ef4444" : null,
    };
  };

  return (
    <nav className="navbar flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 ">
      <Link to="/" className="brand text-2xl font-semibold  lowercase italic text-3xl ">
        <span className=" text-yellow-500">Food</span> <span className=" text-red-500 ">Heaven</span>
      </Link>

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="search"
          ref={input}
          value={searchItem}
          onChange={(e) => setSeachItem(e.target.value)}
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200 "
          placeholder="Search Items(try pizza, carrots ...)"
        />
      </form>
      <ul className="flex gap-5 ">
        <li>
          <NavLink
            end
            to="/"
            style={navActive}
            className=" text-gray-400 hover:text-gray-700 duration-300 "
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favourites"
            style={navActive}
            className=" text-gray-400 hover:text-gray-600 duration-300  "
          >
            Favourites{" "}
            <span className="text-cyan-500">({saveItem.length})</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

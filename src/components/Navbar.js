import { Link } from "react-router-dom";
import { BsHandbagFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className="bg-black">
      <div className="h-[70px] mx-auto container flex items-center justify-between no-underline text-white">
        <Link to="/">
          <h2 className="text-4xl font-semibold">Online Shop</h2>
        </Link>
        <Link to="/cart">
          <div className="flex items-center ">
            <span>
              <BsHandbagFill size={36} />
            </span>
            <span className="flex items-center justify-center h-6 w-6 bg-yellow-500 rounded-3xl text-sm font-semibold text-black ml-[5px] relative bottom-1">
              <span>3</span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

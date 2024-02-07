import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="py-0.5">
      <Link
        to="/"
        className="w-[52px] h-[52px] rounded-full flex items-center justify-center hover:bg-[#eff3f41a] transition-colors"
      >
        <FaTwitter size={30} color="#1DA1F2" />
      </Link>
    </div>
  );
}

export default Logo;

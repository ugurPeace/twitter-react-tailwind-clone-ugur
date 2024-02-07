import Logo from "./Logo";
import Menu from "./Menu/Menu";
function Sidebar() {
  return (
    <aside className="w-[275px] min-h-screen px-2 ">
      <Logo />
      <Menu />
    </aside>
  );
}

export default Sidebar;

import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="My Logo" />
      <a href="/">Home</a>
    </header>
  );
};

export default Header;

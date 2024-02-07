import Cart from "./Cart";

const Header = () => {
  // return e("header", {}, [e("h1", {}, ["The Shop!"]), Cart()]);
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart />
    </header>
  );
};

export default Header;

import Button from "./Button";

function Navbar({handleClick}) {
//   const handleClick = () => {
//     console.log("Click depuis Navbar")
//   };

  return <Button handleClick={handleClick} text="Click Navbar" background="red" />;
}

export default Navbar;

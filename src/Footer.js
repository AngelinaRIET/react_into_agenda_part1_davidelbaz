import Button from "./Button";

function Footer({handleClick}) {
  // const handleClick = () => {
  //   console.log("Click depuis Footer")
  // };

  return <Button handleClick={handleClick} text="Click Footer" background="blue"/>;
}

export default Footer;

// function Button(props) {
function Button({background, text, handleClick}) {
    // const {background, text} = props; //{text: "...", background: "..."}
  return (
    <button onClick={(e) => handleClick(e, "toto")} style={{ backgroundColor: background }}>{text}</button>
    // <button  onClick={handleClick} style={{ backgroundColor: background }}>{text}</button>
  );
}

export default Button;

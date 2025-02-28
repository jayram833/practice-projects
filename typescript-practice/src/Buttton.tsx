import { FC } from "react";

interface MyButtonProps {
  text: string;
  onClick: () => void;
}

const Button: FC<MyButtonProps> = function (props) {
  return <button onClick={() => alert("test")}>{props.text}</button>;
};
export default Button;

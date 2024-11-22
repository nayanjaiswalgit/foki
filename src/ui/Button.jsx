import { Button } from "antd";

const button = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default button;

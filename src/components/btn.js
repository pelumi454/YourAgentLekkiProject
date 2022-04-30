export const CustomBtn = (props) => {
  const { className } = props;
  return <button className={`btn btn-custom ${className}`}>{props.label}</button>;
};

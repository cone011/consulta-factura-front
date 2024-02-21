const CustomButton = ({ children, ...props }) => {
  return (
    <div className="center-button">
      <button className="btn" {...props}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;

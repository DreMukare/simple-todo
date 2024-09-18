const Button = (props) => {
  const { handleClick, buttonText, buttonIcon, moreBtnStyle } = props;

  return (
    <button
      onClick={() => handleClick()}
      className={`bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded ${moreBtnStyle}`}
    >
      {buttonText ? buttonText : buttonIcon}
    </button>
  );
};

export default Button;

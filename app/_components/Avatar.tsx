const Avatar = ({ name, className }) => {
  return (
    <button
      type="button"
      className={`text-base text-white bg-red-500 ${className}`}
    >
      <span className="p-1">{name[0]}</span>
    </button>
  );
};
export default Avatar;

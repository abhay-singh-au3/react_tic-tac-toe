export default ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="box">
      {value}
    </button>
  );
};

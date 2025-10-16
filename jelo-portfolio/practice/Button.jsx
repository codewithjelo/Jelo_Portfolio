function Button() {
  const styles = {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  let count = 0;
  const handleClick =
    // (name) => {
    // alert("Gusto Ayaw Pasok!");
    // if (count < 3) {
    //     count++;
    //     alert(`Gusto Ayaw Pasok! ${count}`);
    // } else {
    //     alert(`Buntis Meron! ${name}`);
    // }

    (e) => (e.target.textContent = "Buntis Meron!");

  const handleClick2 = (whut) => {
    alert(`Buntis ${whut}!`);
  };

  return (
    <button style={styles} onClick={(e) => handleClick(e)}>
      Click Me
    </button>
  );
}

export default Button;

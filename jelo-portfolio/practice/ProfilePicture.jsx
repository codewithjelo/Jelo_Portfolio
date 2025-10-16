function ProfilePicture() {
  const imageUrl = "./src/assets/jelo.jpg";
  const imageUrl2 = "./src/assets/jelo2.jpg";
  const handleClick = (e) => (e.target.src = imageUrl2);
  const handleClick2 = (e) => (e.target.src = imageUrl);
  return (
    <div>
      <h3>Click Event (Single Click and Double Click!)</h3>
      <img
        onClick={(e) => handleClick(e)}
        src={imageUrl}
        alt="Profile"
        style={{
          padding: "10px",
          borderRadius: "50%",
          height: "150px",
          width: "150px",
          objectFit: "cover",
          display: "inline-block",
          cursor: "pointer",
        }}
      />

      <img
        onDoubleClick={(e) => handleClick2(e)}
        src={imageUrl2}
        alt="Profile"
        style={{
          padding: "10px",
          borderRadius: "50%",
          height: "150px",
          width: "150px",
          objectFit: "cover",
          display: "inline-block",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

export default ProfilePicture;

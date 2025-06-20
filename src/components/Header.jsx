import logo from '../assets/logo.jpg'; // Adjust the path as per the file location


function Header() {
  return (
    <>
      {/* Top Info Bar */}
      <div style={styles.topBar}>
        <p style={styles.tagline}>World's Largest Medical Equipment Market Place</p>
        <div style={styles.topLinks}>
          <a href="#">My account</a> | <a href="#">Contact Us</a>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div style={styles.navbar}>
        <img src={logo} alt="1MDM Logo" style={styles.logo} />
        <ul style={styles.navLinks}>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Sell on 1MDM</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </div>
    </>
  );
}

const styles = {
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 40px",
    fontSize: "14px",
    color: "#666",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff"
  },
  tagline: {
    fontWeight: "500"
  },
  topLinks: {
    display: "flex",
    gap: "10px"
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#fff"
  },
  logo: {
    width: "100px",
    height: "auto"
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "25px",
    fontWeight: "500",
    color: "#444"
  }
};

export default Header;

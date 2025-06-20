import CountUp from "react-countup";
import logo from '../assets/logo.jpg'; // Adjust the path as per the file location
import Header from "../components/Header";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />

      <section className="hero">
        <div className="logo">
<img src={logo} alt="Logo" />
        </div>
        <div className="hero-content">
          <h2>Sell on 1mdm.com</h2>
          <h1>Reach millions of B2B buyers globally</h1>
          <div className="hero-buttons">
            <button>Start Selling</button>
            <button>Chat with Consultant</button>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat">
          <h3 style={{ color: "red", fontWeight: "bold" }}>
            <CountUp end={26000000} duration={2.5} separator="," />+
          </h3>
          <p>Active buyers globally</p>
        </div>
        <div className="stat">
          <h3 style={{ color: "red", fontWeight: "bold" }}>
            <CountUp end={400000} duration={2.5} separator="," />+
          </h3>
          <p>Product inquiries daily</p>
        </div>
        <div className="stat">
          <h3 style={{ color: "red", fontWeight: "bold" }}>
            <CountUp end={200} duration={2} separator="," />+
          </h3>
          <p>Countries & regions represented</p>
        </div>
      </section>

      <section className="about">
        <h2>1mdm.com is a leading ecommerce platform that helps SMEs go global</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TN7iJyc5Uks?si=NMXc5t22glXs9AfZ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <p>
          Connect with millions of business buyers from around the world. Get
          the tools and know-how to build a successful ecommerce presence for
          your business. Pocket more from each sale, with take rates as low as
          0% in some cases.
        </p>
      </section>

      <section className="benefits">
        <h2>Why Choose 1mdm.com?</h2>
        <ul>
          <li>
            Largest number of medical device products & categories on one
            platform
          </li>
          <li>
            Custom storefront, Advertising tools, Data & Analytics, Customer
            support
          </li>
        </ul>
        <p>Success stories from 1mdm.com sellers</p>
      </section>

      <section className="call-to-action">
        <h2>Ready to Grow Your Business?</h2>
        <button>Start Selling</button>
        <button>Chat with Consultant</button>
      </section>

      <footer className="footer">
        <p>© 2025 1mdm.com by Super Labs</p>
        <p>Terms of Use | Privacy Policy</p>
        <p>Owner: Saurav Rai</p>
      </footer>
    </>
  );
}

export default Home;

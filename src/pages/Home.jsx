import { Typography, Button } from "antd";
import { Link } from "react-router-dom";
import pythonImg from "../images/Python.png";
import postgresqlImg from "../images/PostgresSQL.png";
import powerbiImg from "../images/power-bi-icon.png";
import excelImg from "../images/excel-icon.png";
import LinkedInImg from "../images/linkedin-text-icon.png";
import databricksImg from "../images/databricks-icon.png"

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="fade-in">
          <h1>MARCO TAN</h1>
          <h2>DATA ANALYST</h2>
          <h2>AUCKLAND, NEW ZEALAND</h2>
        </div>
        <div className="second-fade-in">
          <div className="icon-row">
            <img
              src={pythonImg}
              style={{ width: "50px", marginRight: "20px" }}
            />
            <img
              src={postgresqlImg}
              style={{ width: "50px", marginRight: "20px" }}
            />
            <img
              src={powerbiImg}
              style={{ width: "50px", marginRight: "20px" }}
            />
            <img src={excelImg} style={{ width: "75px", marginRight: "20px" }} />
            <img src={databricksImg} style={{ width: "60px" }} />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="icon-row">
          <a
            className="img-link"
            href="https://www.linkedin.com/in/tanmarcogabriel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedInImg}
              style={{ width: "150px", borderRadius: "50%" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

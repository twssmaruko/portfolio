import { Typography } from "antd";
const { Title, Paragraph } = Typography;

const About = () => (
  <div className="container">
    <Title level={2}>About</Title>
    <Paragraph>
      Data analyst with experience in Python, SQL, and dashboarding (Tableau/Power BI).
      Passionate about reproducible analysis and clear storytelling.
    </Paragraph>
  </div>
);

export default About;

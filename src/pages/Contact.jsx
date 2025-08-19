import { Typography } from "antd";
const { Title, Paragraph } = Typography;

const Contact = () => (
  <div className="container">
    <Title level={2}>Contact</Title>
    <Paragraph>
      Email: yourname@email.com · LinkedIn: /in/yourname · GitHub: /yourname
    </Paragraph>
  </div>
);

export default Contact;

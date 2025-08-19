import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const Projects = () => {
  return (
    <div className="container">
      <Title level={2}>Projects</Title>
      <Row gutter={[16, 16]}>
        {projects.map(p => (
          <Col xs={24} sm={12} lg={8} key={p.id}>
            <ProjectCard p={p} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;

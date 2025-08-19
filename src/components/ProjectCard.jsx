import { Card, Tag, Button, Space } from "antd";
import { GithubOutlined, BarChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ProjectCard = ({ p }) => {
  return (
    <Card
      hoverable
      cover={p.thumbnail ? <img src={p.thumbnail} alt={p.title} /> : null}
      style={{ borderRadius: 16 }}
      title={p.title}
      extra={<Link to={`/projects/${p.id}`}>Case Study →</Link>}
    >
      <p style={{ minHeight: 48 }}>{p.summary}</p>
      <Space wrap>
        {p.tags?.map(t => <Tag key={t}>{t}</Tag>)}
      </Space>
      <div style={{ marginTop: 12 }}>
        {p.repo && (
          <Button icon={<GithubOutlined />} href={p.repo} target="_blank" style={{ marginRight: 8 }}>
            Code
          </Button>
        )}
        {p.report && (
          <Button icon={<BarChartOutlined />} href={p.report} target="_blank">
            Dashboard
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;

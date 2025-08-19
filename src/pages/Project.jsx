import { useParams } from "react-router-dom";
import projects from "../data/projects.json";
import { useHead } from "../hooks/useHead";

const Project = () => {
  const { id } = useParams();
  const p = projects.find(x => x.id === id);

  useHead({
    title: p ? `${p.title} — Portfolio` : "Project — Portfolio",
    description: p?.summary || "Project case study"
  });

  if (!p) return <div className="container">Not found</div>;
  return (
    <div className="container">
      <h2>{p.title}</h2>
      {/* rest of your content */}
    </div>
  );
};

export default Project;

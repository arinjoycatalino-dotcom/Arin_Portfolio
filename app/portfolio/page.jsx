import ProjectVisual from "@/components/ProjectVisual";
import { ArrowUpRight } from "@/components/Icons";
import { projects } from "@/data/projects";

export const metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <section className="page-section section-pad">
      <div className="page-intro">
        <p className="eyebrow plain"><span>01</span> Portfolio</p>
        <h1>My <em>Projects</em></h1>
        <p className="page-lede">Here are some sample academic and personal projects that show what I am learning in web development and design.</p>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-row" key={project.title}>
            <div className="project-row-copy">
              <span className="project-number">{project.number}</span>
              <div>
                <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <span className="project-arrow"><ArrowUpRight size={24} /></span>
            </div>
            <ProjectVisual type={project.type} label={`${project.title} project artwork`} />
          </article>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import ProjectVisual from "@/components/ProjectVisual";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <section className="hero section-pad">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Welcome to my portfolio</div>
          <h1>Hi, I&apos;m <em>Arin Catalino.</em></h1>
          <p className="hero-intro">
            I&apos;m a second-year BSIT student who enjoys learning web development, designing simple interfaces, and building useful projects.
          </p>
          <div className="hero-actions">
            <Link href="/portfolio" className="button button-primary">Explore my work <ArrowRight /></Link>
            <Link href="/about" className="button button-text">More about me <ArrowUpRight /></Link>
          </div>
        </div>

        <div className="hero-art" aria-label="Arin Catalino profile card">
          <div className="profile-card-media">
            <img
              src="/profile.png"
              alt="Arin E Catalino"
              className="profile-full-img profile-default-img"
            />
            <img
              src="/profile-hover.png"
              alt=""
              aria-hidden="true"
              className="profile-full-img profile-hover-img"
            />
          </div>
          <div className="profile-card-content">
            <h2>Arin E Catalino</h2>
            <p className="profile-subtitle">BSIT · 2nd Year</p>
            <div className="profile-tags"><span>Student</span><span>Web Developer</span></div>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Areas of interest">
        <div className="marquee-track">
          <span>Web Development</span><i>•</i><span>UI Design</span><i>•</i><span>Next.js</span><i>•</i><span>Problem Solving</span>
        </div>
      </section>

      <section className="featured section-pad">
        <div className="section-heading">
          <div><p className="eyebrow plain">Featured projects</p></div>
          <h2>Some projects I&apos;ve <em>worked on.</em></h2>
          <Link href="/portfolio" className="circle-link" aria-label="View all projects"><ArrowUpRight size={24} /></Link>
        </div>
        <div className="featured-grid">
          {projects.slice(0, 2).map((project) => (
            <article className="featured-card" key={project.title}>
              <ProjectVisual type={project.type} label={`${project.title} project preview`} />
              <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-about section-pad">
        <div className="home-about-copy">
          <p className="eyebrow plain">About me</p>
          <h2>I&apos;m learning and improving <em>one project at a time.</em></h2>
          <p>I enjoy turning classroom lessons into working projects. My goal is to keep developing my programming and design skills while creating websites that are clear and easy to use.</p>
          <Link href="/about" className="button button-light">Meet Arin <ArrowRight /></Link>
        </div>
        <div className="monogram-card">
          <span>A</span><span>C</span>
          <p>BSIT · 2ND YEAR</p>
        </div>
      </section>
    </>
  );
}

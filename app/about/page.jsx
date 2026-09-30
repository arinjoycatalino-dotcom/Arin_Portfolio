import Link from "next/link";
import { ArrowRight, Sparkle } from "@/components/Icons";

export const metadata = { title: "About" };

const skills = ["HTML & CSS", "JavaScript", "React / Next.js", "UI Design", "Prototyping", "Problem Solving"];

export default function AboutPage() {
  return (
    <section className="page-section section-pad about-page">
      <div className="page-intro about-intro">
        <p className="eyebrow plain"><span>02</span> Get to know me</p>
        <h1>About <em>Me</em></h1>
      </div>

      <div className="about-grid">
        <div className="portrait-card">
          <img src="/profile.png" alt="Arin E Catalino" className="portrait-img" />
          <div className="portrait-badge"><Sparkle /><span>Based in the<br />Philippines</span></div>
          <p>ARIN E CATALINO</p>
        </div>

        <div className="about-story">
          <p className="story-lead">Hello! I&apos;m Arin E Catalino, a second-year Bachelor of Science in Information Technology student.</p>
          <p>My interest in technology started with a simple curiosity: how do the apps and websites we use every day actually work? That question led me from exploring code to caring deeply about design, usability, and the small decisions that shape an experience.</p>
          <p>I&apos;m still early in my journey—and that excites me. Every project is a chance to learn a new tool, solve a different kind of problem, and build something better than the last.</p>
          <div className="signature">Arin</div>
        </div>
      </div>

      <div className="skills-section">
        <div className="skills-heading">
          <p className="eyebrow plain">What I work with</p>
          <h2>My <em>Skills</em></h2>
        </div>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-row" key={skill}><span>0{index + 1}</span><strong>{skill}</strong><i /></div>
          ))}
        </div>
      </div>

      <div className="about-cta">
        <p>Want to see what I&apos;ve been working on?</p>
        <Link href="/portfolio" className="button button-primary">View my projects <ArrowRight /></Link>
      </div>
    </section>
  );
}

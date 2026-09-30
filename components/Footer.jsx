import Link from "next/link";
import { ArrowUpRight } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-kicker">Let&apos;s build something meaningful.</p>
          <p className="footer-title">Have an idea? I&apos;d love to hear it.</p>
        </div>
        <a className="footer-email" href="mailto:arin.catalino@example.com">
          Send a message <ArrowUpRight />
        </a>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Arin E Catalino</p>
        <div className="footer-links">
          <Link href="/portfolio">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
      </div>
    </footer>
  );
}

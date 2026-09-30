import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Arin Catalino — Portfolio",
    template: "%s | Arin Catalino"
  },
  description:
    "The personal portfolio of Arin E Catalino, a second-year BSIT student creating thoughtful digital experiences."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

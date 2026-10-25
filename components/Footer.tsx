import Link from "next/link";
import { navLinks } from "../data/navigation";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} Nusantara Digital. Seluruh hak cipta dilindungi.</p>
        <ul className="footer-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

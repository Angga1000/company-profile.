import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ href, children, variant = "primary" }: ButtonProps) {
  return (
    <Link href={href} className={`btn btn-${variant}`}>
      {children}
    </Link>
  );
}

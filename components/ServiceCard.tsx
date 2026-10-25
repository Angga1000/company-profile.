import Link from "next/link";
import type { Service } from "../data/services";
import Media from "./Media";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card">
      <Media
        src={service.image}
        alt={service.title}
        ratio="16 / 9"
        sizes="(min-width: 960px) 25vw, (min-width: 640px) 50vw, 100vw"
      />
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <Link href={`/services/${service.slug}`} className="card-link">
        Lihat detail layanan
      </Link>
    </article>
  );
}
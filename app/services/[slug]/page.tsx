import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "../../../components/Button";
import Media from "../../../components/Media";
import PageHeader from "../../../components/PageHeader";
import { getServiceBySlug, services } from "../../../data/services";

type ServiceDetailProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServiceDetailProps): Metadata {
  const service = getServiceBySlug(params.slug);
  return { title: service ? service.title : "Layanan tidak ditemukan" };
}

export default function ServiceDetailPage({ params }: ServiceDetailProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader title={service.title} subtitle={service.summary} />
      <section className="section">
        <div className="container detail">
          <div className="prose">
            <Media
              src={service.image}
              alt={service.title}
              ratio="16 / 9"
              priority
              sizes="(min-width: 960px) 66vw, 100vw"
            />
            <h2>Tentang layanan ini</h2>
            <p>{service.description}</p>
            <h2>Yang Anda dapatkan</h2>
            <ul className="check-list">
              {service.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Link href="/services" className="card-link">
              Kembali ke daftar layanan
            </Link>
          </div>
          <aside className="card aside">
            <h3>Estimasi pengerjaan</h3>
            <p className="aside-value">{service.duration}</p>
            <p>Durasi final ditentukan setelah kami memahami kebutuhan Anda.</p>
            <Button href="/contact">Minta penawaran</Button>
          </aside>
        </div>
      </section>
    </>
  );
}
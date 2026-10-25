import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import ServiceCard from "../../components/ServiceCard";
import { services } from "../../data/services";

export const metadata: Metadata = {
  title: "Layanan",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Layanan"
        subtitle="Pilih layanan yang sesuai, atau gabungkan beberapa untuk satu proyek yang utuh."
      />
      <section className="section">
        <div className="container grid grid-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}

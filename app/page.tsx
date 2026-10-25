import Button from "../components/Button";
import Media from "../components/Media";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container split">
          <div>
            <h1>Produk digital yang dibangun sesuai cara kerja bisnis Anda</h1>
            <p>
              Nusantara Digital membantu perusahaan membuat website, aplikasi mobile, dan sistem
              internal yang mudah dipakai dan mudah dikembangkan.
            </p>
            <div className="actions">
              <Button href="/services">Lihat layanan</Button>
              <Button href="/contact" variant="secondary">
                Hubungi kami
              </Button>
            </div>
          </div>
          <Media
            src="/images/hero.webp"
            alt="Tim Nusantara Digital sedang berdiskusi"
            priority
            sizes="(min-width: 960px) 45vw, 100vw"
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Layanan kami</h2>
          <div className="grid grid-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container cta">
          <div>
            <h2>Punya ide yang ingin diwujudkan?</h2>
            <p>Ceritakan kebutuhan Anda, kami bantu rancang langkah pertamanya.</p>
          </div>
          <Button href="/contact">Mulai berdiskusi</Button>
        </div>
      </section>
    </>
  );
}
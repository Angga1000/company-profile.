import type { Metadata } from "next";
import Media from "../../components/Media";
import PageHeader from "../../components/PageHeader";
import TeamCard from "../../components/TeamCard";
import { team } from "../../data/team";

export const metadata: Metadata = {
  title: "Tentang Kami",
};

const values = [
  {
    title: "Jelas sejak awal",
    text: "Ruang lingkup, jadwal, dan biaya kami sepakati bersama sebelum pekerjaan dimulai.",
  },
  {
    title: "Mudah dirawat",
    text: "Kode dan dokumentasi kami susun rapi agar tim Anda bisa melanjutkan sendiri.",
  },
  {
    title: "Berpusat pada pengguna",
    text: "Setiap keputusan desain diuji pada orang yang akan memakai produknya.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Tentang Nusantara Digital"
        subtitle="Studio perangkat lunak yang berdiri sejak 2018 dan bekerja bersama puluhan usaha di Indonesia."
      />

      <section className="section">
        <div className="container split">
          <div className="prose">
            <h2>Cerita kami</h2>
            <p>
              Kami memulai dari tim kecil yang membantu usaha lokal membuat toko online pertamanya.
              Seiring waktu, kebutuhan klien berkembang menjadi aplikasi mobile, sistem internal, dan
              infrastruktur cloud, dan tim kami tumbuh mengikutinya.
            </p>
            <p>
              Hari ini kami bekerja dengan perusahaan dari berbagai bidang, dengan satu prinsip yang
              sama: produk digital harus menyelesaikan masalah nyata, bukan sekadar terlihat baik.
            </p>
          </div>
          <Media
            src="/images/about.webp"
            alt="Suasana kantor Nusantara Digital"
            sizes="(min-width: 960px) 45vw, 100vw"
          />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Cara kami bekerja</h2>
          <div className="grid grid-3">
            {values.map((value) => (
              <article key={value.title} className="card">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Tim kami</h2>
          <div className="grid grid-4">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
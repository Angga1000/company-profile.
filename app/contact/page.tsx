import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";

export const metadata: Metadata = {
  title: "Kontak",
};

const contacts = [
  { label: "Alamat", value: "Jl. Letjen S. Parman No. 1, Grogol, Jakarta Barat" },
  { label: "Email", value: "halo@nusantaradigital.id" },
  { label: "Telepon", value: "081717794014" },
  { label: "Jam kerja", value: "Senin - Jumat, 09.00 - 17.00 WIB" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Kontak"
        subtitle="Hubungi kami lewat salah satu jalur berikut. Kami membalas dalam satu hari kerja."
      />
      <section className="section">
        <div className="container grid grid-2">
          {contacts.map((contact) => (
            <article key={contact.label} className="card">
              <h3>{contact.label}</h3>
              <p>{contact.value}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

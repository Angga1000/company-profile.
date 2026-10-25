import Button from "../components/Button";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container not-found">
        <h1>Halaman tidak ditemukan</h1>
        <p>Alamat yang Anda buka tidak tersedia atau sudah dipindahkan.</p>
        <Button href="/">Kembali ke beranda</Button>
      </div>
    </section>
  );
}

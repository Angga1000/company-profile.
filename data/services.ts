export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  duration: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "pengembangan-website",
    title: "Pengembangan Website",
    summary: "Website company profile, toko online, dan sistem informasi yang cepat dan mudah dikelola.",
    description:
      "Kami membangun website dari kebutuhan bisnis Anda, mulai dari perencanaan struktur halaman sampai peluncuran. Setiap website dibuat responsif dan siap diakses dari ponsel maupun komputer.",
    features: [
      "Desain responsif untuk semua ukuran layar",
      "Struktur halaman yang ramah mesin pencari",
      "Panel pengelolaan konten yang mudah dipakai",
      "Pendampingan setelah website diluncurkan",
    ],
    duration: "4 - 8 minggu",
    image: "/images/services/pengembangan-website.webp",
  },
  {
    slug: "aplikasi-mobile",
    title: "Aplikasi Mobile",
    summary: "Aplikasi Android dan iOS untuk layanan pelanggan, operasional, atau penjualan.",
    description:
      "Tim kami merancang aplikasi mobile yang ringan dan nyaman dipakai sehari-hari. Kami membantu dari rancangan alur pengguna sampai aplikasi tayang di toko aplikasi.",
    features: [
      "Satu basis kode untuk Android dan iOS",
      "Notifikasi dan pembayaran terintegrasi",
      "Pengujian pada berbagai perangkat",
      "Bantuan publikasi ke Play Store dan App Store",
    ],
    duration: "8 - 14 minggu",
    image: "/images/services/aplikasi-mobile.webp",
  },
  {
    slug: "desain-ui-ux",
    title: "Desain UI/UX",
    summary: "Riset pengguna dan desain antarmuka agar produk digital Anda mudah dipahami.",
    description:
      "Kami memulai dari memahami siapa penggunanya dan apa yang ingin mereka selesaikan. Hasilnya berupa prototipe yang bisa langsung diuji sebelum masuk tahap pengembangan.",
    features: [
      "Wawancara dan observasi pengguna",
      "Wireframe dan prototipe interaktif",
      "Panduan gaya visual yang konsisten",
      "Uji kegunaan bersama calon pengguna",
    ],
    duration: "2 - 5 minggu",
    image: "/images/services/desain-ui-ux.webp",
  },
  {
    slug: "konsultasi-cloud",
    title: "Konsultasi Cloud",
    summary: "Perencanaan infrastruktur cloud yang aman, hemat biaya, dan mudah dikembangkan.",
    description:
      "Kami membantu memilih arsitektur dan layanan cloud yang sesuai dengan skala bisnis Anda, lalu mendampingi proses migrasi agar layanan tetap berjalan.",
    features: [
      "Audit infrastruktur yang sedang berjalan",
      "Rencana migrasi bertahap",
      "Pemantauan dan pencadangan otomatis",
      "Optimasi biaya bulanan",
    ],
    duration: "2 - 6 minggu",
    image: "/images/services/konsultasi-cloud.webp",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
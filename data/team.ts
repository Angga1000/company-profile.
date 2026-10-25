export type Member = {
  name: string;
  role: string;
  photo: string;
};

export const team: Member[] = [
  { name: "Yor Forger", role: "Direktur Utama", photo: "/images/team/yor.webp" },
  { name: "Hinata Hyuga", role: "Kepala Teknologi", photo: "/images/team/hinata.webp" },
  { name: "Zero Two", role: "Desainer Produk", photo: "/images/team/zero-two.webp" },
  { name: "Mikasa Ackerman", role: "Insinyur Frontend", photo: "/images/team/mikasa.webp" },
];
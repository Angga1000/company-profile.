import Image from "next/image";

type MediaProps = {
  src: string;
  alt: string;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
};

export default function Media({
  src,
  alt,
  ratio = "4 / 3",
  sizes = "100vw",
  priority = false,
}: MediaProps) {
  return (
    <div className="media" style={{ aspectRatio: ratio }}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
    </div>
  );
}
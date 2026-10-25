import Image from "next/image";
import type { Member } from "../data/team";

export default function TeamCard({ member }: { member: Member }) {
  return (
    <article className="card team-card">
      <Image
        src={member.photo}
        alt={member.name}
        width={192}
        height={192}
        className="avatar-photo"
      />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </article>
  );
}
"use client";
import Image from "next/image";
import urlFor from "../../../lib/sanity.urlfor";

export default function CardImage({ image, title }: { image: any; title: string }) {
  return (
    <Image
      className="object-cover object-centre lg:object-left"
      src={urlFor(image).url()}
      alt={title}
      fill
    />
  );
}

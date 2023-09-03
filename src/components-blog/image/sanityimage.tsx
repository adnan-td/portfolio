"use client";

import Image from "next/image";
import urlFor from "../../../lib/sanity.urlfor";

export default function SanityImage({
  className,
  src,
  alt,
}: {
  className?: string;
  src: any;
  alt: string;
}) {
  return <Image fill src={urlFor(src).url()} alt={alt} className={className} />;
}

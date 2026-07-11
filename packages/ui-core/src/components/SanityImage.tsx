import Image, { type ImageProps } from "next/image";
import { cn } from "../lib/cn";

export interface SanityImageProps
  extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * Thin next/image wrapper. Callers resolve the Sanity asset to a URL
 * (via @sanity/image-url) before passing it in — ui-core stays free of
 * any Sanity client/project config.
 */
export function SanityImage({
  src,
  alt,
  width = 1600,
  height = 900,
  className,
  ...rest
}: SanityImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("h-auto w-full", className)}
      {...rest}
    />
  );
}

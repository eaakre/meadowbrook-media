import Image, { type ImageProps } from "next/image";
import { cn } from "../lib/cn";

export interface SanityImageProps
  extends Omit<ImageProps, "src" | "alt" | "width" | "height" | "fill"> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
}

/**
 * Thin next/image wrapper. Callers resolve the Sanity asset to a URL
 * (via @sanity/image-url) before passing it in — ui-core stays free of
 * any Sanity client/project config.
 *
 * Pass `fill` for a background-style image (e.g. a full-bleed hero) —
 * next/image errors if width/height are set alongside fill, so those
 * defaults are skipped in that mode.
 */
export function SanityImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  ...rest
}: SanityImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover", className)}
        {...rest}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 1600}
      height={height ?? 900}
      className={cn("h-auto w-full", className)}
      {...rest}
    />
  );
}

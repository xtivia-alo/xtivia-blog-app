import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBannerSkeleton } from "./TypeBanner";
import type { TypeBannerCarouselSkeleton } from "./TypeBannerCarousel";
import type { TypeFooterSkeleton } from "./TypeFooter";
import type { TypeFormSkeleton } from "./TypeForm";
import type { TypeGallerySkeleton } from "./TypeGallery";
import type { TypeHeaderSkeleton } from "./TypeHeader";
import type { TypeHeroImageSkeleton } from "./TypeHeroImage";
import type { TypeSeoSkeleton } from "./TypeSeo";
import type { TypeSetOfCardSkeleton } from "./TypeSetOfCard";
import type { TypeSetOfTestimonialsSkeleton } from "./TypeSetOfTestimonials";

export interface TypePageLandingFields {
    name?: EntryFieldTypes.Symbol;
    pageTitle: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    seo?: EntryFieldTypes.EntryLink<TypeSeoSkeleton>;
    sections: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBannerCarouselSkeleton | TypeBannerSkeleton | TypeFooterSkeleton | TypeFormSkeleton | TypeGallerySkeleton | TypeHeaderSkeleton | TypeHeroImageSkeleton | TypeSetOfCardSkeleton | TypeSetOfTestimonialsSkeleton>>;
}

export type TypePageLandingSkeleton = EntrySkeletonType<TypePageLandingFields, "pageLanding">;
export type TypePageLanding<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageLandingSkeleton, Modifiers, Locales>;

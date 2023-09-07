import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBannerSkeleton } from "./TypeBanner";

export interface TypeBannerCarouselFields {
    internalName: EntryFieldTypes.Symbol;
    banners: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBannerSkeleton>>;
}

export type TypeBannerCarouselSkeleton = EntrySkeletonType<TypeBannerCarouselFields, "bannerCarousel">;
export type TypeBannerCarousel<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBannerCarouselSkeleton, Modifiers, Locales>;

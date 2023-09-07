import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImageWithFocalPointSkeleton } from "./TypeImageWithFocalPoint";
import type { TypeLinkSkeleton } from "./TypeLink";

export interface TypeBannerFields {
    internalName: EntryFieldTypes.Symbol;
    headline: EntryFieldTypes.Symbol;
    headlineSize: EntryFieldTypes.Symbol<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
    subText?: EntryFieldTypes.RichText;
    sectionAlignment: EntryFieldTypes.Symbol<"Center" | "Left" | "Right">;
    textAlignment?: EntryFieldTypes.Symbol<"Center" | "Left" | "Right">;
    textColor?: EntryFieldTypes.Object;
    increaseVerticalPadding?: EntryFieldTypes.Symbol<"x1.5" | "x2" | "x3" | "x4" | "x5">;
    backgroundImage?: EntryFieldTypes.EntryLink<TypeImageWithFocalPointSkeleton>;
    backgroundColor?: EntryFieldTypes.Object;
    actions?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
    darkenImage?: EntryFieldTypes.Boolean;
    contentMaxWidth?: EntryFieldTypes.Integer;
    maxWidth: EntryFieldTypes.Integer;
    animateList?: EntryFieldTypes.Boolean;
}

export type TypeBannerSkeleton = EntrySkeletonType<TypeBannerFields, "banner">;
export type TypeBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBannerSkeleton, Modifiers, Locales>;

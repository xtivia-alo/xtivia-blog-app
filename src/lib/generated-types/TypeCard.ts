import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeIconSkeleton } from "./TypeIcon";
import type { TypeImageWithFocalPointSkeleton } from "./TypeImageWithFocalPoint";

export interface TypeCardFields {
    internalName: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    titleSize: EntryFieldTypes.Symbol<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
    subText: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.EntryLink<TypeImageWithFocalPointSkeleton>;
    materialDesignIcon?: EntryFieldTypes.EntryLink<TypeIconSkeleton>;
    customIcon?: EntryFieldTypes.AssetLink;
    iconSize: EntryFieldTypes.Symbol<"lg" | "md" | "sm" | "xl" | "xxl" | "xxxl">;
    iconColor?: EntryFieldTypes.Object;
    imagePosition?: EntryFieldTypes.Symbol<"Bottom" | "Left" | "Right" | "Top">;
}

export type TypeCardSkeleton = EntrySkeletonType<TypeCardFields, "card">;
export type TypeCard<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCardSkeleton, Modifiers, Locales>;

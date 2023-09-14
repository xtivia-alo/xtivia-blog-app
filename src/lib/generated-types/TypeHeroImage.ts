import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImageWithFocalPointSkeleton } from "./TypeImageWithFocalPoint";
import type { TypeLinkSkeleton } from "./TypeLink";

export interface TypeHeroImageFields {
    internalName?: EntryFieldTypes.Symbol;
    headline: EntryFieldTypes.RichText;
    sectionAlignment?: EntryFieldTypes.Symbol<"Center" | "Left" | "Right">;
    textAlignment?: EntryFieldTypes.Symbol<"Center" | "Left" | "Right">;
    textColor?: EntryFieldTypes.Object;
    image: EntryFieldTypes.EntryLink<TypeImageWithFocalPointSkeleton>;
    darkenImage?: EntryFieldTypes.Boolean;
    actions?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
    actionAlignment: EntryFieldTypes.Symbol<"Horizontal" | "Vertical">;
    contentMaxWidth?: EntryFieldTypes.Integer;
    maxWidth: EntryFieldTypes.Integer;
}

export type TypeHeroImageSkeleton = EntrySkeletonType<TypeHeroImageFields, "heroImage">;
export type TypeHeroImage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHeroImageSkeleton, Modifiers, Locales>;

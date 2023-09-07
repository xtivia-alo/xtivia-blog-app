import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImageWithFocalPointSkeleton } from "./TypeImageWithFocalPoint";
import type { TypeLinkSkeleton } from "./TypeLink";

export interface TypeCallToActionFields {
    internalName: EntryFieldTypes.Symbol;
    headline: EntryFieldTypes.Symbol;
    headlineSize: EntryFieldTypes.Symbol<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
    headlineAlignment: EntryFieldTypes.Symbol<"Center" | "Left" | "Right">;
    subText: EntryFieldTypes.RichText;
    subTextAlignment: EntryFieldTypes.Symbol<"Center" | "Left" | "Right">;
    actions?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
    actionAlignment?: EntryFieldTypes.Symbol<"Horizontal" | "Vertical">;
    image: EntryFieldTypes.EntryLink<TypeImageWithFocalPointSkeleton>;
    imageAlignment: EntryFieldTypes.Symbol<"Background" | "Bottom" | "Left" | "Right" | "Top">;
    mobileImageAlignment?: EntryFieldTypes.Symbol<"Bottom" | "Top">;
    contentAlignment?: EntryFieldTypes.Symbol<"Center" | "Left" | "Right">;
    contentMaxWidth?: EntryFieldTypes.Integer;
    maxWidth: EntryFieldTypes.Integer;
}

export type TypeCallToActionSkeleton = EntrySkeletonType<TypeCallToActionFields, "callToAction">;
export type TypeCallToAction<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCallToActionSkeleton, Modifiers, Locales>;

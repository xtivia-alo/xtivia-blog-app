import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCardSkeleton } from "./TypeCard";
import type { TypeImageWithFocalPointSkeleton } from "./TypeImageWithFocalPoint";
import type { TypeNavigationItemSkeleton } from "./TypeNavigationItem";

export interface TypeFooterFields {
    internalName: EntryFieldTypes.Symbol;
    logo?: EntryFieldTypes.EntryLink<TypeImageWithFocalPointSkeleton>;
    content?: EntryFieldTypes.RichText;
    maxWidth?: EntryFieldTypes.Integer;
    navigation?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationItemSkeleton>>;
    contactInfo?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardSkeleton>>;
}

export type TypeFooterSkeleton = EntrySkeletonType<TypeFooterFields, "footer">;
export type TypeFooter<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeFooterSkeleton, Modifiers, Locales>;

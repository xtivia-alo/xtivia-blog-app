import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNavigationItemFields {
    internalName?: EntryFieldTypes.Symbol;
    label?: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    children?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationItemSkeleton>>;
}

export type TypeNavigationItemSkeleton = EntrySkeletonType<TypeNavigationItemFields, "navigationItem">;
export type TypeNavigationItem<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeNavigationItemSkeleton, Modifiers, Locales>;

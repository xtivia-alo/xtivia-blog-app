import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNavigationItemSkeleton } from "./TypeNavigationItem";

export interface TypeNavigationMenuFields {
    internalName?: EntryFieldTypes.Symbol;
    navigationItems?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationItemSkeleton>>;
}

export type TypeNavigationMenuSkeleton = EntrySkeletonType<TypeNavigationMenuFields, "navigationMenu">;
export type TypeNavigationMenu<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeNavigationMenuSkeleton, Modifiers, Locales>;

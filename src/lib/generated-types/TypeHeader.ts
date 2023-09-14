import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCardSkeleton } from "./TypeCard";
import type { TypeImageWithFocalPointSkeleton } from "./TypeImageWithFocalPoint";
import type { TypeLinkSkeleton } from "./TypeLink";
import type { TypeNavigationMenuSkeleton } from "./TypeNavigationMenu";

export interface TypeHeaderFields {
    internalName: EntryFieldTypes.Symbol;
    logo: EntryFieldTypes.EntryLink<TypeImageWithFocalPointSkeleton>;
    logoSuffix?: EntryFieldTypes.Symbol;
    setOfCards?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardSkeleton>>;
    navigationMenu?: EntryFieldTypes.EntryLink<TypeNavigationMenuSkeleton>;
    actions?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
    contentMaxWidth: EntryFieldTypes.Integer;
    maxWidth: EntryFieldTypes.Integer;
}

export type TypeHeaderSkeleton = EntrySkeletonType<TypeHeaderFields, "header">;
export type TypeHeader<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHeaderSkeleton, Modifiers, Locales>;

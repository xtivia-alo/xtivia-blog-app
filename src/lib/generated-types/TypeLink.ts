import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeIconSkeleton } from "./TypeIcon";

export interface TypeLinkFields {
    internalName: EntryFieldTypes.Symbol;
    label: EntryFieldTypes.Symbol;
    href?: EntryFieldTypes.Symbol;
    target?: EntryFieldTypes.Symbol<"_blank" | "_self">;
    isExternal?: EntryFieldTypes.Boolean;
    displayStyle?: EntryFieldTypes.Symbol<"Button" | "Link">;
    materialDesignIcon?: EntryFieldTypes.EntryLink<TypeIconSkeleton>;
    theme?: EntryFieldTypes.Symbol<"image" | "primary" | "secondary">;
    buttonImage?: EntryFieldTypes.AssetLink;
}

export type TypeLinkSkeleton = EntrySkeletonType<TypeLinkFields, "link">;
export type TypeLink<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeLinkSkeleton, Modifiers, Locales>;

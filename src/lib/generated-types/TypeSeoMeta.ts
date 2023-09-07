import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSeoMetaFields {
    internalName: EntryFieldTypes.Symbol;
    key: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.Symbol;
}

export type TypeSeoMetaSkeleton = EntrySkeletonType<TypeSeoMetaFields, "seoMeta">;
export type TypeSeoMeta<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSeoMetaSkeleton, Modifiers, Locales>;

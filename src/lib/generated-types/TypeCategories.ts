import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCategoriesFields {
    listOfCategories: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    internalName: EntryFieldTypes.Symbol;
}

export type TypeCategoriesSkeleton = EntrySkeletonType<TypeCategoriesFields, "categories">;
export type TypeCategories<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCategoriesSkeleton, Modifiers, Locales>;

import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCategoriesSkeleton } from "./TypeCategories";
import type { TypeImageWithFocalPointSkeleton } from "./TypeImageWithFocalPoint";

export interface TypeBlogFields {
    internalName: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    titleSize: EntryFieldTypes.Symbol<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
    textAlignment: EntryFieldTypes.Symbol<"Center" | "Justify" | "Left" | "Right">;
    subText: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.EntryLink<TypeImageWithFocalPointSkeleton>;
    imagePosition?: EntryFieldTypes.Symbol<"Bottom" | "Left" | "Right" | "Top">;
    category: EntryFieldTypes.EntryLink<TypeCategoriesSkeleton>;
}

export type TypeBlogSkeleton = EntrySkeletonType<TypeBlogFields, "blog">;
export type TypeBlog<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBlogSkeleton, Modifiers, Locales>;

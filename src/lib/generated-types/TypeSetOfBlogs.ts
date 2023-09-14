import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBannerSkeleton } from "./TypeBanner";

export interface TypeSetOfBlogsFields {
    internalName: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    titleSize?: EntryFieldTypes.Symbol<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
    blogs: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBannerSkeleton>>;
}

export type TypeSetOfBlogsSkeleton = EntrySkeletonType<TypeSetOfBlogsFields, "setOfBlogs">;
export type TypeSetOfBlogs<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSetOfBlogsSkeleton, Modifiers, Locales>;

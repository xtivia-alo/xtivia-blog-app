import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImageWithFocalPointSkeleton } from "./TypeImageWithFocalPoint";

export interface TypeGalleryFields {
    internalName: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    titleSize: EntryFieldTypes.Symbol<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
    images: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeImageWithFocalPointSkeleton>>;
    maxWidth: EntryFieldTypes.Integer;
}

export type TypeGallerySkeleton = EntrySkeletonType<TypeGalleryFields, "gallery">;
export type TypeGallery<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeGallerySkeleton, Modifiers, Locales>;

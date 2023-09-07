import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeFormFields {
    internalName: EntryFieldTypes.Symbol;
    headline: EntryFieldTypes.Symbol;
    headlineSize: EntryFieldTypes.Symbol<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
    subText?: EntryFieldTypes.RichText;
    textAlignment?: EntryFieldTypes.Symbol<"Center" | "Left" | "Right">;
    backgroundColor?: EntryFieldTypes.Object;
    textColor?: EntryFieldTypes.Object;
    maxWidth: EntryFieldTypes.Integer;
}

export type TypeFormSkeleton = EntrySkeletonType<TypeFormFields, "form">;
export type TypeForm<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeFormSkeleton, Modifiers, Locales>;

import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTestimonialSkeleton } from "./TypeTestimonial";

export interface TypeSetOfTestimonialsFields {
    internalName?: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    titleSize?: EntryFieldTypes.Symbol<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
    subText?: EntryFieldTypes.Symbol;
    testimonials?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTestimonialSkeleton>>;
    maxWidth?: EntryFieldTypes.Integer;
}

export type TypeSetOfTestimonialsSkeleton = EntrySkeletonType<TypeSetOfTestimonialsFields, "setOfTestimonials">;
export type TypeSetOfTestimonials<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSetOfTestimonialsSkeleton, Modifiers, Locales>;

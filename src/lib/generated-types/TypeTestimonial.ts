import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImageWithFocalPointSkeleton } from "./TypeImageWithFocalPoint";

export interface TypeTestimonialFields {
    internalName: EntryFieldTypes.Symbol;
    name: EntryFieldTypes.Symbol;
    profileImage?: EntryFieldTypes.EntryLink<TypeImageWithFocalPointSkeleton>;
    title: EntryFieldTypes.Symbol;
    testimonial: EntryFieldTypes.RichText;
    product?: EntryFieldTypes.Symbol;
}

export type TypeTestimonialSkeleton = EntrySkeletonType<TypeTestimonialFields, "testimonial">;
export type TypeTestimonial<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeTestimonialSkeleton, Modifiers, Locales>;

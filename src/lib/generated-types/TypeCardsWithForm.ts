import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeMarketoFormSkeleton } from "./TypeMarketoForm";
import type { TypeSetOfCardSkeleton } from "./TypeSetOfCard";

export interface TypeCardsWithFormFields {
    internalName?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    titleSize: EntryFieldTypes.Symbol<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
    cards: EntryFieldTypes.EntryLink<TypeSetOfCardSkeleton>;
    form?: EntryFieldTypes.EntryLink<TypeMarketoFormSkeleton>;
    mobileOrder: EntryFieldTypes.Symbol<"Cards" | "Form">;
    maxWidth: EntryFieldTypes.Integer;
}

export type TypeCardsWithFormSkeleton = EntrySkeletonType<TypeCardsWithFormFields, "cardsWithForm">;
export type TypeCardsWithForm<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCardsWithFormSkeleton, Modifiers, Locales>;

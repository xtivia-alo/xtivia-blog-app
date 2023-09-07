import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCardSkeleton } from "./TypeCard";

export interface TypeSetOfCardFields {
    internalName: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    titleSize?: EntryFieldTypes.Symbol<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
    subText?: EntryFieldTypes.RichText;
    cards: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardSkeleton>>;
    cardDisplayStyle: EntryFieldTypes.Symbol<"Horizontal" | "Vertical">;
    cardsInARow?: EntryFieldTypes.Integer;
    maxWidth?: EntryFieldTypes.Integer;
}

export type TypeSetOfCardSkeleton = EntrySkeletonType<TypeSetOfCardFields, "setOfCard">;
export type TypeSetOfCard<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSetOfCardSkeleton, Modifiers, Locales>;

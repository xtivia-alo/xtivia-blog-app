import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFormSkeleton } from "./TypeForm";

export interface TypeMarketoFormFields {
    formName: EntryFieldTypes.Symbol;
    form: EntryFieldTypes.EntryLink<TypeFormSkeleton>;
    formId?: EntryFieldTypes.Symbol;
}

export type TypeMarketoFormSkeleton = EntrySkeletonType<TypeMarketoFormFields, "marketoForm">;
export type TypeMarketoForm<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeMarketoFormSkeleton, Modifiers, Locales>;

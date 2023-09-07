import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeOptinMonsterFields {
    name: EntryFieldTypes.Symbol;
    id: EntryFieldTypes.Symbol;
}

export type TypeOptinMonsterSkeleton = EntrySkeletonType<TypeOptinMonsterFields, "optinMonster">;
export type TypeOptinMonster<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeOptinMonsterSkeleton, Modifiers, Locales>;

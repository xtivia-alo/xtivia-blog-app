import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImageWithFocalPointSkeleton } from "./TypeImageWithFocalPoint";
import type { TypeSeoMetaSkeleton } from "./TypeSeoMeta";

export interface TypeSeoFields {
    name: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    keywords?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    no_index?: EntryFieldTypes.Boolean;
    no_follow?: EntryFieldTypes.Boolean;
    image?: EntryFieldTypes.EntryLink<TypeImageWithFocalPointSkeleton>;
    openGraphType?: EntryFieldTypes.Symbol;
    openGraphSiteName?: EntryFieldTypes.Symbol;
    additionalMetas?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSeoMetaSkeleton>>;
    structuredData?: EntryFieldTypes.Object;
}

export type TypeSeoSkeleton = EntrySkeletonType<TypeSeoFields, "seo">;
export type TypeSeo<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSeoSkeleton, Modifiers, Locales>;

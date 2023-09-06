import { Entry, EntrySkeletonType } from 'contentful';
import Sections from './sections';

export default function LandingPage({
  preview,
  page,
}: {
  preview: boolean;
  page: Entry<EntrySkeletonType, undefined, string> | undefined;
}) {
  const sections = page?.fields.sections;

  return <Sections sections={sections} />;
}

import Section from './section';

export default function Sections({ sections }) {
  return sections.map((section, idx) => {
    return (
      <Section
        sectionType={section.sys.contentType.sys.id}
        section={section}
        key={section.sys.id}
        ArrayKey={idx}
        sys={section.sys}
      />
    );
  });
}

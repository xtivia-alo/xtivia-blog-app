import CtfBannerCarousel from './contentTypes/CtfBannerCarousel';
import CtfHeader from './contentTypes/CtfHeader';
import CtfSetOfCard from './contentTypes/CtfSetOfCard';

export default function Section({ sectionType, section, ArrayKey, sys }) {
  const renderSection = () => {
    switch (sectionType) {
      case 'header':
        return <CtfHeader entry={section.fields} />;
      case 'bannerCarousel':
        return <CtfBannerCarousel entry={section.fields} />;
      case 'setOfCard':
        return <CtfSetOfCard entry={section.fields} />;
      default:
        console.log('Section type not found: ' + sectionType);
        return <div data-content-type='not-found'>Illegal Section Type</div>;
    }
  };

  return <section>{renderSection()}</section>;
}

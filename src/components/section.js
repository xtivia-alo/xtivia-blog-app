import CtfBanner from './contentTypes/CtfBanner';
import CtfBannerCarousel from './contentTypes/CtfBannerCarousel';
import CtfHeader from './contentTypes/CtfHeader';
import CtfSetOfCard from './contentTypes/CtfSetOfCard';
import CtfSetofTestimonials from './contentTypes/CtfSetofTestimonials';
import CtfFooter from './contentTypes/CtfFooter';

export default function Section({ sectionType, section, ArrayKey, sys }) {
  const renderSection = () => {
    switch (sectionType) {
      case 'header':
        return <CtfHeader entry={section.fields} />;
      case 'bannerCarousel':
        return <CtfBannerCarousel entry={section.fields} />;
      case 'setOfCard':
        return <CtfSetOfCard entry={section.fields} />;
      case 'banner':
        return <CtfBanner entry={section.fields} />;
      case 'setOfTestimonials':
        return <CtfSetofTestimonials entry={section.fields} />;
      case 'footer':
        return <CtfFooter entry={section.fields} />;
      default:
        console.log('Section type not found: ' + sectionType);
        return <div data-content-type='not-found'>Illegal Section Type</div>;
    }
  };

  return <section>{renderSection()}</section>;
}

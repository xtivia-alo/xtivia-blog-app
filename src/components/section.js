import CtfBannerCarousel from './contentTypes/CtfBannerCarousel';
import CtfHeader from './contentTypes/CtfHeader';

export default function Section({ sectionType, section, ArrayKey, sys }) {
  const renderSection = () => {
    switch (sectionType) {
      case 'header':
        return <CtfHeader entry={section.fields} />;
      case 'bannerCarousel':
        return <CtfBannerCarousel entry={section.fields} />;
      default:
        console.log('Section type not found: ' + sectionType);
        return <div data-content-type='not-found'>Illegal Section Type</div>;
    }
  };

  return <section className=''>{renderSection()}</section>;
}

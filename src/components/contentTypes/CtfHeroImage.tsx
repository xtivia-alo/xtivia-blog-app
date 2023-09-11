import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';

export default function CtfHeroImage({
  entry,
  idx,
  currentIndex,
}: {
  entry: { [key: string]: any };
  idx: number;
  currentIndex: number;
}) {
  const {
    headline,
    headlineSize,
    subText,
    sectionAlignment,
    textAlignment,
    textColor,
    image,
    actions,
    actionAlignment,
    contentMaxWidth,
    maxWidth,
  } = entry;

  const HeaderTag = headlineSize as any;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className=''>{children}</p>
      ),
    },
  };

  return (
    <>
      <div
        style={{
          maxWidth: ` ${maxWidth}px`,
          backgroundImage: `url(https:${
            (image as any).fields.image.fields.file.url
          })`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
        }}
        className={`px-4 lg:px-0 h-full w-full ${
          idx !== currentIndex && 'hidden'
        }`}
      >
        <div
          style={{ maxWidth: `${contentMaxWidth}px`, color: textColor.value }}
          className='h-full flex flex-col items-left justify-center gap-4 m-auto'
        >
          <HeaderTag>{headline}</HeaderTag>
          {documentToReactComponents(subText, options)}
          <div
            className={`flex ${
              actionAlignment === 'Horizontal'
                ? 'flex-row gap-4'
                : 'flex-col gap-2'
            }`}
          >
            {actions.map((ele: any, idx: any) => {
              const { label, href, target, isExternal, displayStyle, theme } =
                ele.fields;

              const handleClick = () => {
                location.href = href ? href : '/';
              };

              return (
                <div key={idx}>
                  {displayStyle === 'Link' ? (
                    <Link
                      className={
                        theme === 'primary'
                          ? 'primary-btn'
                          : theme === 'secondary'
                          ? 'secondary-btn'
                          : theme === 'tertiary'
                          ? 'tertiary-btn'
                          : 'image-btn'
                      }
                      href={href ? href : '/'}
                    >
                      {label}
                    </Link>
                  ) : (
                    <button
                      className={
                        theme === 'primary'
                          ? 'primary-btn'
                          : theme === 'secondary'
                          ? 'secondary-btn'
                          : theme === 'tertiary'
                          ? 'tertiary-btn'
                          : 'image-btn'
                      }
                      onClick={handleClick}
                    >
                      {label}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

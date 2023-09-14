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
    subText,
    textColor,
    image,
    darkenImage,
    actions,
    actionAlignment,
    contentMaxWidth,
    maxWidth,
  } = entry;

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: any, children: any) => {
        return (
          <>
            {children !== '' && (
              <h1 className='whitespace-pre-line text-center md:text-left'>
                {children}
              </h1>
            )}
          </>
        );
      },
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        return (
          <>
            {children !== '' && (
              <p className='mt-3 leading-relaxed whitespace-pre-line text-p-big md:text-p-big-md xl:text-p-big-lg '>
                {children}
              </p>
            )}
          </>
        );
      },
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
          backgroundSize: 'cover',
        }}
        className={`relative h-full w-full bg-center pb-16 pt-16 md:pb-40 md:pt-32 lg:pb-60 lg:pt-32 ${
          idx !== currentIndex && 'hidden'
        } ${darkenImage && 'brightness-75'}`}
      >
        <div
          style={{ maxWidth: `${contentMaxWidth}px`, color: textColor.value }}
          className='h-full flex flex-col items-left justify-center m-auto'
        >
          <div className='m-auto px-4 md:pr-96 lg:pr-4 lg:ml-[8.3333%] 2xl:ml-0'>
            {documentToReactComponents(headline, options)}
            {documentToReactComponents(subText, options)}
            <div
              className={`flex ${
                actionAlignment === 'Horizontal'
                  ? 'flex-row gap-4 justify-center md:justify-start'
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
                  <div className='mt-5' key={idx}>
                    {displayStyle === 'Link' ? (
                      <Link
                        className={`min-w-[160px]
                          ${
                            theme === 'primary'
                              ? 'primary-btn'
                              : theme === 'secondary'
                              ? 'secondary-btn'
                              : theme === 'tertiary'
                              ? 'tertiary-btn'
                              : 'image-btn'
                          }`}
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
        {/* white overlay over hero on mobile */}
        <div className='absolute inset-0 bg-white opacity-40 lg:opacity-0'></div>
      </div>
    </>
  );
}

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';

export default function CtfBanner({
  entry,
}: {
  entry: { [key: string]: any };
}) {
  const {
    headline,
    headlineSize,
    subText,
    textColor,
    textAlignment,
    backgroundImage,
    darkenImage,
    actions,
    contentMaxWidth,
    maxWidth,
  } = entry;

  const HeaderTag = headlineSize as any;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        return (
          <>
            {children !== '' && (
              <p
                className={`leading-relaxed ${
                  textAlignment === 'left'
                    ? 'text-left'
                    : textAlignment === 'right'
                    ? 'text-right'
                    : textAlignment === 'Center'
                    ? 'text-center'
                    : 'text-left'
                } lg:text-left text-p-big md:text-p-big-md xl:text-p-big-lg`}
              >
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
            (backgroundImage as any).fields.image.fields.file.url
          })`,
          backgroundSize: 'cover',
        }}
        className={`text-center px-8 py-20 lg:px-0 h-full w-full ${
          darkenImage && 'brightness-75'
        }`}
      >
        <div
          style={{ maxWidth: `${contentMaxWidth}px`, color: textColor.value }}
          className='h-full flex flex-col lg:flex-row lg:items-center justify-center m-auto'
        >
          <HeaderTag>{headline}</HeaderTag>
          <div className='flex flex-row justify-center'>
            <hr className='w-[46px] lg:w-0 lg:h-[46px] mt-4 lg:mt-0 lg:ml-9 lg:mr-6 lg:border-l border-white'></hr>
          </div>
          {documentToReactComponents(subText, options)}
          <div className='flex flex-row gap-4 justify-center'>
            {actions.map((ele: any, idx: any) => {
              const { label, href, target, isExternal, displayStyle, theme } =
                ele.fields;

              const handleClick = () => {
                location.href = href ? href : '/';
              };

              return (
                <div className='ml-4' key={idx}>
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

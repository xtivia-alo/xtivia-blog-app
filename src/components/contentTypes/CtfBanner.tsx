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
    backgroundImage,
    darkenImage,
    actions,
    contentMaxWidth,
    maxWidth,
  } = entry;

  const HeaderTag = headlineSize as any;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p>{children}</p>,
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
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
        }}
        className={`text-center px-8 py-20 lg:px-0 h-full w-full ${
          darkenImage && 'brightness-75'
        }`}
      >
        <div
          style={{ maxWidth: `${contentMaxWidth}px`, color: textColor.value }}
          className='h-full flex flex-col lg:flex-row lg:gap-4 lg:items-center justify-center m-auto'
        >
          <HeaderTag>{headline}</HeaderTag>
          <div className='flex flex-row justify-center w-full lg:w-0 lg:h-[40px]'>
            <hr className='w-1/4 lg:w-0 lg:h-full lg:border-l border-white'></hr>
          </div>
          <div className='my-6'>
            {documentToReactComponents(subText, options)}
          </div>
          <div className='flex flex-row gap-4'>
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

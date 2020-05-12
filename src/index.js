import { MediaPlaceholder } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('fremen/logo-showcase', {
  title: 'Logo Showcase',
  icon: 'images-alt',
  category: 'layout',
  attributes: {
    images: {
      type: 'array',
      source: 'query',
      selector: '.fls-image-wrapper',
      default: [],
      query: {
        class: {
          type: 'string',
          source: 'attribute',
          selector: 'img',
          attribute: 'class',
          default: '',
        },
        href: {
          type: 'string',
          source: 'attribute',
          selector: 'a',
          attribute: 'href',
          default: '',
        },
        src: {
          type: 'string',
          source: 'attribute',
          selector: 'img',
          attribute: 'src',
          default: '',
        },
      },
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const imageIds =
      attributes.images.length === 0
        ? {} // Empty object will open a new gallery
        : attributes.images.map((img) => ({
            id: img.class.match(/wp-image-(\d+)/)[1],
          }));

    const labels = {
      title: 'Logo Showcase',
      instructions: `
            Choose the logos you want to display in the Logo Showcase.
            To link the logo to a website, put the link in the caption prefixed with "//".
            For example "//www.google.com".`,
    };

    return (
      <div style={{ border: '1px solid' }}>
        <MediaPlaceholder
          allowedTypes={['image']}
          labels={labels}
          multiple={true}
          onSelect={(images) => {
            setAttributes({
              images: images.map(({ id, url, caption }) => ({
                class: `wp-image-${id}`,
                href: caption,
                src: url,
              })),
            });
          }}
          value={imageIds}
        />
        <div style={{ padding: 20, paddingTop: 0 }}>
          <h4 style={{ marginBototm: 0, marginTop: 0 }}>Selected logos:</h4>
          {attributes.images.map((img) => (
            <img class={img.class} src={img.src} style={{ height: 40, padding: 5 }} />
          ))}
        </div>
      </div>
    );
  },
  save: ({ attributes }) => {
    return (
      <div>
        <div class={'fls-wrapper'}>
          <div class={'fls-controls'}>
            <div class={'fls-controls-prev'}></div>
            <div class={'fls-controls-next'}></div>
          </div>
          <div class={'fls-container'}>
            {attributes.images.map((img) => {
              const imgElement = <img class={img.class} src={img.src} />;
              return (
                <div>
                  <div class={'fls-image-wrapper'}>
                    {img.href && img.href.startsWith('//') ? (
                      <a href={img.href} target="_blank" rel={'noopener noreferrer'}>
                        {imgElement}
                      </a>
                    ) : (
                      imgElement
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  },
});

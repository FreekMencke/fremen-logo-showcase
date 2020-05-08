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
      selector: 'a',
      default: [],
      query: {
        class: {
          type: 'string',
          source: 'attribute',
          selector: 'img',
          attribute: 'class',
        },
        href: {
          type: 'string',
          source: 'attribute',
          attribute: 'href',
        },
        src: {
          type: 'string',
          source: 'attribute',
          selector: 'img',
          attribute: 'src',
        },
      },
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const imageIds = attributes.images.map((img) => ({
      id: img.class.match(/wp-image-(\d+)/)[1],
    }));

    const labels = {
      title: 'Logo Showcase',
      instructions: `
            Choose the logos you want to display in the Logo Showcase.
            To link the logo to a website, put the link in the description prefixed with "//".
            For example "//www.google.com".`,
    };

    return (
      <div style={{ border: '1px solid' }}>
        <MediaPlaceholder
          labels={labels}
          multiple={true}
          value={imageIds}
          onSelect={(images) => {
            setAttributes({
              images: images.map(({ id, url, description }) => ({
                class: `wp-image-${id}`,
                href: description,
                src: url,
              })),
            });
          }}
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
      <div class="fls-wrapper">
        <div class="fls-controls">
          <div class="fls-controls-prev"></div>
          <div class="fls-controls-next"></div>
        </div>
        <div class="fls-container">
          {attributes.images.map((img) => {
            const imgElement = <img class={img.class} src={img.src} />;
            return (
              <div>
                <div class="fls-image-wrapper">
                  {img.href && img.href.startsWith('//') ? (
                    <a href={img.href} target="_blank">
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
    );
  },
});

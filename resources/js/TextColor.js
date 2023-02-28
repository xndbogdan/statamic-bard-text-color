const { Mark } = Statamic.$bard.tiptap.core;

export function isCloseToWhite(color) {

  if(color === 'transparent') {
    return true;
  }

  if(color === 'inherit' || color === '') {
    return false;
  }

  let r, g, b;

  if (color.startsWith('#') && color.length === 7) {
    // HEX color - precise
    r = parseInt(color.substring(1, 3), 16);
    g = parseInt(color.substring(3, 5), 16);
    b = parseInt(color.substring(5, 7), 16);

    // 
  } else if(color.startsWith('#') && color.length === 4) {
    // HEX color - shorthand
    r = parseInt(color.substring(1, 2), 16) * 17;
    g = parseInt(color.substring(2, 3), 16) * 17;
    b = parseInt(color.substring(3, 4), 16) * 17;
  } else if (color.startsWith('rgb')) {
    // RGB color - We're not bothering with alpha
    const values = color.substring(4, color.length - 1).split(',');
    r = parseInt(values[0]);
    g = parseInt(values[1]);
    b = parseInt(values[2]);
  } else {
    throw new Error(`Invalid color format: ${color}`);
  }

  return r >= 175 && g >= 175 && b >= 175;
}

export const TextColor = Mark.create ({
  name: 'textColor',

  addAttributes() {
    return {
      color: {
        default: '',
        parseHTML: element => { element.querySelector('span.text-color')?.getAttribute('data-class') },
      }
    }
  },

  parseHtml() {
    return [
      {
        tag: 'span.text-color'
      }
    ]
  },

  renderHTML({ HTMLAttributes }) {
    let style = `color: ${HTMLAttributes.color}`;

    if (isCloseToWhite(HTMLAttributes.color)) {
      style += 'text-shadow: 1px 2px #333;';
    }
    
    return [
      'span',
      {
        ...HTMLAttributes,
        class: 'text-color',
        'data-class': HTMLAttributes.color,
        'style': style
      },
      0
    ]
  },

  addCommands() {
    return {
      changeTextColor: attributes => ({ chain }) => {
          if (attributes.color) {
            return chain()
              .setMark(this.name, attributes)
              .run()
          }

          return chain()
            .unsetMark(this.name, { extendEmptyMarkRange: true })
            .run()
      },
    }
  }

})

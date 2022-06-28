const { Mark } = Statamic.$bard.tiptap.core;
const { core: commands } = Statamic.$bard.tiptap;
const { markInputRule } = commands;

export const TextColor = Mark.create ({
  name: 'textColor',

  addAttributes() {
    return {
      key: {
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
    let style = 'color: ';
    style += HTMLAttributes.key
    
    return [
      'span',
      {
        ...HTMLAttributes,
        class: 'text-color',
        'data-class': HTMLAttributes.key,
        'style': style
      },
      0
    ]
  },

  addCommands() {
    return {
      changeTextColor: attributes => ({ chain }) => {
          if (attributes.key) {
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

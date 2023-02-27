import tinycolor from "tinycolor2";
const { Mark } = Statamic.$bard.tiptap.core;

export function isCloseToWhite(color) {
    const processedColor = tinycolor(color);

    if (!processedColor.isValid()) {
        console.warn(`Invalid color format: ${color}`);
        return false;
    }

    if (processedColor.getAlpha() === 0) {
        return true;
    }

    const rgb = processedColor.toRgb();
    return rgb.r >= 175 && rgb.g >= 175 && rgb.b >= 175;
}

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

        if (isCloseToWhite(HTMLAttributes.key)) {
            style += '; text-shadow: 1px 2px #333';
        }

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

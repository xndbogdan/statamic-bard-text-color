const { core: commands } = Statamic.$bard.tiptap;
const { markInputRule } = commands;

export default class TextColor {
  name() {
    return "textColor";
  }

  schema() {
    return {
      attrs: {
        color: {
          default: "#000",
        },
      },
      parseDOM: [
        {
          style: "color",
          getAttrs: (value) => ({ color: value }),
        },
      ],
      toDOM: (mark) => [
        "span",
        { style: `color: ${mark.attrs.color}!important;` },
        0,
      ],
    };
  }

  commands({ type, updateMark }) {
    return (attrs) => updateMark(type, attrs);
  }

  inputRules({ type }) {
    return [markInputRule(/(?:\*\*|__)([^*_]+)(?:\*\*|__)$/, type)];
  }

  pasteRules({ type }) {
    return [];
  }

  plugins() {
    return [];
  }

}

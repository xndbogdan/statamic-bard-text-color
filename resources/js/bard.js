import TextColor from "./TextColor";
import TextColorMenu from "./TextColorMenu";

Statamic.$bard.extend(({ mark }) => mark(new TextColor()));
Statamic.$bard.buttons((buttons) => {
  const indexOfBold = _.findIndex(buttons, { command: "bold" });
  buttons.splice(indexOfBold, 0, {
    name: "color",
    text: "Text Color",
    command: "textColor",
    args: { color: "#fff" },
    icon: "paint-brush",
    component: TextColorMenu,
  });
});

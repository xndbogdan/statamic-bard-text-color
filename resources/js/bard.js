import { TextColor } from "./TextColor";
import TextColorMenu from "./TextColorMenu";

Statamic.booting(() => {
  window.bardCustomColors = Statamic.$config.get('bard-custom-colors') || null;
  window.bardDefaultColors = Statamic.$config.get('bard-default-colors') || null;

  Statamic.$bard.addExtension(() => TextColor)
  Statamic.$bard.buttons(() => {
    return {
      name: "color",
      text: "Text Color",
      command: (editor) => editor.commands.changeTextColor(),
      args: { color: "#fff" },
      icon: "paint-brush",
      component: TextColorMenu,
    }
  })
})
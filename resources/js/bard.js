import { TextColor } from "./TextColor";
import TextColorMenu from "./TextColorMenu";

Statamic.booting(() => {
  const customColors = Statamic.$config.get('bard-custom-colors') || null;
  window.bardCustomColors = customColors

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
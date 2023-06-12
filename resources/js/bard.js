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
      html: '<svg fill="currentColor" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g><path d="M29,27H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h26c0.6,0,1-0.4,1-1S29.6,27,29,27z"/><path d="M5,24h4c0.6,0,1-0.4,1-1s-0.4-1-1-1H8.6l1.9-4h11.1l1.9,4H23c-0.6,0-1,0.4-1,1s0.4,1,1,1h4c0.6,0,1-0.4,1-1s-0.4-1-1-1 h-1.4L16.9,3.6C16.7,3.2,16.4,3,16,3s-0.7,0.2-0.9,0.6L6.4,22H5c-0.6,0-1,0.4-1,1S4.4,24,5,24z M16,6.3l4.6,9.7h-9.2L16,6.3z"/></g></svg>',
      component: TextColorMenu,
    }
  })
})
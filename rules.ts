import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open } from "./utils";

const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "Caps Lock -> Hyper Key",
        from: {
          key_code: "caps_lock",
        },
        to: [
          {
            key_code: "left_shift",
            modifiers: ["left_command", "left_control", "left_option"],
          },
        ],
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
    ],
  },
  ...createHyperSubLayers({
    // o = "Open" applications
    o: {
      a: app("Arc"),
      // g: app("Google Chrome"),
      v: app("Visual Studio Code"),

      // t: app("Warp"),
      // Open todo list managed via *H*ypersonic
      /* h: open(
        "notion://www.notion.so/stellatehq/7b33b924746647499d906c55f89d5026"
      ), */
      m: app("Mattermost"),
      n: app("Notion"),
      f: app("Figma"),
      r: app("Telegram"),
      // p: app("PhpStorm"),
      // w: open("https://web.whatsapp.com"),
      /* l: open(
        "raycast://extensions/stellate/mxstbr-commands/open-mxs-is-shortlink"
      ), */
    },

    // w = "Window" via Raycast
    w: {
      k: {
        description: "Window: Top Half",
        to: [
          {
            key_code: "k",
            modifiers: ["left_option", "left_command", "left_control"],
          },
        ],
      },
      j: {
        description: "Window: Bottom Half",
        to: [
          {
            key_code: "j",
            modifiers: ["left_option", "left_command", "left_control"],
          },
        ],
      },
      h: {
        description: "Window: Left Half",
        to: [
          {
            key_code: "h",
            modifiers: ["left_option", "left_command", "left_control"],
          },
        ],
      },
      l: {
        description: "Window: Right Half",
        to: [
          {
            key_code: "l",
            modifiers: ["left_option", "left_command", "left_control"],
          },
        ],
      },
      f: {
        description: "Window: Full Screen",
        to: [
          {
            key_code: "f",
            modifiers: ["left_option", "left_command", "left_control"],
          },
        ],
      },
      c: {
        description: "Window: Almost Maximize and Center",
        to: [
          {
            key_code: "c",
            modifiers: ["left_option", "left_command", "left_control"],
          },
        ],
      },
      d: {
        description: "Window: Next display",
        to: [
          {
            key_code: "d",
            modifiers: ["left_control", "left_option", "left_command"],
          },
        ],
      },
      r: {
        description: "Window: Next desktop",
        to: [
          {
            key_code: "r",
            modifiers: ["left_control", "left_option", "left_command"],
          },
        ],
      },
      e: {
        description: "Window: Previous desktop",
        to: [
          {
            key_code: "e",
            modifiers: ["left_control", "left_option", "left_command"],
          },
        ],
      },
    },

    // s = "System"
    s: {
      u: {
        to: [
          {
            key_code: "volume_increment",
          },
        ],
      },
      j: {
        to: [
          {
            key_code: "volume_decrement",
          },
        ],
      },
      i: {
        to: [
          {
            key_code: "display_brightness_increment",
          },
        ],
      },
      k: {
        to: [
          {
            key_code: "display_brightness_decrement",
          },
        ],
      },
      l: {
        to: [
          {
            key_code: "q",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
      p: {
        to: [
          {
            key_code: "play_or_pause",
          },
        ],
      },
      semicolon: {
        to: [
          {
            key_code: "fastforward",
          },
        ],
      },
      e: {
        to: [
          {
            // Emoji picker
            key_code: "spacebar",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
    },

    // v = "moVe" which isn't "m" because we want it to be on the left hand
    // so that hjkl work like they do in vim
    v: {
      h: {
        to: [{ key_code: "left_arrow" }],
      },
      j: {
        to: [{ key_code: "down_arrow" }],
      },
      k: {
        to: [{ key_code: "up_arrow" }],
      },
      l: {
        to: [{ key_code: "right_arrow" }],
      },
      // Magicmove via homerow.app
      m: {
        to: [{ key_code: "f", modifiers: ["right_control"] }],
      },
      // Scroll mode via homerow.app
      s: {
        to: [{ key_code: "j", modifiers: ["right_control"] }],
      },
      d: {
        to: [{ key_code: "d", modifiers: ["right_shift", "right_command"] }],
      },
      u: {
        to: [{ key_code: "page_down" }],
      },
      i: {
        to: [{ key_code: "page_up" }],
      },
    },

    // c = Musi*c* which isn't "m" because we want it to be on the left hand
    /* c: {
      p: {
        to: [{ key_code: "play_or_pause" }],
      },
      n: {
        to: [{ key_code: "fastforward" }],
      },
      b: {
        to: [{ key_code: "rewind" }],
      },
    }, */

    // r = "Raycast"
    r: {
      // l: open(
      //   "raycast://extensions/stellate/mxstbr-commands/create-mxs-is-shortlink"
      // ),
      // e: open("raycast://extensions/raycast/emoji/search-emoji"),
      c: open("raycast://extensions/raycast/raycast/confetti"),
      // a: open("raycast://extensions/raycast/raycast-ai/ai-chat"),
      // s: open("raycast://extensions/peduarte/silent-mention/index"),
      // h: open(
      //   "raycast://extensions/raycast/clipboard-history/clipboard-history"
      // ),
      i: open(
        "raycast://extensions/VladKram/imgur-uploader/index"
      ),
      // 1: open(
      //   "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-1"
      // ),
      // 2: open(
      //   "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-2"
      // ),
    },

    // l = "Language"
    l: {
      e: {
        description: "Language: English",
        to: [{
          select_input_source: {
            language: "^en$"
          }
        }],
      },
      u: {
        description: "Language: Ukrainian",
        to: [{
          select_input_source: {
            language: "^uk$"
          }
        }],
      }
    }
  }),
];

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: {
        show_in_menu_bar: false,
      },
      profiles: [
        {
          name: "Default",
          complex_modifications: {
            rules,
          },
        },
      ],
    },
    null,
    2
  )
);

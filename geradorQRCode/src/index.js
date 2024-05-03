import prompt from "prompt";

import schema from "./prompt/promptConfig";

function main() {
  prompt.get(schema, (erro, choice) => {
    switch (choice.select) {
      case 1:
        console.log("Escolhido QrCode");
        break;
      case 2:
        console.log("Escolhido QrCode");
    }
  });
}

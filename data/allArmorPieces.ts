import { helmets } from "~/data/helmets";
import { chestArmor } from "~/data/chestArmor";
import { legArmor } from "~/data/legArmor";
import { capes } from "~/data/capes";

export const allArmorPieces = [
  ...helmets,
  ...chestArmor,
  ...legArmor,
  ...capes,
];

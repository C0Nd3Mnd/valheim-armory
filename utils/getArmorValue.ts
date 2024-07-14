import { allArmorPieces } from "~/data/allArmorPieces";

export function getArmorValue(name: string, level: UpgradeLevel): number {
  const item = allArmorPieces.find((item) => item.name === name);

  if (item === undefined) {
    console.warn(`Can't find item with name: ${name}`);
    return 0;
  }

  const armor = item.armor[level];

  if (armor === undefined) {
    console.warn(`Item ${name} doesn't have level ${level}`);
    return 0;
  }

  return armor;
}

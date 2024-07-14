export function createArmorPiece(
  name: string,
  ...armorValues: number[]
): ArmorPiece {
  if (armorValues.length > 4) {
    throw new Error("Maximum of 4 armor levels possible");
  }

  const armor: Partial<Record<UpgradeLevel, number>> = {};

  if (armorValues[0] !== undefined) {
    armor[1] = armorValues[0];
  }

  if (armorValues[1] !== undefined) {
    armor[2] = armorValues[1];
  }

  if (armorValues[2] !== undefined) {
    armor[3] = armorValues[2];
  }

  if (armorValues[3] !== undefined) {
    armor[4] = armorValues[3];
  }

  return {
    name,
    iconUrl: "",
    armor,
  };
}

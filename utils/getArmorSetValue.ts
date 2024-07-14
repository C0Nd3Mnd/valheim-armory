export function getArmorSetValue(armorSet: ArmorSet): number {
  return Object.values(armorSet.selection)
    .map(({ name, level }) => getArmorValue(name, level))
    .reduce((a, b) => a + b);
}

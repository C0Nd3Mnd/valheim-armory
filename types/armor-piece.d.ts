declare interface ArmorPiece {
  name: string;
  iconUrl: string;
  armor: Partial<Record<UpgradeLevel, number>>;
}

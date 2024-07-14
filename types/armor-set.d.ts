declare interface ArmorSet {
  name: string;
  selection: Record<"helmet" | "chest" | "legs" | "cape", ArmorPieceSelection>;
}

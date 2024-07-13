const COLORS = [
  "#ef4444",
  "#84cc16",
  "#3b82f6",
  "#a855f7",
  "#f97316",
  "#06b6d4",
];

export function getIndexColor(index: number): string {
  return COLORS[index % COLORS.length];
}

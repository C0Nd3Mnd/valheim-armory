import type { ChartData, Point } from "chart.js";
import index from "~/pages/index.vue";

export function useBurndownGraph() {
  const armorStore = useArmorStore();
  const characterStore = useCharacterStore();
  const burndownStore = useBurndownStore();

  const burndownMatrix = computed(() => {
    const matrix: { armor: ArmorSet; health: number[] }[] = [];

    // characterStore.health
    // burndownStore.damagePerHit

    for (const armorSet of armorStore.sets) {
      const dataset: { armor: ArmorSet; health: number[] } = {
        armor: armorSet,
        health: [],
      };
      matrix.push(dataset);

      const effectiveDamagePerHit = valheimDamage(
        burndownStore.damagePerHit,
        getArmorSetValue(armorSet),
      );

      for (
        let healthLeft = characterStore.health;
        healthLeft > 0;
        healthLeft -= effectiveDamagePerHit
      ) {
        dataset.health.push(healthLeft);
      }
    }

    return matrix;
  });

  const chartColumns = computed(() => {
    const requiredLength = Math.max(
      ...burndownMatrix.value.map((x) => x.health.length),
    );

    return new Array(requiredLength).fill(0).map((_, i) => i);
  });

  const burndownChart = computed<ChartData<"line", (number | Point | null)[]>>(
    () => ({
      labels: chartColumns.value,
      datasets: burndownMatrix.value.map(({ armor, health }, index) => ({
        label: `${armor.name.toString()} (${getArmorSetValue(armor)})`,
        data: health.map((x) => Math.round(x)),
        borderColor: getIndexColor(index),
      })),
    }),
  );

  return { burndownMatrix, burndownChart };
}

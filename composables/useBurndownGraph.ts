import type { ChartData, Point } from "chart.js";

export function useBurndownGraph() {
  const armorStore = useArmorStore();
  const characterStore = useCharacterStore();
  const burndownStore = useBurndownStore();

  const burndownMatrix = computed(() => {
    const matrix: { armor: ArmorSet; health: number[] }[] = [];

    // characterStore.health
    // burndownStore.damagePerHit

    for (const armorSet of armorStore.sets) {
      const effectiveDamagePerHit = valheimDamage(
        burndownStore.damagePerHit,
        getArmorSetValue(armorSet),
      );

      if (effectiveDamagePerHit <= 0) {
        console.warn(
          "Effective damage per hit <= 0, skipping armor set",
          armorSet,
        );
        continue;
      }

      const dataset: { armor: ArmorSet; health: number[] } = {
        armor: armorSet,
        health: [],
      };
      matrix.push(dataset);

      for (
        let healthLeft = characterStore.health;
        healthLeft > 0;
        healthLeft -= effectiveDamagePerHit
      ) {
        if (dataset.health.length > 2000) {
          console.warn(
            "Refusing to continue after calculating 2000 hits for armor set",
            armorSet,
          );
          break;
        }

        dataset.health.push(healthLeft);
      }

      dataset.health.push(0);
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

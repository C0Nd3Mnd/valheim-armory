import type { ChartData, Point } from "chart.js";
import { getIndexColor } from "~/utils/getIndexColor";

export function useArmorGraph() {
  const armorStore = useArmorStore();

  /**
   * Damage values to calculate the damage taken for.
   */
  const damageSteps = ref([
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
    180, 190, 200,
  ]);

  /**
   * Calculated effective damage values for each armor set and each damage step.
   */
  const effectiveDamageMatrix = computed(() => {
    const matrix: EffectiveDamage[] = [];

    for (const armorSet of armorStore.sets) {
      const dataset: EffectiveDamage = {
        armor: armorSet,
        values: [],
      };
      matrix.push(dataset);

      for (const damageStep of damageSteps.value) {
        dataset.values.push({
          attackDamage: damageStep,
          effectiveDamage: valheimDamage(damageStep, armorSet.totalArmor),
        });
      }
    }

    return matrix;
  });

  /**
   * Generated chart data for use with chart.js.
   */
  const chartData = computed<ChartData<"line", (number | Point | null)[]>>(
    () => ({
      labels: damageSteps.value.map((step) => step.toString()),
      datasets: effectiveDamageMatrix.value.map(({ armor, values }, index) => ({
        label: `${armor.name.toString()} (${armor.totalArmor})`,
        data: values.map(({ effectiveDamage }) => Math.round(effectiveDamage)),
        borderColor: getIndexColor(index),
      })),
    }),
  );

  return {
    damageSteps,
    effectiveDamageMatrix,
    chartData,
  };
}

import type { ChartData, Point } from "chart.js";

export function useArmorGraph() {
  const armorStore = useArmorStore();
  const damageStore = useDamageStore();
  const characterStore = useCharacterStore();

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

      for (const damageStep of damageStore.steps) {
        dataset.values.push({
          attackDamage: damageStep,
          effectiveDamage: valheimDamage(
            damageStep,
            getArmorSetValue(armorSet),
          ),
          tankedHits: Math.ceil(
            characterStore.health /
              valheimDamage(damageStep, getArmorSetValue(armorSet)),
          ),
        });
      }
    }

    return matrix;
  });

  /**
   * Generated chart data for use with chart.js.
   */
  const effectiveDamageChart = computed<
    ChartData<"line", (number | Point | null)[]>
  >(() => ({
    labels: damageStore.steps.map((step) => step.toString()),
    datasets: effectiveDamageMatrix.value.map(({ armor, values }, index) => ({
      label: `${armor.name.toString()} (${getArmorSetValue(armor)})`,
      data: values.map(({ effectiveDamage }) => Math.round(effectiveDamage)),
      borderColor: getIndexColor(index),
    })),
  }));

  /**
   * Generated chart data for use with chart.js.
   */
  const tankedHitsChart = computed<
    ChartData<"line", (number | Point | null)[]>
  >(() => ({
    labels: damageStore.steps.map((step) => step.toString()),
    datasets: effectiveDamageMatrix.value.map(({ armor, values }, index) => ({
      label: `${armor.name.toString()} (${getArmorSetValue(armor)})`,
      data: values.map(({ tankedHits }) => Math.floor(tankedHits - 1)),
      borderColor: getIndexColor(index),
    })),
  }));

  return {
    effectiveDamageMatrix,
    effectiveDamageChart,
    tankedHitsChart,
  };
}

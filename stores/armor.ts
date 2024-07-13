export const useArmorStore = defineStore(
  "armor",
  () => {
    /**
     * List of armor sets.
     */
    const sets = ref<ArmorSet[]>([]);

    /**
     * Add a new armor set.
     *
     * @param name Name of the armor set
     * @param totalArmor Total armor the armor set gives
     */
    function addSet(name = "Unnamed", totalArmor = 50) {
      sets.value.push({
        name,
        totalArmor,
      });
    }

    /**
     * Delete an armor set.
     *
     * @param armorSet Set to delete
     */
    function deleteSet(armorSet: ArmorSet) {
      const index = sets.value.indexOf(armorSet);

      if (index === -1) {
        return console.warn(
          "Armor set couldn't be deleted because it wasn't found.",
          armorSet,
        );
      }

      sets.value.splice(index, 1);
    }

    return {
      sets,
      addSet,
      deleteSet,
    };
  },
  { persist: true },
);

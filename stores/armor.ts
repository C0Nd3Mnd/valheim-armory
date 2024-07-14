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
     */
    function addSet(name = "Unnamed") {
      sets.value.push({
        name,
        selection: {
          helmet: {
            name: "Leather helmet",
            level: 1,
          },
          chest: {
            name: "Rag tunic",
            level: 1,
          },
          legs: {
            name: "Rag pants",
            level: 1,
          },
          cape: {
            name: "Deer hide cape",
            level: 1,
          },
        },
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
  { persist: { storage: persistedState.localStorage } },
);

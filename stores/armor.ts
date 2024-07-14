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

    /**
     * Move an armor set down in the list.
     *
     * @param armorSet Set to move down
     */
    function moveDown(armorSet: ArmorSet) {
      const index = sets.value.indexOf(armorSet);

      if (index === -1 || index === sets.value.length - 1) {
        return console.warn(
          "Armor set couldn't be moved down because it wasn't found or it's already at the bottom.",
          armorSet,
        );
      }

      const temp = sets.value[index];
      sets.value[index] = sets.value[index + 1];
      sets.value[index + 1] = temp;
    }

    /**
     * Move an armor set up in the list.
     *
     * @param armorSet Set to move up
     */
    function moveUp(armorSet: ArmorSet) {
      const index = sets.value.indexOf(armorSet);

      if (index === -1 || index === 0) {
        return console.warn(
          "Armor set couldn't be moved up because it wasn't found or it's already at the top.",
          armorSet,
        );
      }

      const temp = sets.value[index];
      sets.value[index] = sets.value[index - 1];
      sets.value[index - 1] = temp;
    }

    return {
      sets,
      addSet,
      deleteSet,
      moveDown,
      moveUp,
    };
  },
  { persist: { storage: persistedState.localStorage } },
);

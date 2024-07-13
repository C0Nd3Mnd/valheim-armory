export function valheimDamage(attackDamage: number, armor: number): number {
  // If the attack's damage is more than double than the player's armor, the
  // armor value is simply subtracted from the attack damage.
  if (armor < attackDamage / 2) {
    return attackDamage - armor;
  }

  // Otherwise, this damage formulae is used.
  return (attackDamage * attackDamage) / (4 * armor);
}

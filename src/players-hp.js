export default function showPlayersHp(players) {
  let hpStatus;
  if (players.health > 50) {
    hpStatus = 'healthy';
  }
  if (players.health <= 50 && players.health > 15) {
    hpStatus = 'wounded';
  }
  if (players.health < 15) {
    hpStatus = 'critical';
  }
  return hpStatus;
}

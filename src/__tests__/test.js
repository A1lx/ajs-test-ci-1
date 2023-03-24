import showPlayersHp from '../players-hp';

test('testing showPlayersHp healthy', () => {
  const playersList = { name: 'Маг', health: 90 };
  const result = showPlayersHp(playersList);
  expect(result).toBe('healthy');
});

test('testing showPlayersHp wounded', () => {
  const playersList = { name: 'Воин', health: 50 };
  const result = showPlayersHp(playersList);
  expect(result).toBe('wounded');
});

test('testing showPlayersHp critical', () => {
  const playersList = { name: 'Скелет-лучник', health: 1 };
  const result = showPlayersHp(playersList);
  expect(result).toBe('critical');
});

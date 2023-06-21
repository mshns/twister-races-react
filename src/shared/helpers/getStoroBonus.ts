import { STORO_BONUSES } from 'shared';

export const getStoroBonus = (points: number) => {
  let bonus;

  points >= 100000
    ? (bonus = STORO_BONUSES.bonus100)
    : points >= 50000
    ? (bonus = STORO_BONUSES.bonus50)
    : (bonus = '');

  return bonus;
};

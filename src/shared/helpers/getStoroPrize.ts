import { STORO_PRIZES, range } from 'shared';

export const getStoroPrize = (position: number) => {
  let prize;

  switch (true) {
    case position === 1:
      prize = STORO_PRIZES.step1;
      break;
    case position === 2:
      prize = STORO_PRIZES.step2;
      break;
    case position === 3:
      prize = STORO_PRIZES.step3;
      break;
    case position === 4:
      prize = STORO_PRIZES.step4;
      break;
    case position === 5:
      prize = STORO_PRIZES.step5;
      break;
    case position === 6:
      prize = STORO_PRIZES.step6;
      break;
    case position === 7:
      prize = STORO_PRIZES.step7;
      break;
    case position === 8:
      prize = STORO_PRIZES.step8;
      break;
    case position === 9:
      prize = STORO_PRIZES.step9;
      break;
    case position === 10:
      prize = STORO_PRIZES.step10;
      break;
    case range(11, 14).includes(position):
      prize = STORO_PRIZES.step11;
      break;
    case range(15, 30).includes(position):
      prize = STORO_PRIZES.step12;
      break;
    case range(31, 49).includes(position):
      prize = STORO_PRIZES.step13;
      break;
    case range(50, 55).includes(position):
      prize = STORO_PRIZES.step14;
      break;
    default:
      prize = '';
  }

  return prize;
};

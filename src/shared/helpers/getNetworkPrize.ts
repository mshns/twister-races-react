import { NETWORK_PRIZES, range } from 'shared';

export const getNetworkPrize = (position: number) => {
  let prize;

  switch (true) {
    case position === 1:
      prize = NETWORK_PRIZES.step1;
      break;
    case position === 2:
      prize = NETWORK_PRIZES.step2;
      break;
    case position === 3:
      prize = NETWORK_PRIZES.step3;
      break;
    case position === 4:
      prize = NETWORK_PRIZES.step4;
      break;
    case position === 5:
      prize = NETWORK_PRIZES.step5;
      break;
    case position === 6:
      prize = NETWORK_PRIZES.step6;
      break;
    case range(7, 10).includes(position):
      prize = NETWORK_PRIZES.step7;
      break;
    case range(11, 25).includes(position):
      prize = NETWORK_PRIZES.step8;
      break;
    case range(26, 50).includes(position):
      prize = NETWORK_PRIZES.step9;
      break;
    case range(51, 100).includes(position):
      prize = NETWORK_PRIZES.step10;
      break;
    case range(101, 150).includes(position):
      prize = NETWORK_PRIZES.step11;
      break;
    case range(151, 251).includes(position):
      prize = NETWORK_PRIZES.step12;
      break;
    default:
      prize = '';
  }

  return prize;
};

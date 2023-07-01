import { FC } from 'react';
import { Button } from '@mui/material';
import {
  IPlayerApi,
  IPlayerDB,
  getStoroBonus,
  getStoroPrize,
  isCurrentWeek,
} from 'shared';

interface IPlayerList {
  login: string;
  nickname: string;
}

interface IWinner {
  position: number;
  login: string;
  prize: string;
  bonus: string;
}

export const DownloadReport: FC = () => {
  const downloadTextFile = () => {
    Promise.all([
      fetch(`${import.meta.env.VITE_SERVER_URL}/players`)
        .then((response) => response.json())
        .then((players) => {
          const playerList: IPlayerList[] = [];
          players.map((player: IPlayerDB) => {
            !isCurrentWeek(player.update)
              ? playerList.push({
                  login: player.login,
                  nickname: player.nickname.current.toLowerCase(),
                })
              : playerList.push({
                  login: player.login,
                  nickname: player.nickname.previous.toLowerCase(),
                });
          });
          return playerList;
        }),

      fetch(`${import.meta.env.VITE_SERVER_URL}/previous`)
        .then((response) => response.json())
        .then((playerListXML) => {
          const networkPlayerList: IPlayerApi[] = [];

          const parser = new DOMParser(),
            XML = parser.parseFromString(playerListXML, 'text/xml'),
            report = XML.getElementsByTagName('report'),
            startRace = report[0].getAttribute('race_start') as string,
            endRace = report[0].getAttribute('race_end') as string,
            rows = Array.prototype.slice.call(XML.getElementsByTagName('row'));

          rows.map((row) => {
            const position =
                row.getElementsByTagName('column')[0].lastChild?.nodeValue,
              nickname =
                row.getElementsByTagName('column')[1].lastChild?.nodeValue,
              points =
                row.getElementsByTagName('column')[2].lastChild?.nodeValue;

            if (points > 0) {
              networkPlayerList.push({
                position: Number(position),
                nickname: nickname,
                points: Number(points),
              });
            }
          });

          return { startRace, endRace, networkPlayerList };
        }),
    ])
      .then(([playerList, { startRace, endRace, networkPlayerList }]) => {
        const winnerList: IWinner[] = [];
        let position = 1;

        networkPlayerList.forEach((playerNetwork) => {
          if (position < 56) {
            playerList.map((playerStoro) => {
              if (
                playerStoro.nickname === playerNetwork.nickname.toLowerCase()
              ) {
                winnerList.push({
                  position: position,
                  login: playerStoro.login,
                  prize: getStoroPrize(position),
                  bonus: getStoroBonus(playerNetwork.points),
                });
                position++;
              }
            });
          }
        });

        const options = { month: 'long', day: 'numeric' } as const,
          start = new Date(startRace).toLocaleDateString('ru-RU', options),
          finish = new Date(endRace.slice(0, 10)).toLocaleDateString(
            'ru-RU',
            options
          ),
          reportTitle = `Логины и призы storo08 Twister Races ${start} - ${finish}`,
          report: string[] = [reportTitle, ''];

        winnerList.map((winner) => {
          switch (winner.bonus) {
            case '2x Twister €50':
              report.push(
                `${winner.position}. ${winner.login} - ${winner.prize} + бонус ${winner.bonus} за 100K очков`
              );
              break;
            case '1x Twister €50':
              report.push(
                `${winner.position}. ${winner.login} - ${winner.prize} + бонус ${winner.bonus} за 50K очков`
              );
              break;
            default:
              report.push(
                `${winner.position}. ${winner.login} - ${winner.prize}`
              );
          }
        });

        return { report, reportTitle };
      })
      .then(({ report, reportTitle }) => {
        const element = document.createElement('a');
        const file = new Blob([report.join('\n')], {
          type: 'text/plain;charset=UTF-8',
        });
        element.href = URL.createObjectURL(file);
        element.download = `${reportTitle}.txt`;
        document.body.appendChild(element);
        element.click();
        element.remove();
      });
  };

  return (
    <Button variant='contained' onClick={downloadTextFile}>
      Скачать отчёт
    </Button>
  );
};

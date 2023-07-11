import { useEffect, useState } from 'react';
import {
  IPlayer,
  IPlayerDB,
  useAppDispatch,
  getStoroPrize,
  getStoroBonus,
  IPlayerApi,
  getNetworkPrize,
  isCurrentWeek,
} from 'shared';

import { ScoreDisplay } from 'widgets';
import {
  setRaceTime,
  setStoroPlayers,
  setNetworkPlayers,
  setFetching,
} from 'app/store';

export const ScoreFetching = ({ week }: { week: string }) => {
  const dispatch = useAppDispatch();
  const [updateScore, setUpdateScore] = useState(false);

  useEffect(() => {
    dispatch(setFetching(true));
    setUpdateScore(false);

    Promise.all([
      fetch(`${import.meta.env.VITE_SERVER_URL}/players`)
        .then((response) => response.json())
        .then((players) => {
          const playerList: string[] = [];
          players.map((player: IPlayerDB) => {
            week === 'current' || !isCurrentWeek(player.update)
              ? playerList.push(player.nickname.current.toLowerCase())
              : player.nickname.previous &&
                playerList.push(player.nickname.previous.toLowerCase());
          });
          return playerList;
        }),

      fetch(`${import.meta.env.VITE_SERVER_URL}/${week}`)
        .then((response) => response.json())
        .then((playerListXML) => {
          const networkPlayerList: IPlayerApi[] = [],
            updateTime: string = playerListXML.report.updated_at,
            startRace: string = playerListXML.report.race_start,
            endRace: string = playerListXML.report.race_end;

          playerListXML.report.row.map(
            (row: { column: [number, string, number, string] }) => {
              const position = row.column[0],
                nickname = row.column[1],
                points = row.column[2];

              if (points > 0) {
                networkPlayerList.push({
                  position: Number(position),
                  nickname: nickname.toString(),
                  points: Number(points),
                });
              }
            }
          );

          return { updateTime, startRace, endRace, networkPlayerList };
        }),
    ]).then(
      ([playerList, { updateTime, startRace, endRace, networkPlayerList }]) => {
        dispatch(
          setRaceTime({
            update: updateTime,
            start: startRace,
            end: endRace,
          })
        );

        const storoPlayers: IPlayer[] = [],
          networkPlayers: IPlayer[] = [];
        let position = 1;

        networkPlayerList.map((player) => {
          const isAffiliate = playerList.includes(
            player.nickname.toLowerCase()
          );

          networkPlayers.push({
            position: player.position,
            nickname: player.nickname,
            points: player.points,
            prize: getNetworkPrize(player.position),
            bonus: '',
            isAffiliate: isAffiliate,
          });

          if (isAffiliate) {
            storoPlayers.push({
              position: position,
              nickname: player.nickname,
              points: player.points,
              prize: getStoroPrize(position),
              bonus: getStoroBonus(player.points),
              isAffiliate: false,
            });
            position++;
          }
        });

        dispatch(setStoroPlayers(storoPlayers));
        dispatch(setNetworkPlayers(networkPlayers));
        dispatch(setFetching(false));
      }
    );
  }, [dispatch, updateScore, week]);

  return <ScoreDisplay setUpdateScore={setUpdateScore} />;
};

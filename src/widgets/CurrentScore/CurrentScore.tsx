import { FC, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { IParticipant, IPlayer, IRaceTime } from 'shared';
import { CurrentTimeTable } from 'widgets';

export const CurrentScore: FC = () => {
  const [playerList, setPlayerList] = useState<string[]>([]);
  const [raceTime, setRaceTime] = useState<IRaceTime>();
  const [participantList, setParticipantList] = useState<IParticipant[]>([]);

  useEffect(() => {
    Promise.all([
      fetch('https://twister-races.onrender.com/players')
        .then((response) => response.json())
        .then((players) => {
          const playerList: string[] = [];
          players.map((player: IPlayer) => {
            playerList.push(player.nickname.current.toLowerCase());
          });
          return playerList;
        }),

      fetch('https://twister-races.onrender.com/current')
        .then((response) => response.json())
        .then((participants) => {
          const participantList: IParticipant[] = [];

          const parser = new DOMParser(),
            xmlDoc = parser.parseFromString(participants, 'text/xml'),
            participantsReport = xmlDoc.getElementsByTagName('report'),
            updateTime = participantsReport[0].getAttribute(
              'updated_at'
            ) as string,
            startRace = participantsReport[0].getAttribute(
              'race_start'
            ) as string,
            endRace = participantsReport[0].getAttribute('race_end') as string,
            participantsRows = Array.prototype.slice.call(
              xmlDoc.getElementsByTagName('row')
            );

          participantsRows.map((row) => {
            const position =
              row.getElementsByTagName('column')[0].lastChild?.nodeValue;
            const participant =
              row.getElementsByTagName('column')[1].lastChild?.nodeValue;
            const points =
              row.getElementsByTagName('column')[2].lastChild?.nodeValue;

            if (points > 0) {
              participantList.push({
                position: position,
                nickname: participant,
                points: points,
              });
            }
          });

          return { updateTime, startRace, endRace, participantList };
        }),
    ]).then(
      ([playerList, { updateTime, startRace, endRace, participantList }]) => {
        setPlayerList(playerList);
        setRaceTime({ update: updateTime, start: startRace, end: endRace });
        setParticipantList(participantList);
      }
    );
  }, []);

  return (
    <Box>
      {raceTime && <CurrentTimeTable time={raceTime} />}

      {participantList.map((player) => (
        <Typography key={player.position}>
          {player.position} - {player.nickname} - {player.points}
        </Typography>
      ))}
    </Box>
  );
};

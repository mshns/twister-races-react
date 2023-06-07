import { FC, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

interface INickname {
  current: string;
  previous: string;
}

interface IPlayer {
  _id: string;
  nickname: INickname;
  login: string;
  update: string;
}

interface IParticipant {
  nickname: string | null | undefined;
  points: string | null | undefined;
}

export const PreviousScore: FC = () => {
  const [participantList, setParticipantList] = useState<IParticipant[]>([]);

  useEffect(() => {
    fetch('https://twister-races.onrender.com/current')
      .then((response) => response.json())
      .then((participants) => {
        const participantList: IParticipant[] = [];

        const parser = new DOMParser(),
          xmlDoc = parser.parseFromString(participants, 'text/xml'),
          participantsRows = Array.prototype.slice.call(
            xmlDoc.getElementsByTagName('row')
          );

        participantsRows.map((row) => {
          const participant =
            row.getElementsByTagName('column')[1].lastChild?.nodeValue;
          const points =
            row.getElementsByTagName('column')[2].lastChild?.nodeValue;

          participantList.push({ nickname: participant, points: points });
        });

        return participantList;
      })
      .then((participantList) => setParticipantList(participantList));
  }, []);

  return (
    <Box>
      <Typography>Обновлено 6 июня в 23:12 мск.</Typography>
      {participantList.map((player, index) => (
        <Typography key={index}>
          {index + 1} {player.nickname} {player.points}
        </Typography>
      ))}
    </Box>
  );
};

import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Avatar,
  Box,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { STORO_PRIZE_FUND } from 'shared';

export const Prizes: FC = () => {
  const { t } = useTranslation(['prizes']);

  return (
    <Box
      component='main'
      sx={{
        width: '680px',
        margin: '20px auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant='h4' sx={{ color: 'primary.main', mt: 4 }}>
        {t('Race prizes')}
      </Typography>
      <Divider textAlign='right' sx={{ mb: 2 }}>
        <Avatar variant='rounded'>
          <EmojiEventsIcon />
        </Avatar>
      </Divider>

      <Typography sx={{ m: 2 }}>{t('prizes.part1')}</Typography>

      <TableContainer
        component={Paper}
        sx={{ width: '360px', margin: '20px auto' }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  padding: '10px 20px',
                  color: 'primary.main',
                  fontSize: 18,
                }}
              >
                {t('Position')}
              </TableCell>
              <TableCell
                align='right'
                sx={{
                  padding: '10px 20px',
                  color: 'primary.main',
                  fontSize: 18,
                }}
              >
                {t('Prize')}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {STORO_PRIZE_FUND.map((item, index) => (
              <TableRow
                key={item.position}
                sx={{
                  backgroundColor: index % 2 === 0 ? 'info.dark' : 'info.light',
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ padding: '5px 20px' }}
                >
                  {item.position}
                </TableCell>
                <TableCell align='right' sx={{ padding: '5px 20px' }}>
                  {item.prize}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant='h4' sx={{ color: 'primary.main', mt: 4 }}>
        {t('Bonus tickets')}
      </Typography>
      <Divider textAlign='right' sx={{ mb: 2 }}>
        <Avatar variant='rounded'>
          <LocalActivityIcon />
        </Avatar>
      </Divider>

      <Typography sx={{ m: 2 }}>{t('prizes.part2')}</Typography>
    </Box>
  );
};

import { FC, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { IParticipant } from 'shared';
import { FormControlLabel, Switch, TableHead } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TableLine } from 'entities';

interface ICurrentScoreTable {
  playersAll: IParticipant[];
  playersStoro: string[];
}

interface ITablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: ITablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export const CurrentScoreTable: FC<ICurrentScoreTable> = ({
  playersAll,
  playersStoro,
}) => {
  const { t } = useTranslation(['leaderboard']);

  const [isNetworkRace, SetNetworkRace] = useState(true);

  const storo08Players = playersAll.filter((player) =>
    playersStoro.includes(player.nickname.toLocaleLowerCase())
  );
  const [players, setPlayers] = useState<IParticipant[]>(storo08Players);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(55);

  const handleToogleRace = () => {
    SetNetworkRace(!isNetworkRace);
    isNetworkRace ? setPlayers(playersAll) : setPlayers(storo08Players);
    setPage(0);
    setRowsPerPage(55);
  };

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <FormControlLabel
          control={<Switch />}
          label={t('Network race')}
          labelPlacement='start'
          sx={{ color: 'primary.main', textTransform: 'uppercase' }}
          onChange={handleToogleRace}
        />
        <TablePagination
          component='div'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            '.MuiTablePagination-select': { pl: 0 },
            '.MuiInputBase-input': { p: 0 },
            color: 'text.secondary',
          }}
          rowsPerPageOptions={[
            10,
            55,
            100,
            250,
            { label: t('All'), value: -1 },
          ]}
          colSpan={3}
          count={players.length}
          rowsPerPage={rowsPerPage}
          page={page}
          labelRowsPerPage={t('Rows per page')}
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} ${t('of')} ${count}`
          }
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ pt: 1, pb: 1 }}>{t('Place')}</TableCell>
              <TableCell sx={{ pt: 1, pb: 1 }}>{t('Player')}</TableCell>
              <TableCell sx={{ pt: 1, pb: 1 }}>{t('Prize')}</TableCell>
              <TableCell sx={{ pt: 1, pb: 1, textAlign: 'right' }}>
                {t('Points')}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? players.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : players
            ).map((player, index) => (
              <TableLine
                key={player.position}
                player={player}
                isNetworkRace={isNetworkRace}
                isAffiliate={playersStoro.includes(
                  player.nickname.toLocaleLowerCase()
                )}
                page={page}
                rowsPerPage={rowsPerPage}
                index={index}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

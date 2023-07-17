import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { TablePagination } from '@mui/material';

import { PaginationActions } from 'entities';
import { IPlayer } from 'shared';

interface IScorePagination {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  rowsPerPage: number;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  players: IPlayer[];
}

export const ScorePagination: FC<IScorePagination> = ({
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  players,
}) => {
  const { t } = useTranslation(['leaderboard']);

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
    <TablePagination
      component={'div'}
      sx={{
        width: '100%',
        height: { xs: '82px', md: '54px' },
        '.MuiTablePagination-toolbar': {
          padding: '0 10px',
          flexWrap: 'wrap',
        },
        '.MuiTablePagination-selectLabel': { order: 0, margin: 0 },
        '.MuiTablePagination-select': { order: 1, padding: 0 },
        '.MuiTablePagination-displayedRows': {
          order: 3,
          width: '100%',
          marginTop: 0,
        },
      }}
      rowsPerPageOptions={[10, 55, 100, 250, { label: t('All'), value: -1 }]}
      count={players.length}
      rowsPerPage={rowsPerPage}
      page={page}
      labelRowsPerPage={t('Rows per page')}
      labelDisplayedRows={({ from, to, count }) =>
        `${t('Displaying places')} ${from} ${t('to')} ${to} ${t('of')} ${count}`
      }
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      ActionsComponent={PaginationActions}
    />
  );
};

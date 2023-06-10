import { Paper, styled } from '@mui/material';

export const TableLineWrapper = styled(Paper, {
  shouldForwardProp: (prop) =>
    prop !== 'isAffiliate' && prop !== 'isNetworkRace' && prop !== 'index',
})<{ isAffiliate: boolean; isNetworkRace: boolean; index: number }>(
  ({ theme, isAffiliate, isNetworkRace, index }) => ({
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor:
      isAffiliate && isNetworkRace
        ? theme.palette.success.light
        : index % 2
        ? theme.palette.info.light
        : theme.palette.info.dark,
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
  })
);

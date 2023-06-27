import { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

import { Paragraph, STORO_PRIZE_FUND } from 'shared';
import { PageTitle } from 'entities';

export const Prizes: FC = () => {
  const { t } = useTranslation(['prizes']);

  return (
    <Box
      component='main'
      sx={{
        maxWidth: '560px',
        margin: '20px auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <PageTitle title={t('Race prizes')} icon={<EmojiEventsIcon />} />

      <Paragraph>
        <Trans
          i18nKey={t('prizes.part1')}
          components={{
            strong: (
              <Typography component='span' color='primary' fontSize='inherit' />
            ),
          }}
        />
      </Paragraph>

      <List
        sx={{
          position: 'relative',
          margin: '0 20px 20px',
          maxHeight: 400,
          overflow: 'auto',
        }}
      >
        {STORO_PRIZE_FUND.map((item, index) => (
          <ListItem
            key={item.position}
            sx={{
              paddingLeft: '20px',
              backgroundColor:
                index % 2 === 0 ? 'secondary.main' : 'secondary.contrastText',
              '.MuiListItemText-secondary': {
                color: 'primary.main',
                paddingLeft: '20px',
              },
            }}
            disablePadding
          >
            <ListItemText primary={t(item.position)} secondary={item.prize} />
          </ListItem>
        ))}
      </List>

      <PageTitle title={t('Bonus tickets')} icon={<LocalActivityIcon />} />

      <Paragraph>
        <Trans
          i18nKey={t('prizes.part2')}
          components={{
            strong: (
              <Typography component='span' color='primary' fontSize='inherit' />
            ),
          }}
        />
      </Paragraph>
    </Box>
  );
};

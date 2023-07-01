import { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Box, Button, Paper, Typography } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import GavelIcon from '@mui/icons-material/Gavel';

import { CustomLink, PageTitle } from 'entities';
import { PROMO_LINKS, Paragraph } from 'shared';

export const Registration: FC = () => {
  const { t } = useTranslation(['registration']);

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
      <PageTitle title={t('Race registration')} icon={<HowToRegIcon />} />

      <Paper sx={{ p: 2, m: 2, textAlign: 'center' }}>
        <Paragraph>{t('registration.part1')}</Paragraph>

        <Button variant='contained' href={PROMO_LINKS.redstar} sx={{ m: 1 }}>
          {t('Register for redstar')}
        </Button>
      </Paper>

      <Paragraph>
        <Trans
          i18nKey={t('registration.part2')}
          components={{
            strong: (
              <Typography component='span' color='primary' fontSize='inherit' />
            ),
            vigorish: (
              <CustomLink label='Vigorish.ru' href={PROMO_LINKS.vigorish} />
            ),
            telegram: (
              <CustomLink label='Telegram' href={PROMO_LINKS.telegram} />
            ),
          }}
        />
      </Paragraph>

      <Paragraph sx={{ m: 2 }}>{t('registration.part3')}</Paragraph>

      <PageTitle title={t('Race rules')} icon={<GavelIcon />} />

      <Paragraph>{t('rules.part1')}</Paragraph>

      <Paragraph>
        <Trans
          i18nKey={t('rules.part2')}
          components={{
            strong: (
              <Typography component='span' color='primary' fontSize='inherit' />
            ),
          }}
        />
      </Paragraph>

      <Paragraph>{t('rules.part3')}</Paragraph>

      <Paragraph>{t('rules.part4')}</Paragraph>

      <Paragraph>
        <Trans
          i18nKey={t('rules.part5')}
          components={{
            strong: (
              <Typography component='span' color='primary' fontSize='inherit' />
            ),
            vigorish: (
              <CustomLink label='Vigorish.ru' href={PROMO_LINKS.vigorish} />
            ),
            telegram: (
              <CustomLink label='Telegram' href={PROMO_LINKS.telegram} />
            ),
          }}
        />
      </Paragraph>
    </Box>
  );
};

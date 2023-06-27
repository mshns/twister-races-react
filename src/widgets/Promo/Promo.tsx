import { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Button, Typography } from '@mui/material';

import { Benefit, CustomLink } from 'entities';
import { CHALLENGE_LIST, PROMO_LINKS } from 'shared';

import { PromoWrapper } from './styled';

export const Promo: FC = () => {
  const { t } = useTranslation(['benefits']);

  return (
    <PromoWrapper>
      <Typography
        variant='h5'
        sx={{ color: 'primary.main', textAlign: 'center' }}
      >
        {t('challenges.title')}
      </Typography>

      <Typography
        variant='body2'
        sx={{ margin: '10px 10px 20px', textAlign: 'center' }}
      >
        <Trans
          i18nKey={t('challenges.description')}
          components={{
            strong: (
              <Typography component='span' color='primary' fontSize='inherit' />
            ),
            promo: <CustomLink label='RedStar' href={PROMO_LINKS.redstar} />,
          }}
        />
      </Typography>

      {CHALLENGE_LIST.map((benefit) => (
        <Benefit benefit={benefit} key={benefit.title} />
      ))}

      <Button href={t('challenges.link')} variant='contained' sx={{ margin: 'auto' }}>
        {t('challenges.button')}
      </Button>
    </PromoWrapper>
  );
};

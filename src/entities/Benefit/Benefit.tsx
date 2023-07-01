import { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Button, Divider, Typography } from '@mui/material';

import { CustomLink } from 'entities';
import { PROMO_LINKS } from 'shared';

import { BenefitWrapper } from './styled';

interface IBenefit {
  benefit: {
    title: string;
    subtitle: string;
    description: string;
    button?: string;
    link?: string;
  };
}

export const Benefit: FC<IBenefit> = ({ benefit }) => {
  const { t } = useTranslation(['benefits']);

  return (
    <BenefitWrapper>
      <Typography
        variant='h5'
        sx={{
          color: 'primary.main',
          textAlign: 'center',
          marginBottom: '10px',
        }}
      >
        {t(benefit.title)}
      </Typography>

      <Divider>
        <Typography
          sx={{
            fontSize: '12px',
            textTransform: 'uppercase',
            color: 'text.secondary',
          }}
        >
          {t(benefit.subtitle)}
        </Typography>
      </Divider>

      <Typography
        variant='body2'
        sx={{ marginTop: '10px', textAlign: 'center' }}
      >
        <Trans
          i18nKey={t(benefit.description)}
          components={{
            strong: (
              <Typography component='span' color='primary' fontSize='inherit' />
            ),
            promo: <CustomLink label='RedStar' href={PROMO_LINKS.redstar} />,
          }}
        />
      </Typography>

      {benefit.link && benefit.button && (
        <Button
          href={benefit.link}
          variant='contained'
          sx={{ margin: '10px auto 0' }}
        >
          {t(benefit.button)}
        </Button>
      )}
    </BenefitWrapper>
  );
};

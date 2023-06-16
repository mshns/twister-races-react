import { FC } from 'react';
import { Button, Divider, Link, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

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
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        ':not(:last-child)': { marginBottom: '20px' },
      }}
    >
      <Typography
        variant='h5'
        sx={{
          marginBottom: '10px',
          color: 'primary.main',
          textAlign: 'center',
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

      <Typography variant='body2' sx={{ marginTop: '10px' }}>
        {t(benefit.description)}
      </Typography>

      {benefit.link && benefit.button && (
        <Link
          href={benefit.link}
          sx={{ marginTop: '10px', textAlign: 'center' }}
        >
          <Button variant='contained' color='warning'>
            {t(benefit.button)}
          </Button>
        </Link>
      )}
    </Paper>
  );
};

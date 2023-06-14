import { FC } from 'react';
import { Button, Divider, Link, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface IBenefit {
  benefit: {
    title: string;
    description: string;
    button: string;
    link: string;
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
        marginBottom: '20px',
      }}
    >
      <Typography variant='h5' sx={{ color: 'primary.main' }}>
        {t(benefit.title)}
      </Typography>
      <Divider />
      <Typography variant='body2'>{t(benefit.description)}</Typography>

      <Link href={benefit.link} sx={{ textAlign: 'center' }}>
        <Button variant='contained'>{t(benefit.button)}</Button>
      </Link>
    </Paper>
  );
};

import { FC } from 'react';
import { Avatar, Divider, Typography } from '@mui/material';

interface IPageTitle {
  title: string;
  icon: JSX.Element;
}

export const PageTitle: FC<IPageTitle> = ({ title, icon }) => (
  <>
    <Typography
      variant='h4'
      sx={{
        maxWidth: '80%',
        color: 'primary.main',
        padding: '0 20px 0 40px',
        marginTop: '20px',
      }}
    >
      {title}
    </Typography>
    <Divider textAlign='right' sx={{ marginBottom: '20px' }}>
      <Avatar variant='rounded' sx={{backgroundColor: 'primary.main'}}>
        {icon}
      </Avatar>
    </Divider>
  </>
);

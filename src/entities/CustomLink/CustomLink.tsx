import { FC } from 'react';
import { Chip } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

interface ICustomLink {
  label: string;
  href: string;
}

export const CustomLink: FC<ICustomLink> = ({ label, href }) => (
  <Chip
    component='a'
    label={label}
    href={href}
    color='primary'
    size='small'
    icon={<LinkIcon />}
    clickable
    sx={{ height: 'auto', borderRadius: '4px' }}
  />
);

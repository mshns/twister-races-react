import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Avatar, Toolbar, Tooltip } from '@mui/material';

import { SOCIAL_MEDIA_LIST } from './constants';

export const SocialMediaList: FC = () => {
  const { t } = useTranslation();

  return (
    <Toolbar>
      {SOCIAL_MEDIA_LIST.map((item) => (
        <Link
          href={item.link}
          key={item.title}
          sx={{
            color: 'text.primary',
            transition: 'ease-in-out 0.25s',
            '&:hover': { color: 'primary.main' },
          }}
        >
          <Tooltip title={t(item.title)}>
            <Avatar
              variant='rounded'
              sx={{ width: 32, height: 32,
                m: 1,
                color: 'inherit',
                backgroundColor: 'background.default',
                transform: 'skew(-10deg)',
              }}
            >
              {item.icon}
            </Avatar>
          </Tooltip>
        </Link>
      ))}
    </Toolbar>
  );
};

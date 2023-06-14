import { SvgIcon } from '@mui/material';

import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { ReactComponent as TwitchIcon } from './assets/TwitchGlitchWhite.svg';
import { ReactComponent as VkIcon } from './assets/VkLogo.svg';
import { ReactComponent as TrovoIcon } from './assets/Trovo.svg';
import HomeIcon from '@mui/icons-material/Home';

export const SOCIAL_MEDIA_LIST = [
  { title: 'Telegram', link: 'https://t.me/storo08', icon: <TelegramIcon /> },
  {
    title: 'YouTube',
    link: 'https://youtube.com/storo08stream',
    icon: <YouTubeIcon />,
  },
  {
    title: 'Twitch',
    link: 'https://twitch.tv/storo08',
    icon: (
      <SvgIcon viewBox='0 0 2400 2800'>
        <TwitchIcon />
      </SvgIcon>
    ),
  },
  {
    title: 'Vk',
    link: 'https://vk.com/storo08',
    icon: (
      <SvgIcon viewBox='0 0 101 100'>
        <VkIcon />
      </SvgIcon>
    ),
  },
  {
    title: 'Trovo',
    link: 'https://trovo.live/storo08',
    icon: (
      <SvgIcon viewBox='0 0 24 24'>
        <TrovoIcon />
      </SvgIcon>
    ),
  },
  { title: 'storo08.ru', link: 'https://storo08.ru', icon: <HomeIcon /> },
];

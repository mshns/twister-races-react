import { FC, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonGroup, Tooltip, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LanguageIcon from '@mui/icons-material/Language';

import { ColorModeContext } from '../../../../app/theme/colorModeContext';

export const Settings: FC = () => {
  const { i18n, t } = useTranslation();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  useEffect(() => {
    localStorage.setItem('mode', theme.palette.mode);
    localStorage.setItem('language', i18n.language);
  }, [i18n.language, theme.palette.mode]);

  const handleChangeLanguage = () => {
    i18n.language === 'en'
      ? i18n.changeLanguage('ru')
      : i18n.changeLanguage('en');
  };

  return (
    <ButtonGroup>
      <Tooltip
        placement='left'
        title={i18n.language === 'ru' ? t('English') : t('Russian')}
      >
        <IconButton
          onClick={handleChangeLanguage}
          sx={{ color: 'primary.main' }}
        >
          <LanguageIcon />
        </IconButton>
      </Tooltip>

      <Tooltip
        placement='bottom-start'
        title={
          theme.palette.mode === 'light' ? t('Dark mode') : t('Light mode')
        }
      >
        <IconButton
          onClick={colorMode.toggleColorMode}
          sx={{ color: 'primary.main' }}
        >
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Tooltip>
    </ButtonGroup>
  );
};

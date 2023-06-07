import { useTranslation } from 'react-i18next';

export const useLocalTime = (time: string | null | undefined) => {
  const { i18n, t } = useTranslation(['leaderboard']);
  const usefulDate = time ? new Date(time) : new Date();
  const localDate = usefulDate.toLocaleDateString(i18n.language, {
    month: 'long',
    day: 'numeric',
  });
  const localTime = usefulDate.toLocaleTimeString();

  return `${localDate} ${t('at')} ${localTime}`;
};

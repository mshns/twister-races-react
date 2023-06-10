import { useTranslation } from 'react-i18next';

export const useLocalTime = (time: string) => {
  const { i18n, t } = useTranslation(['leaderboard']);
  const usefulDate = new Date(time);
  const localDate = usefulDate.toLocaleDateString(i18n.language, {
    month: 'long',
    day: 'numeric',
  });
  const localTime = usefulDate.toLocaleTimeString();

  return `${localDate} ${t('at')} ${localTime}`;
};

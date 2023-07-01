import { useTranslation } from 'react-i18next';

export const useLocalDate = (time: string) => {
  const { i18n } = useTranslation();

  const usefulDate = new Date(time);

  const localDate = usefulDate.toLocaleDateString(i18n.language, {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  const localDateUpper = localDate[0].toUpperCase() + localDate.slice(1);

  return localDateUpper;
};

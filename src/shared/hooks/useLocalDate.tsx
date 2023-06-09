import { useTranslation } from 'react-i18next';

export const useLocalDate = (time: string | undefined) => {
  const { i18n } = useTranslation();

  const usefulDate = time ? new Date(time) : new Date();

  const localDate = usefulDate.toLocaleDateString(i18n.language, {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  const localDateUpper = localDate[0].toUpperCase() + localDate.slice(1);

  return localDateUpper;
};

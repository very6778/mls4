import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const normalizedLocale: string = ['tr', 'en'].includes(locale as string) ? locale as string : 'tr';

  return {
    locale: normalizedLocale,
    messages: (await import(`../../messages/${normalizedLocale}.json`)).default
  };
});

import supertest from 'supertest';

interface Cookie {
  value?: string;
  Path?: string;
  'Max-Age'?: number;
  Expires?: string;
  HttpOnly?: boolean;
  Secure?: boolean;
  SameSite?: 'Strict' | any;
  [key: string]: any;
}

/**
 * Get cookies in supertest response
 *
 * @param response supertest response
 * @returns
 */
const getCookies = (
  response: supertest.Response | supertest.Response['headers'],
): Record<string, Cookie> => {
  const setCookiesHeader = response['set-cookie']
    ? response['set-cookie']
    : response.headers['set-cookie'];

  const cookies: Record<string, Cookie> = {};

  if (setCookiesHeader) {
    setCookiesHeader.forEach((cookieHeader: string) => {
      const name = cookieHeader.split('=')[0];
      cookies[name] = {};

      cookieHeader.split(';').forEach((cookiePart: string) => {
        const parsedPart = cookiePart.split('=');
        if (name === parsedPart[0].trim()) {
          cookies[name].value = parsedPart[1];
          return;
        }

        if (parsedPart[0].trim() === 'Max-Age') {
          cookies[name][parsedPart[0].trim()] = Number(parsedPart[1]);
          return;
        }

        cookies[name][parsedPart[0].trim()] = parsedPart[1] || true;
      });
    });
  }

  return cookies;
};

export default getCookies;

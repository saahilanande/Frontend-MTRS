const config = {
  API_BASE_URL: "http://localhost:6363",
  OAUTH2_REDIRECT_URI: "http://localhost:5173/oauth2/redirect",
};

export function getSocialLoginUrl(name: string) {
  return `${config.API_BASE_URL}/oauth2/authorization/${name}?redirect_uri=${config.OAUTH2_REDIRECT_URI}`;
}

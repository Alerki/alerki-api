export interface IJwtTokenData {
  id: string;
  roles: string[];
}

export interface IPairTokens {
  accessToken: string;
  refreshToken: string;
}

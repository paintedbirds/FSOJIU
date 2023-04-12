import { httpClient } from '../http-client';

export interface LoginRequestDto {
  username: string;
  password: string;
}

export interface LoginResponseDto {
  token: string;
  model_perms: string[];
  group_names: string[];
}

export const login = (credentialsDto: LoginRequestDto) => {
  return httpClient.post<LoginResponseDto>('/login/', credentialsDto);
};

export const UNIQUE_PREFIX = (window as any)._env_
  ? (window as any)._env_.UNIQUE_PREFIX
  : process.env.UNIQUE_PREFIX || 'gemline-ss';

export const API_URL = (window as any)._env_
  ? (window as any)._env_.API_URL
  : process.env.API_URL || 'http://localhost:8080';

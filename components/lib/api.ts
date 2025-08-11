// lib/api.ts
import axios from 'axios';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';
import { NextResponse } from 'next/server';
let inMemoryToken: string | null = null;

export const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    Accept: 'application/json',
  },
  // withCredentials: false // aktifkan jika pakai cookie session
});

// Inject Bearer token setiap request
api.interceptors.request.use((config) => {
  // Sinkronkan sekali dari localStorage jika inMemoryToken kosong (client only)
  if (typeof window !== 'undefined' && !inMemoryToken) {
    const stored = localStorage.getItem('token');
    if (stored) inMemoryToken = stored;
  }

  if (inMemoryToken) {
    config.headers.Authorization = `Bearer ${inMemoryToken}`;
  } else {
    delete config.headers.Authorization;
  }
  return config;
});

// Optional: global 401 handling
api.interceptors.response.use(
  r => r,
  err => {
    if (err.response?.status === 401) {
      // clearAuthToken();
      // window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

// Set / clear token
export function setAuthToken(token: string | null) {
  inMemoryToken = token;
  if (typeof window !== 'undefined') {
    if (token) localStorage.setItem('token', token);
    else localStorage.removeItem('token');
  }
}

export function getAuthToken() {
  if (inMemoryToken) return inMemoryToken;
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('token');
    if (stored) inMemoryToken = stored;
    return stored;
  }
  return null;
}

export function clearAuthToken() {
  setAuthToken(null);
}

export async function login(email: string, password: string) {
  const { data } = await api.post('/login', { email, password });
  if (data.token) setAuthToken(data.token);
  return NextResponse.redirect(new URL('/admin', window.location.href));
}

export async function logout() {
  try { await api.post('/logout'); } catch {}
  clearAuthToken();
}
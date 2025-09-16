// apps/web/src/utils/auth.js

// token helpers
export function setToken(t){ localStorage.setItem('lr_token', t) }
export function getToken(){ return localStorage.getItem('lr_token') }
export function clearToken(){ localStorage.removeItem('lr_token') }

// lightweight client-side profile cache
export function setUser(u){ localStorage.setItem('lr_user', JSON.stringify(u || {})) }
export function getUser(){ try { return JSON.parse(localStorage.getItem('lr_user') || '{}') } catch { return {} } }

export function setAvatar(url){ localStorage.setItem('lr_avatar', url || '') }
export function getAvatar(){ return localStorage.getItem('lr_avatar') || '' }

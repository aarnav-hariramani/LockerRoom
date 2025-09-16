// apps/web/src/utils/auth.js

// token helpers (broadcast a same-tab event so UI updates immediately)
export function setToken(t){
  localStorage.setItem('lr_token', t)
  try { window.dispatchEvent(new Event('lr-auth-changed')) } catch {}
}
export function getToken(){ return localStorage.getItem('lr_token') }
export function clearToken(){
  localStorage.removeItem('lr_token')
  localStorage.removeItem('lr_user')
  localStorage.removeItem('lr_avatar')
  try { window.dispatchEvent(new Event('lr-auth-changed')) } catch {}
}

// lightweight client-side profile cache
export function setUser(u){
  localStorage.setItem('lr_user', JSON.stringify(u || {}))
  try { window.dispatchEvent(new Event('lr-auth-changed')) } catch {}
}
export function getUser(){
  try { return JSON.parse(localStorage.getItem('lr_user') || '{}') } catch { return {} }
}

export function setAvatar(url){
  localStorage.setItem('lr_avatar', url || '')
  try { window.dispatchEvent(new Event('lr-auth-changed')) } catch {}
}
export function getAvatar(){ return localStorage.getItem('lr_avatar') || '' }

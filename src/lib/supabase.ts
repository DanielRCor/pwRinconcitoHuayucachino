import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL;
const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const isConfigured = Boolean(url && key);

export const supabase = isConfigured ? createClient(url, key) : null;

export const BUCKET = 'event-images';

export type EventRow = {
  id: string;
  title: string;
  artist: string;
  description: string | null;
  event_date: string;
  image_url: string | null;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
};

const tz = 'America/Lima';

export function formatDay(iso: string) {
  return new Intl.DateTimeFormat('es-PE', { day: '2-digit', timeZone: tz }).format(new Date(iso));
}
export function formatMonth(iso: string) {
  return new Intl.DateTimeFormat('es-PE', { month: 'short', timeZone: tz }).format(new Date(iso)).replace('.', '');
}
export function formatWeekday(iso: string) {
  return new Intl.DateTimeFormat('es-PE', { weekday: 'long', timeZone: tz }).format(new Date(iso));
}
export function formatTime(iso: string) {
  return new Intl.DateTimeFormat('es-PE', { hour: 'numeric', minute: '2-digit', timeZone: tz }).format(new Date(iso));
}
export function formatLong(iso: string) {
  return new Intl.DateTimeFormat('es-PE', {
    weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: '2-digit', timeZone: tz,
  }).format(new Date(iso));
}

export function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

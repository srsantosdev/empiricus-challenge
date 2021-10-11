export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat(['ban', 'id']).format(date);
}

export function formatDate(dateString) {
  const { format } = new Intl.DateTimeFormat('en-US')
  return format(new Date(dateString))
}

export function toDateKey(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function fromDateKey(dateKey) {
  return new Date(`${dateKey}T00:00:00`)
}

export function formatDateLabel(dateKey) {
  return fromDateKey(dateKey).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

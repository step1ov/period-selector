const normalizeDate = (value?: Date | undefined | null) => {
  value = value || new Date()
  const normalized = new Date(value.getFullYear(), value.getMonth(), value.getDate(), 0, 0, 0, 0)
  return new Date(normalized.getTime() - normalized.getTimezoneOffset() * 60000)
}

export default normalizeDate

import { formatDate } from '../../lib/utils'

const DateComponent = ({ dateString }) => {
  return <time dateTime={dateString}>{formatDate(dateString)}</time>
}

export default DateComponent

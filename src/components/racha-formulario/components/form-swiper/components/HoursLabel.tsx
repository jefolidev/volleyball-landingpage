/* eslint-disable prettier/prettier */
import { forwardRef } from 'react'

type HoursLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

const HoursLabel = forwardRef<HTMLLabelElement, HoursLabelProps>(
  (props, ref) => {
    return <label {...props} ref={ref}></label>
  }
)

export default HoursLabel

import HoursDivisor from './components/HoursDivisor'
import HoursImage from './components/HoursImage'
import HoursLabel from './components/HoursLabel'
import HoursSwiper from './components/HoursSwiper'

type HoursBodyProps = {
  hour: number
  value: string
  onChange: (event: Event, newValue: number | number[]) => void
}

const HoursBody = ({ hour, onChange, value }: HoursBodyProps) => {
  function valueLabelFormat(value: number) {
    let hoursValue = value
    hoursValue += 1

    return `${hoursValue <= 9 ? `0${hoursValue}:00` : `${hoursValue}:00`}`
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <HoursSwiper
        valueLabelFormat={valueLabelFormat}
        onChange={onChange}
        value={value}
      />
      <div className="flex items-center justify-center">
        <HoursLabel className="text-base text-light-fonts dark:text-dark-fonts font-sequel">
          {valueLabelFormat(hour)}
        </HoursLabel>
        <HoursDivisor />
        <HoursImage hour={hour} />
      </div>
    </div>
  )
}

export default HoursBody

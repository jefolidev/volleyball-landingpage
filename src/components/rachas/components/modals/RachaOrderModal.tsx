/* eslint-disable prettier/prettier */
import { forwardRef } from 'react'

interface RachaModalProps {
  isVisible: 'visible' | 'invisible'
}

const RachaModal = forwardRef<HTMLDivElement, RachaModalProps>(
  ({ isVisible }, ref) => (
    <div
      ref={ref}
      className={`w-44 h-52 bg-white shadow-md absolute mt-[17rem] rounded-lg ${isVisible}`}
    >
      b
    </div>
  )
)

export default RachaModal

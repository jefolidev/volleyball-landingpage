/* eslint-disable prettier/prettier */
import { useTheme } from '@/contexts/themeContext'
import { useState } from 'react'

const FormTags = () => {
  const [activeButtons, setActiveButtons] = useState<number[]>([])
  const [miscTags] = useState([
    {
      index: 1,
      tagName: 'Começa cedo',
    },
    {
      index: 2,
      tagName: 'Começa tarde',
    },
    {
      index: 3,
      tagName: 'Muita gente',
    },
    {
      index: 4,
      tagName: 'Pouca gente',
    },
  ])
  const [dificultyTags] = useState([
    {
      index: 5,
      tagName: 'Iniciante',
    },
    {
      index: 6,
      tagName: 'Experiente',
    },
    {
      index: 7,
      tagName: 'Intermediário',
    },
  ])

  const { theme } = useTheme()

  const selectButtonHandler = (index: number) => {
    activeButtons.includes(index)
      ? setActiveButtons(activeButtons.filter((i) => i !== index))
      : setActiveButtons([...activeButtons, index])
  }
  const getButtonStyle = (index: number) => {
    if (theme === 'light') {
      return {
        backgroundColor: activeButtons.includes(index)
          ? 'rgb(12,22,24)'
          : 'rgb(209, 213, 219)',
        color: activeButtons.includes(index)
          ? 'rgb(209, 213, 219)'
          : 'rgb(12,22,24)',
      }
    } else {
      return {
        backgroundColor: activeButtons.includes(index)
          ? 'rgb(12,22,24)'
          : 'rgb(209, 213, 219)',
        color: activeButtons.includes(index)
          ? 'rgb(209, 213, 219)'
          : 'rgb(12,22,24)',
      }
    }
  }
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-8">
      <div className="py-2">
        {miscTags.map((tag) => (
          <label
            key={tag.index}
            style={getButtonStyle(tag.index)}
            className="text-center font-sequel dark:bg-gray-100 w-36 h-10 dark p-2 mx-2 px-6 py-3 rounded-full cursor-pointer"
            onClick={() => selectButtonHandler(tag.index)}
          >
            {tag.tagName}
          </label>
        ))}
      </div>
      <div>
        {dificultyTags.map((tag) => (
          <label
            key={tag.index}
            style={getButtonStyle(tag.index)}
            className="text-center font-sequel text-light-fonts bg-gray-300 dark:bg-gray-100 w-36 h-10 dark dark px-6 py-3 mx-2 rounded-full cursor-pointer"
            onClick={() => selectButtonHandler(tag.index)}
          >
            {tag.tagName}
          </label>
        ))}
      </div>
    </div>
  )
}

export default FormTags

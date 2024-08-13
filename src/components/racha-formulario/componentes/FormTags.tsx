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
          ? 'rgb(209, 213, 219)'
          : 'rgb(12,22,24)',
        color: activeButtons.includes(index)
          ? 'rgb(12,22,24)'
          : 'rgb(209, 213, 219)',
      }
    }
  }
  return (
    <>
      <div>
        {miscTags.map((tag) => (
          <button
            key={tag.index}
            style={getButtonStyle(tag.index)}
            className="text-center font-sequel dark:bg-gray-100 w-36 h-10 dark p-2 mx-2 rounded-full"
            onClick={() => selectButtonHandler(tag.index)}
          >
            {tag.tagName}
          </button>
        ))}
      </div>
      <div>
        {dificultyTags.map((tag) => (
          <button
            key={tag.index}
            style={{
              backgroundColor: activeButtons.includes(tag.index)
                ? 'rgb(12,22,24)'
                : 'rgb(209, 213, 219)',
              color: activeButtons.includes(tag.index)
                ? 'rgb(209, 213, 219)'
                : 'rgb(12,22,24)',
            }}
            className="text-center font-sequel text-light-fonts bg-gray-300 dark:bg-gray-100 w-36 h-10 dark dark p-2 mx-2 rounded-full"
            onClick={() => selectButtonHandler(tag.index)}
          >
            {tag.tagName}
          </button>
        ))}
      </div>
    </>
  )
}

export default FormTags

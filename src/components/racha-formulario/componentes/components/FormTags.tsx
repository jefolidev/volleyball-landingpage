/* eslint-disable prettier/prettier */
import { useForm } from '@/contexts/formContext'
import { useTheme } from '@/contexts/themeContext'
import { useState } from 'react'

const FormTags = () => {
  const {
    selectedTags,
    setSelectedTags,
    selectedDifficulty,
    setSelectedDifficulty,
  } = useForm()

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
      tagName: 'Intermediário',
    },
    {
      index: 7,
      tagName: 'Experiente',
    },
  ])

  const { theme } = useTheme()

  const selectTagsHandler = (tag: string) => {
    selectedTags.includes(tag)
      ? setSelectedTags(selectedTags.filter((i) => i !== tag))
      : setSelectedTags([...selectedTags, tag])
  }

  const selectDificultyHandler = (tag: string) => {
    setSelectedDifficulty(tag)
  }
  const getButtonStyle = (tag: string) => {
    if (theme === 'light') {
      return {
        backgroundColor:
          selectedTags.includes(tag) || selectedDifficulty.includes(tag)
            ? 'rgb(12,22,24)'
            : 'rgb(209, 213, 219)',
        color:
          selectedTags.includes(tag) || selectedDifficulty.includes(tag)
            ? 'rgb(209, 213, 219)'
            : 'rgb(12,22,24)',
      }
    } else {
      return {
        backgroundColor:
          selectedTags.includes(tag) || selectedDifficulty.includes(tag)
            ? 'rgb(12,22,24)'
            : 'rgb(209, 213, 219)',
        color:
          selectedTags.includes(tag) || selectedDifficulty.includes(tag)
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
            style={getButtonStyle(tag.tagName)}
            className="text-center font-sequel dark:bg-gray-100 w-36 h-10 dark p-2 mx-2 px-6 py-3 rounded-full cursor-pointer"
            onClick={() => selectTagsHandler(tag.tagName)}
          >
            {tag.tagName}
          </label>
        ))}
      </div>
      <div>
        {dificultyTags.map((tag) => (
          <label
            key={tag.index}
            style={getButtonStyle(tag.tagName)}
            className="text-center font-sequel text-light-fonts bg-gray-300 dark:bg-gray-100 w-36 h-10 dark dark px-6 py-3 mx-2 rounded-full cursor-pointer"
            onClick={() => selectDificultyHandler(tag.tagName)}
          >
            {tag.tagName}
          </label>
        ))}
      </div>
    </div>
  )
}

export default FormTags

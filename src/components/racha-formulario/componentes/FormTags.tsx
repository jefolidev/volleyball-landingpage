import { useState } from 'react'

const FormTags = () => {
  const [miscTags] = useState([
    {
      index: 1,
      tagName: 'Começa cedo',
    },
    {
      index: 1,
      tagName: 'Começa tarde',
    },
    {
      index: 2,
      tagName: 'Muita gente',
    },
    {
      index: 3,
      tagName: 'Pouca gente',
    },
  ])
  const [dificultyTags] = useState([
    {
      index: 1,
      tagName: 'Iniciante',
    },
    {
      index: 2,
      tagName: 'Experiente',
    },
    {
      index: 3,
      tagName: 'Intermediário',
    },
  ])
  return (
    <>
      <div>
        {miscTags.map((tag) => (
          <button
            key={tag.index}
            className="text-center font-sequel text-light-fonts bg-gray-300 w-36 h-10 hover:bg-light-fonts hover:text-gray-200 p-2 mx-2 rounded-full"
          >
            {tag.tagName}
          </button>
        ))}
      </div>
      <div>
        {dificultyTags.map((tag) => (
          <button
            key={tag.index}
            className="text-center font-sequel text-light-fonts bg-gray-300 w-36 h-10 hover:bg-light-fonts hover:text-gray-200 p-2 mx-2 rounded-full"
          >
            {tag.tagName}
          </button>
        ))}
      </div>
    </>
  )
}

export default FormTags

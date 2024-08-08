import { useState } from 'react'

const FormTags = () => {
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
  return (
    <>
      <div>
        {miscTags.map((tag) => (
          <button
            key={tag.index}
            className="text-center font-sequel text-light-fonts bg-gray-100 w-36 h-10 hover:bg-light-fonts hover:text-gray-200 p-2 mx-2 rounded-full"
          >
            {tag.tagName}
          </button>
        ))}
      </div>
      <div>
        {dificultyTags.map((tag) => (
          <button
            key={tag.index}
            className="text-center font-sequel text-light-fonts bg-gray-100 w-36 h-10 hover:bg-light-fonts hover:text-gray-200 p-2 mx-2 rounded-full"
          >
            {tag.tagName}
          </button>
        ))}
      </div>
    </>
  )
}

export default FormTags

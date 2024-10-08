'use client'
import Form from './components/FormRoot'

const RachaForm = () => {
  return (
    <main id="formulario" className="w-full h-full py-8">
      <section className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <h1 className="text-5xl font-sequel text-light-fonts dark:text-dark-fonts">
            Ajude
          </h1>
          <h1 className="text-5xl font-giovanni text-light-fonts dark:text-dark-fonts">
            aumentar
          </h1>
          <h1 className="text-5xl font-sequel text-light-fonts dark:text-dark-fonts">
            a
          </h1>
        </div>
        <div className="flex gap-2">
          <h1 className="text-5xl font-sequel text-light-fonts dark:text-dark-fonts">
            prática de
          </h1>
          <h1 className="text-5xl font-giovanni text-light-fonts dark:text-dark-fonts">
            vôlei
          </h1>
        </div>
        <h2 className="text-sm text-center font-sequel text-light-fonts dark:text-dark-fonts/80 mt-3">
          Você pode ajudar a inserir novas pessoas no mundo do esporte, <br />
          compartilhe locais de escolinhas, treinos e rachas, e influencie mais
          <br />
          pessoas a praticar esse esporte!
        </h2>
      </section>
      <Form />
    </main>
  )
}

export default RachaForm

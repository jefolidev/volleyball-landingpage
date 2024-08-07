import Footer from '@/components/footer/Footer'
import Main from '@/components/main/Main'
import Navbar from '@/components/navbar/Navbar'
import Form from '@/components/racha-formulario/RachaForm'
import Calendario from '@/components/rachas-agendados/Calendario'
import Rachas from '@/components/rachas/Rachas'
import Treinos from '@/components/treinos/Treinos'

export default function Home() {
  return (
    <main className="bg-light-background ">
      <Navbar />
      <Main />
      <Treinos />
      <Rachas />
      <Form />
      <Calendario />
      <Footer />
    </main>
  )
}

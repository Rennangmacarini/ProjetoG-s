import { Carousel } from '@/Components/Carousel'
import { Footer } from '@/Components/Footer'
import { Header } from '@/Components/Header'
import { Main } from '@/Components/Main'
import { Section } from '@/Components/Section'

export default function Home() {
  return (
    <>
      <Header/>
      <Carousel/>
      <Main/>
      <Section/>
      <Footer/>
    </>
  )
}

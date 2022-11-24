import React, { useEffect } from 'react'
import { Section } from '../components/templates/Section'
import { SliderList } from '../components/templates/SliderList'
import { HeroBanner } from '../components/atoms/HeroBanner'
import { Main } from '../styles/View/ViewStyles'
import { Banner } from '../components/atoms/Banner'
import delivery from "../assets/banners/delivery.jpg"
import deal1 from "../assets/banners/deal1.jpg"
import deal2 from "../assets/banners/deal2.png"
import deal3 from "../assets/banners/deal3.png"
import deal4 from "../assets/banners/deal4.jpg"
import deal5 from "../assets/banners/deal5.jpg"
import deal6 from "../assets/banners/deal6.jpg"
import { Promo } from '../components/atoms/Promo'
import { Categories } from '../components/templates/Categories'
import { SectionTitle } from '../components/atoms/Section/SectionTitle'
import { Instagram } from '../components/templates/Instagram'

export const Home = () => {

  return (
    <>
      <HeroBanner />
      <Main className="ContentContainer">
        <Section
        text="¡Ofertas on fire! ⏰"
        category={50}
        >
          <SliderList
          category={50}
          />
        </Section>
        <Promo
          img1={deal4}
          img2={deal5}
          img3={deal6}
        />

<Section
        text="¡Lo mejor en Gaming! 🎮"
        category={10}
        >
        <SliderList
          category={10}
          />
        </Section>

        <Promo
          img1={deal1}
          img2={deal2}
          img3={deal3}
        />

        <Section
        text="¡Últimas novedades! 🔥"
        category={52}
        >
        <SliderList
          category={52}
          />
        </Section>

        <Banner img={delivery} />

        <Section
        text="¡Más vendidos! 🌟"
        category={53}
        >
        <SliderList
          category={53}
          />
        </Section>

        <Section
        Left={SectionTitle}
        text="Categorías">
          <Categories/>
        </Section>

        <Section
        Left={SectionTitle}
        text="¡Síguenos en Instagram!">
          <Instagram/>
        </Section>
      </Main>
    </>
  )
}

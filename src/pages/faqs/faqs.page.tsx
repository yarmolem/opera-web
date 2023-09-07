import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger
} from '@/components/accordion'
import Footer from '@/components/footer'
import Header from '@/components/header'

import FAQS_HEADER_LOGO from '@/assets/images/faqs/faqs_header_logo.png'
import FAQS_HEADER_QUESTION from '@/assets/images/faqs/faqs_header_question.png'

const FaqsPage = () => {
  return (
    <div className="flex flex-col w-full">
      <Header color="red" className="mb-[61px]" />

      <div className="mx-auto h-[205px] flex items-center mb-[61px]">
        <img alt="" src={FAQS_HEADER_LOGO} />
        <div className="w-[484px] h-full bg-black py-4 pl-12 flex flex-col justify-center gap-y-2">
          <p className="py-2 px-4 text-[32px] leading-[1rem] font-bold bg-[#64ADEC] w-max">
            PREGUNTAS
          </p>
          <p className="py-2 px-4 text-[32px] leading-[1rem] font-bold bg-[#64ADEC] w-max">
            FRECUENTES
          </p>
        </div>
        <img alt="" src={FAQS_HEADER_QUESTION} className="mt-auto" />
      </div>

      <div className="w-full max-w-[1056px] mx-auto py-4 px-6">
        <Accordion type="multiple" className="space-y-8">
          <AccordionItem value="item-1">
            <AccordionTrigger className="">¿Qué es la ópera?</AccordionTrigger>
            <AccordionContent>
              <p>
                La ópera, palabra en italiano que significa literalmente “obra”,
                es una colaboración entre un compositor y un libretista que
                incorpora muchos elementos de las artes escénicas: la actuación,
                la escenografía, los vestuarios, y a veces la danza o el ballet.
                También conocido como “el espectáculo sin límites”, el
                compositor alemán Richard Wagner siempre buscó crear con sus
                títulos una Gesamtkunstwerk, literalmente: “obra de arte
                total”.La ópera nació en Florencia hacia el final del siglo XVI
                por iniciativa de un grupo de músicos y académicos que formaban
                la Camerata Fiorentina, que buscaba redescubrir el antiguo
                teatro griego que consideraban era dramma per música o “teatro
                con música”. Las primeras óperas fueron inventadas por el
                cantante Jacopo Peri (1561-1633), quien compuso La Dafne en 1597
                y Euridice en 1600, con libretos de Ottavio Rinuccini.En sus más
                de 425 años de historia, el género multidisciplinario de la
                ópera, que reúne fundamentalmente a un grupo variado de músicos
                —cantantes, instrumentistas, directores de orquesta y de coro—,
                ha sido a lo largo del tiempo un reflejo de las diversas
                corrientes de pensamiento, políticas y filosóficas, religiosas y
                morales, estéticas y culturales, propias de la sociedad en la
                que se produjeron dichas obras.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              ¿Cuáles son las óperas más representadas en el mundo?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                Según las estadísticas verificadas del sitio www.operabase.com,
                las 10 óperas más representadas en el mundo son:{' '}
              </p>

              <ul>
                <li>1. Die Zauberflöte, de Mozart</li>
                <li>2. La traviata, de Verdi</li>
                <li>3. Carmen, de Bizet</li>
                <li>4. La bohème, de Puccini</li>
                <li>5. Le nozze di Figaro, de Mozart</li>
                <li>6. Tosca, de Puccini</li>
                <li>7. Madama Butterfly, de Puccini</li>
                <li>8. Don Giovanni, de Mozart</li>
                <li>9. Il barbiere di Siviglia, de Rossini</li>
                <li>10. Rigoletto, de Verdi</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              ¿Cuáles son los países con más funciones de ópera en el mundo?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                Según las estadísticas verificadas del sitio www.operabase.com,
                las 10 ciudades con más funciones de ópera en el mundo son:
              </p>

              <ul>
                <li>1. Viena</li>
                <li>2. Londres</li>
                <li>3. Berlín</li>
                <li>4. París</li>
                <li>5. Nueva York</li>
                <li>6. Múnich</li>
                <li>7. Moscú</li>
                <li>8. Hamburgo</li>
                <li>9. Budapest</li>
                <li>10. San Petersburgo</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              ¿Cuáles son los compositores más importantes en la historia de la
              ópera?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                A juicio de la revista Gramophone del Reino Unido, los 10 más
                importantes compositores en la historia de la ópera, desde el
                siglo XVII al siglo XXI son:
              </p>

              <ul className="mb-4">
                <li>1. Claudio Monteverdi (1567-1643)</li>
                <li>2. Georg Friedrich Händel (1685-1759)</li>
                <li>3. Wolfgang Amadeus Mozart (1756-1791)</li>
                <li>4. Gioachino Rossini (1792-1868)</li>
                <li>5. Richard Wagner (1813-1883)</li>
                <li>6. Giuseppe Verdi (1813-1901)</li>
                <li>7. Giacomo Puccini (1858-1924)</li>
                <li>8. Richard Strauss (1864-1949)</li>
                <li>9. Benjamin Britten (1913-1976)</li>
                <li>10. Kaija Saariaho (1952-2023)</li>
              </ul>

              <p>
                Fuente:{' '}
                <a
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.gramophone.co.uk/features/article/top-10-opera-composers"
                >
                  https://www.gramophone.co.uk/features/article/top-10-opera-composers
                </a>
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              ¿Cuáles son los idiomas más comunes en la ópera?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Hay óperas en prácticamente todos los idiomas conocidos, pero
                por razones históricas y sociales, los idiomas “clásicos” del
                repertorio operístico son, en orden descendente: italiano,
                francés, alemán, inglés, ruso y español.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left">
              <p className="mr-6">
                ¿Cómo puedo divulgar eventos, clases magistrales, cursos
                musicales, producciones de ópera, concursos, etcétera, a través
                de las redes sociales de Pro Ópera?
              </p>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                Hay óperas en prácticamente todos los idiomas conocidos, pero
                por razones históricas y sociales, los idiomas “clásicos” del
                repertorio operístico son, en orden descendente: italiano,
                francés, alemán, inglés, ruso y español.
              </p>
              <p>
                ¿Cómo puedo divulgar eventos, clases magistrales, cursos
                musicales, producciones de ópera, concursos, etcétera, a través
                de las redes sociales de Pro Ópera?
              </p>

              <p>
                El grupo Pro Ópera Joven en Facebook es un foro en el que sus
                miembros pueden compartir noticias e información, nacional e
                internacional, imágenes, audios, videos y podcasts, carteles,
                efemérides, así como comentar y discutir sobre diversos temas
                operísticos: noticias, próximos estrenos, conferencias, cursos,
                audiciones, eventos de la comunidad operística, etcétera.
              </p>

              <p>
                Eso sí: contenidos publicitarios, fuera de tema, inapropiados,
                irrespetuosos u ofensivos no serán tolerados.
              </p>

              <p>
                Cualquier persona puede ver quién pertenece al grupo y lo que se
                publica. Para postear, los usuarios deberán darse de alta como
                miembros del grupo. Se pide a los miembros que posteen
                información solo una vez. Los mensajes repetitivos serán
                eliminados. El spam no será tolerado. Gracias de antemano por
                seguir estas reglas generales.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>¿Qué es Pro Ópera?</AccordionTrigger>
            <AccordionContent>
              <p>
                Pro Ópera, A. C. es una organización privada, autónoma y no
                lucrativa fundada en 1985 por un grupo de personas aficionadas a
                la ópera, con el propósito de apoyar, promover y difundir
                información sobre la ópera en México y el mundo.Hoy somos una de
                las pocas asociaciones culturales en México que sigue paso a
                paso su misión, su visión y sus objetivos. El servicio que
                brindamos a la comunidad artística, operística y en general al
                público aficionado, en el campo de la difusión y de la
                educación, nos colocan como una asociación líder en el ámbito
                cultural.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-left">
              <p className="mr-6">
                A través de Pro Ópera, ¿puedo comprar boletos de las funciones
                de la Ópera de Bellas Artes o abonos del Auditorio Nacional para
                las transmisiones en vivo desde el Met de Nueva York?
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <p>Solo si eres socio.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>
              ¿Cómo puedo ser socio de Pro Ópera?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Pide informes en{' '}
                <a href="mailto:info@proopera.org.mx" className="underline">
                  info@proopera.org.mx
                </a>
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>
              ¿Cuáles son los beneficios de ser socio de Pro Ópera?
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>
                  1. Boletos en preventa para las funciones de la Ópera de
                  Bellas Artes.
                </li>
                <li>2. Viajes de Pro Ópera en México y el extranjero.</li>
                <li>3. Ciclos de conferencias organizadas por Pro Ópera.</li>
                <li>4. Invitación a ensayos generales abiertos.</li>
                <li>5. Recibo deducible de impuestos.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Footer className="mt-[308px]" />
    </div>
  )
}

export default FaqsPage

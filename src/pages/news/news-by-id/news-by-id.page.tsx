import { Facebook, Linkedin, Twitter } from 'lucide-react'

import Footer from '@/components/footer'
import Header from '@/components/header'

import IMAGE_1 from '@/assets/images/news-by-id/1.png'
import IMAGE_2 from '@/assets/images/news-by-id/2.png'
import IMAGE_3 from '@/assets/images/news-by-id/3.png'
import LOGO_HEADER_BLOG from '@/assets/images/news-by-id/logo-header-blog.png'

const NewsByIdPage = () => {
  return (
    <div>
      <Header color="pink" className="mb-[42px]" />

      <div className="w-full max-w-[1258px] mx-auto flex flex-col">
        <h2 className="text-[#994878] text-2xl mb-[34px]">
          CONTENIDO / <span className="font-bold">NOTICIA DE HOY</span>
        </h2>

        <div className="flex items-center gap-x-[28px] mb-4">
          <p className="font-bold">COMPARTIR:</p>
          <div className="flex items-center gap-x-6">
            <Facebook fill="black" stroke="transparent" />
            <Twitter fill="black" stroke="transparent" />
            <Linkedin fill="black" stroke="transparent" />
          </div>
        </div>

        <div className="mb-[38px] text-[#664F6E] font-bold flex items-center gap-x-2 uppercase">
          <p>José Noé Mercado</p>
          <p className="text-[#0376B9]">|</p>
          <p>JUNIO 2023</p>
        </div>

        <img alt="" src={IMAGE_1} />
        <div className="flex h-[178px] mb-[180px]">
          <div className="bg-[#994878] pl-4 h-full flex items-center justify-between w-full flex-1 border-b-[16px] border-b-black">
            <div className="text-[32px] leading-[32px] tracking-[6px] uppercase space-y-2">
              <p className="py-2 px-4 bg-[#BCD8D5] ">
                El canal de Manuel Yrízar:
              </p>
              <p className="py-2 px-4 bg-[#BCD8D5] ">Ópera mexicana en lata</p>
            </div>
          </div>
          <div className="py-[18px] px-4 bg-black">
            <img alt="" src={LOGO_HEADER_BLOG} />
          </div>
        </div>

        <h3 className="text-4xl text-[#994878] tracking-[10px] mb-[21px]">
          TÍTULO
        </h3>

        <div className="flex items-center justify-between gap-x-6 mb-[80px]">
          <p className="text-[#999EA1]">
            La documentación videográfica oficial de la ópera en México es casi
            inexistente. No hay un archivo —al menos no uno público— que pueda
            consultarse y dar cuenta en registro de audio y video de la historia
            lírica de nuestro país, de algún teatro, estado de la república,
            institución o instancia productora. El Canal 22, otrora dependiente
            de Conaculta y en la actualidad de la Secretaría de Cultura, ha
            grabado y transmitido, principalmente, producciones de la Ópera de
            Bellas Artes en años recientes —un par de décadas—, con lo que salva
            de la inexistencia a esa documentación. Aunque es claro que estas
            grabaciones no forman en sí un catálogo o acervo público y que —si
            bien ha destinado un espacio operístico en su programación de manera
            constante— algunas producciones solo han pasado al aire una vez en
            el mejor de los casos o, en rigor, se mantienen inéditas, en espera
            de que llegue su turno. En décadas anteriores, en la era predigital,
            otras televisoras como Canal 9, Canal 13 o Canal 11 transmitieron
            funciones de ópera, siendo esta última señal, dependiente del
            Instituto Politécnico Nacional, la que se ocupara especialmente de
            registrar el quehacer operístico en Bellas Artes. Sin embargo, ese
            catálogo no fue conservado, en aras de reutilizar las cintas en las
            que Por desgracia, y como podría suponerse a partir de un registro
            particular tomado de la televisión con dispositivos caseros de la
            época por un melómano entusiasta, la calidad de los videos es
            irregular, tanto en audio como en video.
          </p>

          <img src={IMAGE_2} alt="" />
        </div>

        <div className="flex items-center justify-between gap-x-6 mb-8">
          <img src={IMAGE_3} alt="" />

          <div>
            <h3 className="text-4xl text-[#994878] tracking-[10px] mb-[21px]">
              SUBTÍTULO
            </h3>
            <p className="text-[#999EA1]">
              El Canal 22, otrora dependiente de Conaculta y en la actualidad de
              la Secretaría de Cultura, ha grabado y transmitido,
              principalmente, producciones de la Ópera de Bellas Artes en años
              recientes —un par de décadas—, con lo que salva de la inexistencia
              a esa documentación. Aunque es claro que estas grabaciones no
              forman en sí un catálogo o acervo público y que —si bien ha
              destinado un espacio operístico en su programación de manera
              constante— algunas producciones solo han pasado al aire una vez en
              el mejor de los casos o, en rigor, se mantienen inéditas, en
              espera de que llegue su turno. En décadas anteriores, en la era
              predigital, otras televisoras como Canal 9, Canal 13 o Canal 11
              transmitieron funciones de ópera, siendo esta última señal,
              dependiente del Instituto Politécnico Nacional, la que se ocupara
              especialmente de registrar el quehacer operístico en Bellas Artes.
              Sin embargo, ese catálogo no fue conservado, en aras de reutilizar
              las cintas en las que se habían grabado decenas de producciones
              líricas. Pero uno de los empeños más entusiastas para subsanar ese
              vacío audiovisual que padece la ópera en México ha sido el
              realizado por el exproductor y exasesor musical televisivo Manuel
              Yrízar Rojas, quien no solo ayudara a grabar numerosas funciones a
              partir de su labor en Canal 11 y Canal 22 en décadas anteriores,
              sino que ahora, en
            </p>
          </div>
        </div>

        <p className="text-[#999EA1] mb-8">
          Al margen de suponer un esfuerzo titánico en el que se invierte tiempo
          y voluntad, se trata de una valiosa labor que reúne materiales de gran
          interés documental, pues, además de mostrar el surgimiento, desarrollo
          u ocaso de varias generaciones de cantantes, directores y creativos
          mexicanos en conjunto con las personalidades músico-vocales que han
          visitado nuestro país, también hay testimonio de estrenos operísticos
          del catálogo nacional e indirectamente el reflejo de las tendencias en
          la programación artística, el nivel de la actividad operística en
          México, así como el gusto —o rechazo— del público por obras,
          compositores e intérpretes. Por desgracia, y como podría suponerse a
          partir de un registro particular tomado de la televisión con
          dispositivos caseros de la época por un melómano entusiasta, la
          calidad de los videos es irregular, tanto en audio como en video. Si
          bien fueron digitalizados previamente, los materiales no están
          remasterizados ni fueron sujetos a algún proceso de mejora
          audiovisual. Por el contrario, algunos videos sufren de “nieve”,
          negros o diversas distorsiones.
        </p>

        <div className="flex items-center gap-x-[28px] mb-20">
          <p className="font-bold">COMPARTIR:</p>
          <div className="flex items-center gap-x-6">
            <Facebook fill="black" stroke="transparent" />
            <Twitter fill="black" stroke="transparent" />
            <Linkedin fill="black" stroke="transparent" />
          </div>
        </div>

        <div className="mx-auto space-x-11 mb-[91px]">
          <button className="w-[173px] h-[37px] border border-[#121212] font-bold">
            ANTERIOR
          </button>
          <button className="w-[173px] h-[37px] border border-transparent bg-black text-white font-bold">
            SIGUIENTE
          </button>
        </div>

        <div className="w-full max-w-[840px] py-12 px-6 mx-auto bg-[#D986BA] border-b-[16px] flex flex-col items-center border-b-[#994878] mb-[94px]">
          <p className="text-xl font-bold tracking-[6px] mb-9">
            SUSCRÍBITE A NUESTRO CONTENIDO
          </p>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Ingresa tu correo..."
              className="h-[42px] w-[355px] bg-white px-4 outline-none"
            />
            <button className="w-[173px] h-[42px] text-white bg-black">
              SUSCRIBIRSE
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default NewsByIdPage

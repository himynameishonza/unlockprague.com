import { Container } from '@/components/Container'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import classnames from 'classnames'
import { Transition, Dialog } from '@headlessui/react'

type SpeakerProps = {
  name: string
  bioEN: React.ReactNode
  bioORIGINAL: React.ReactNode
  image: string
  langSwitch: string
  rtl: boolean
}

const speakers = [
  {
    name: 'Assem Zhapisheva',
    bioEN: (
      <p>
        Assem is a journalist, scriptwriter and political activist. She is a
        co-founder of masa.media, an educational website focused on
        Kazakhstan&apos;s politics. She is also a founder of Til Kespek Joq, a
        publication and YouTube channel in Kazakh language that covers topics
        ignored by state media.
      </p>
    ),
    bioORIGINAL: (
      <p>
        Әсем журналист, сценарист және саяси белсенді. Ол Қазақстан саясаты
        туралы веб-басылымы – masa.media-ның және қазақ тіліндегі «Тіл Кеспек
        Жоқ» басылымы мен YouTube арнасының негізін қалаушысы.
      </p>
    ),
    image: '/speakers/Assem_Zhapisheva.png',
    langSwitch: 'Қазақша нұсқасы',
    rtl: false,
  },
  {
    name: 'Nata Albot',
    bioEN: (
      <>
        <p>
          Nata Albot is a journalist from Moldova, well-known for her activity
          as a TV producer, event organizer and content-creator with a prominent
          civic voice; Since 2013, she&apos;s been the head of Klumea - an NGO
          that works closely on preserving the cultural patrimony and supporting
          local producers and artisans; For ten years already, Klumea team has
          been organizing the biggest summer festivals in Moldova: IA Mania
          festival and Hodina Fest.
        </p>
        <p>
          Klumea is also involved in media projects promoting media literacy and
          civic activism. As part of the popular weekly podcast Internetu
          Grăiește (&quot;The Internet is talking&quot;/&quot;What&apos;s
          discussed on the internet&quot;), her team provides trustworthy
          information and opinions, debunks fake news and explains how
          propaganda works. Nata Albot is the author of two culinary books on
          gastronomic traditions from Moldova, one of which received the
          Gourmand World Cookbook Award. Simultaneously, Nata runs a
          Communication and Marketing agency focused on working especially with
          small and medium enterprises. Also, Nata is the co-owner of From The
          Heart Shop -{' '}
          <a href="https://www.fth.md" className="text-blue-500 underline">
            www.fth.md
          </a>{' '}
          - the largest gift shop from small producers in Moldova.
        </p>
      </>
    ),
    bioORIGINAL: (
      <>
        <p>
          Nata Albot este o jurnalistă din Moldova, binecunoscută pentru
          activitatea sa ca producătoare de televiziune, organizatoare de
          evenimente și creatoare de conținut, cu voce civică. Din 2013 Nata
          conduce Klumea, un ONG al cărui domenii de bază sunt: proiecte
          culturale, ce au drept scop salvarea patrimoniului cultural și
          susținerea producătorilor locali. În cadrul acestora, acum 10 ani s-au
          născut cele mai mari festivaluri din Moldova precum IA MANIA festival
          & HODINA FEST.
        </p>
        <p>
          Klumea realizează o serie de proiecte media, prin care promovează
          alfabetizarea media și activismului civic. În cadrul podcastului
          săptămânal Internetu Grăiește, echipa pe care o conduce informează,
          combate fake-ri și explică cum funcționează propaganda. Nata Albot
          este autoarea a două cărți de bucate, dedicate tradițiilor
          gastronomice din Moldova. Una din cărțile sale a fost premiată la
          Gourmand World Cookbook Award. În paralel, conduce cu o agenție de
          Comunicare și Marketing, care lucrează în special cu afacerile mici și
          mijlocii. De asemenea, Nata este co-proprietara From The Heart Shop
          <a href="https://www.fth.md" className="text-blue-500 underline">
            www.fth.md
          </a>{' '}
          - cel mai mare magazin de cadouri de la micii producători din Moldova.
        </p>
      </>
    ),
    image: '/speakers/Nata_Albot.jpg',
    langSwitch: 'Varianta romaneasca',
    rtl: false,
  },
  {
    name: 'Artur Atayan',
    bioEN: (
      <p>
        Artur is a producer and editor with Boon TV, the only Armenian
        educational TV company oriented towards culture, science and social
        change. He&apos;s into arts, music and education, so Boon TV is the
        ideal spot for him.
      </p>
    ),
    bioORIGINAL: (
      <p>
        Արթուր Աթայանը պրոդյուսեր և խմբագիր է Բուն TV-ում՝ միակ հայկական կրթական
        հեռուստաընկերությունում, որն ուղղված է դեպի մշակույթ, գիտություն և
        սոցիալական փոփոխություններ: Նա հետաքրքրված է արվեստներով, երաժշտությամբ
        և կրթությամբ, այնպես որ Բունն իդեալական տեղ է նրա համար:
      </p>
    ),
    image: '/speakers/Artur_Atayan.jpg',
    langSwitch: 'Հայերեն տարբերակ',
    rtl: false,
  },
  {
    name: 'Emma Antoniuk',
    bioEN: (
      <>
        <p>
          Emma is a Ukrainian blogger, promoter of reading, and the producer of
          the YouTube channel &quotNo One Will Watch This&quot, where she hosts
          hard talk interviews.
        </p>
        <p>
          She is also co-producer of the YouTube channel &quot;Palaye&quot;. In
          cooperation with journalist Yana Brenzei, they discuss difficult
          topics about the war in Ukraine, women&apos;s rights and LGBT+ issues.
        </p>
        <p>
          In January, Emma launched an initiative to provide books to schools,
          hubs and libraries in the de-occupied territories, where the Russians
          stole and burned Ukrainian books.
        </p>
      </>
    ),
    bioORIGINAL: (
      <>
        <p>
          Емма Антонюк - блогерка, популяризаторка читання, авторка ютуб-каналу
          &quot;Це ніхто не буде дивитись&quot;, де вона проводить інтерв&apos;ю
          у жанрі хард-ток.
        </p>
        <p>
          Співавторка ютуб-каналу &quot;Палає&quot;, де разом із журналісткою
          Яною Брензей вони обговорюють тригерні теми про російсько-українську
          війну, права жінок та ЛГБТ+. У січні Емма започаткувала ініціативу із
          забезпечення книжками шкіл, хабів та бібліотек на деокупованих
          територіях, де росіяни вилучали та спалювали українські книжки.
        </p>
      </>
    ),
    image: '/speakers/Emma_Antonyuk.jpg',
    langSwitch: 'Українська версія',
    rtl: false,
  },
  {
    name: 'Daniyar Amanaliev',
    bioEN: (
      <>
        <p>Daniyar is the co-founder of Ololo group in Kyrgyzstan. </p>
        <p>
          Ololo group of companies includes a chain of creative hubs in Bishkek
          and Osh, ololoAkJol co-working resort, ololoFamily art hotel on
          Issyk-Kul, John Galt business accelerator, Liberterra real estate
          management company, OloloEvents agency, OloloMedia digital agency,
          WelcomeKG and Ololo creative impact fund, which are aimed at
          developing female entrepreneurship and creative businesses.
        </p>
        <p>
          He is a member of Global Creative Economy Council, a co-founder and
          Supervisory Board member of KG Analytics think tank, and a co-founder
          and Chairman of Kyrgyzstan&apos;s Creative Industries Association.
        </p>
      </>
    ),
    bioORIGINAL: (
      <>
        <p>
          Ololo компаниялар тобунун тең негиздөөчүсү жана бизнес-дирижеру,
          Кыргызстан. ololo компаниялар тобуна: Бишкек жана Ош шаарларындагы
          креативдүү хабдар тармагы, ololoAkJol коворкинг курорту жана
          Ысык-Көлдөгү ololoFamily арт мейманканасы, John Galt бизнес
          акселератору, Liberterra кыймылсыз мүлк башкаруу компаниясы,
          ololoEvents иш-чаралар агенттиги, ololoMedia санарип агенттиги,
          WelcomeKG жана аялдардын ишкердиги менен чыгармачыл бизнесин
          өнүктүрүүгө багытталган фонд ololo creative impact fund кирет. Данияр
          Global Creative Economy Council мүчөсү, &quot;KG Analytics&quot;
          интеллектуалдык фондунун тең негиздөөчүсү жана байкоочу кеңешинин
          мүчөсү, Кыргызстандагы Креативдүү индустриялар Ассоциациясынын (КИА)
          төрагасы
        </p>
      </>
    ),
    image: '/speakers/Daniar_Amanaliev.jpg',
    langSwitch: 'Кыргызча варианты',
    rtl: false,
  },
  {
    name: 'Duman Smakov',
    bioEN: (
      <>
        <p>
          Duman is the editor-in-chief of Factcheck.kz. He studied at the
          Faculty of Journalism of Al-Farabi Kazakh National University. Since
          2015, he has been working at MediaNet International Journalism Center.
          His areas of expertise include open sources of information and their
          reliability, the work of non-governmental organisations in Kazakhstan,
          working with national languages, crisis communication, effective
          management of non-governmental organisations, fighting hate speech
          directed at minority groups, and media and information literacy.
        </p>
      </>
    ),
    bioORIGINAL: (
      <>
        <p>
          Думан Смақов - Әлеуметтік ғылымдар магистрі, Factcheck.kz сайтының бас
          редакторы. Думан Смақов әл-Фараби атындағы Қазақ ұлттық
          университетінің журналистика факультетінде оқыған. 2015 жылдан бастап
          MediaNet Халықаралық журналистика орталығында жұмыс істейді. 2018
          жылдан бастап Factcheck.kz сайтының бас редакторы. Думан фактчекинг,
          фактчекингті ақпараттық кампанияға қолдану әдістері, ақпараттық
          қауіпсздік және ондағы фактчекинг рөлі, ашық ақпарат көздері мен
          олардың сенімділігі, Қазақстандағы үкіметтік емес ұйымдардың жұмысы,
          ұлттық тілдермен жұмыс істеудегі басымдылық, кризистік коммуникация,
          үкіметтік емес ұйымдарды эффективті басқару, азшыл топтарға
          бағытталған өшпенлілік тіліне қарсы тұру, ұлттық тілдердегі ақпаратты
          мониторинг жасау ерекшеліктері, журналистік және медиа білім беру,
          медиа және ақпараттық сауат, ұлттық тілдердегі ақпарат тарату
          ерекшеліктері, ұлттық заңдардағы репрессивті әдістер және оларға қарсы
          ақпараттық кампания сынды тақырыптарды зерттеумен айналысады.
        </p>
      </>
    ),
    image: '/speakers/Duman_Smakov.jpg',
    langSwitch: 'Қазақша нұсқасы',
    rtl: false,
  },
  // {
  //   name: 'Ainur Zarintac',
  //   bioEN: (
  //     <p>
  //       Aynur is the founder of Ritual Mobile Theatre Laboratory, as well as a director, actress and cultural events curator. In 2022, She obtained a master's degree in Theatre Directing at the University of York, England.  Her master's diploma thesis was a play called "Mimmy" based on her personal experiences in the First and Second Karabakh Wars and children's diaries about the Bosnian War. Additionally,  she is the director of the plays   "Gender Mirror", which deals with  social problems, and "Be with us!", which is dedicated to the topic of inclusive society. She is also the co-director of the VR Shadow play titled "The Adventures of Jonathan, the Turtoise".  She has been working for the last five years in theatre education in Azerbaijan.
  //     </p>
  //   ),
  //   bioORIGINAL: (
  //     <p>
  //       Aynur Zərrintac - Ritual Mobil Teatr Laboratoriyasının təsisçisi, teatr
  //       rejissoru, aktrisa və mədəniyyət üzrə tədbirlər kuratorudur. O,
  //       2021-2022-ci illərdə İngiltərənin York Universitetində Teatr
  //       Rejissorluğu ixtisası üzrə magistr təhsili almışdır. Birləşmiş Krallığın
  //       Chevening təqaüdü, Almaniya Federativ Respublikasının Xarici İşlər
  //       Nazirliyinin təcrübə və ABŞ hökümətinin Beynəlxalq Könüllü Liderlər
  //       proqramlarının məzunudur. Azərbaycanda əsas təhsil və teatr sahəsində 5
  //       ildir ki, təlimçi-rejissor kimi fəaliyyət göstərir. İngiltərədə I və II
  //       Qarabağ Müharibəsindəki şəxsi təcrübələri və Bosniya müharibəsindən bəhs
  //       edən uşaq gündəlikləri əsasında hazırladığı &quot;Mimi&quot; adlı
  //       sənədli tamaşa ilə diplom işini təqdim etmişdir. Bundan başqa o, sosial
  //       problemlərdən bəhs edən &quot;Gender Güzgüsü&quot;, inklüziv cəmiyyət
  //       mövzusuna həsr edilmiş &quot;Bizimlə ol!&quot; sosial tamaşaların
  //       rejissoru, &quot;Tısbağa Conatanın Macərası&quot; adlı VR Kölgə
  //       tamaşasının həm-rejissorudur.
  //     </p>
  //   ),
  //   image: '/speakers/blank.jpeg',
  //   langSwitch: 'Azərbaycan versiyası',
  //   rtl: false,
  // },
  {
    name: 'Aisana Ashim',
    bioEN: (
      <p>
        Aisana is a journalist, media entrepreneur, and a civic and feminism
        activist. She is the founder of three independent media outlets in
        Kazakhstan: The Village Kazakhstan, MASA Media, and Batyr Jamal.
      </p>
    ),
    bioORIGINAL: (
      <p>
        Журналист, медиа-кәсіпкер, азаматтық және фем-белсенді. Қазақстандағы үш
        тәуелсіз БАҚ-тың негізін қалаушы: The Village Kazakhstan, MASA Media,
        Батыр Жамал.
      </p>
    ),
    image: '/speakers/Aisana_Ashim.jpg',
    langSwitch: 'Қазақша нұсқасы',
    rtl: false,
  },
  {
    name: 'Mariam Naiem',
    bioEN: (
      <>
        <p>
          Mariam is a Ukrainian of Afghan origin. She has a degree in cultural
          studies, and speaks, teaches, and write on topics of culture.
        </p>
        <p>
          Since the start of Russia&apos;s full-scale invasion of Ukraine, she
          has been working to educate the English-speaking world on the cultral
          context of the war. In particular, she aims to bring understanding of
          Russian colonialism and cultural repression inflicted on Ukraine and
          Russia&apos;s other neighbors. She also works on decolonising the
          discourse on Ukraine in order to centre Ukrainian voices and debunk
          Russian and pro-Russian imperialist narratives. She aims to be a
          bridge between English-speaking audiences and Ukrainians.
        </p>
      </>
    ),
    bioORIGINAL: (
      <>
        <p>
          Маріам Найєм, українка афганського походження. Має культурологічну
          освіту та протягом останніх 8ми років виступає, викладає та пише на
          теми культури.
        </p>
        <p>
          З початку повномасштабного вторгнення Росії в Україну намагається
          пояснити культурний контекст російської війни в Україні для
          англомовної аудиторії. Зокрема, прагне принести розуміння колоніальних
          та расових аспектів, практик російської культури щодо України та інших
          народів, колонізованих Росією. Також працює над деколонізацією
          дискурсу про Україну, щоб центрувати українські голоси та децентрувати
          російські імперіалістичні наративи.
        </p>
      </>
    ),
    image: '/speakers/Mariam_Naiem.jpg',
    langSwitch: 'Українська версія',
    rtl: false,
  },
  {
    name: 'Timur Temirtas',
    bioEN: (
      <p>
        Temirtas is an architect, researcher, cultural activist and curator from
        Astana. As the founder of the Fading.TSE research platform, he works
        with urban communities in Kazakhstan to implement educational and civic
        initiatives related to cultural heritage, visual identity, historical
        memory, and the right to the city.
      </p>
    ),
    bioORIGINAL: (
      <p>
        Теміртаc — cәулетші, зерттеуші, мәдени белсенді және куратор. Ол
        Қазақстандағы қалалық қауымдастықтармен жұмыс істейтін, мәдени мұра,
        көрнекі бірегейлігі, тарихи жады және &quot;қалаға құқық&quot;
        тақырыбына қатысты білім беру және азаматтық бастамаларды жүзеге
        асыратын Fading.TSE зерттеу платформасының негізін қалаушысы.
      </p>
    ),
    image: '/speakers/Temirtas_Iskakov.jpeg',
    langSwitch: 'Қазақша нұсқасы',
    rtl: false,
  },
]

export function Speakers() {
  const [selectedDay, setSelectedDay] = useState(0)
  const [detailOpened, setDetailOpened] = useState(false)
  const [originalLang, setOriginalLang] = useState(false)
  const [data, setData] = useState<SpeakerProps>({
    name: '',
    bioEN: <></>,
    bioORIGINAL: <></>,
    image: '',
    langSwitch: '',
    rtl: false,
  })

  const setSpeaker = (speaker) => {
    setOriginalLang(false)
    setDetailOpened(true)
    setData(speaker)
  }

  const closeBio = () => {
    setDetailOpened(false)
  }

  return (
    <>
      <Transition appear show={detailOpened} as={Fragment}>
        <Dialog as="div" className="relative z-[999]" onClose={closeBio}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                  <div className="flex gap-8 p-6">
                    <div className="space-y-4">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-medium leading-6 text-rose-500"
                      >
                        {data.name}
                      </Dialog.Title>

                      <div className="space-y-4 text-left text-slate-600">
                        {originalLang ? data.bioORIGINAL : data.bioEN}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-4 border-t border-slate-100 p-4">
                    <a
                      className={classnames(
                        'inline-flex cursor-pointer rounded bg-slate-50 px-3 py-2 font-medium text-slate-500 transition-all hover:bg-slate-200'
                      )}
                      style={{ direction: data.rtl ? 'rtl' : 'ltr' }}
                      onClick={() => setOriginalLang(!originalLang)}
                    >
                      {originalLang ? 'Show in English' : data.langSwitch}
                    </a>
                    <a
                      className="inline-flex cursor-pointer rounded bg-rose-500 px-3 py-2 font-medium text-white transition-all hover:bg-slate-200"
                      onClick={closeBio}
                    >
                      Close
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <section
        id="speakers"
        aria-labelledby="Speakers"
        className="bg-white py-20"
      >
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2
              id="speakers-title"
              className="font-display text-4xl font-medium tracking-tighter text-slate-800 sm:text-5xl"
            >
              Speakers
            </h2>
            <p className="mt-4 font-display text-xl tracking-tight text-slate-600 lg:text-2xl">
              This year we’ll welcome over 30 speakers. Check this space for
              updates.
            </p>
          </div>

          {/* <div className="mt-10 flex gap-4 border-b pb-4 pr-8">
            <a
              onClick={() => setSelectedDay(0)}
              className={classnames(
                'cursor-pointer p-2 text-lg font-medium',
                selectedDay === 0 ? 'text-rose-500' : 'text-slate-500'
              )}
            >
              May 25
            </a>
            <a
              onClick={() => setSelectedDay(1)}
              className={classnames(
                'cursor-pointer p-2 text-lg font-medium',
                selectedDay === 1 ? 'text-rose-500' : 'text-slate-500'
              )}
            >
              May 26
            </a>
            <a
              onClick={() => setSelectedDay(2)}
              className={classnames(
                'cursor-pointer p-2 text-lg font-medium',
                selectedDay === 2 ? 'text-rose-500' : 'text-slate-500'
              )}
            >
              Artists
            </a>
          </div> */}

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-12 sm:grid-cols-2 lg:max-w-7xl lg:grid-cols-3">
            {speakers.map((speaker, i) => {
              return (
                <div key={i} className="flex items-center gap-4">
                  <div className="relative aspect-square w-24 rounded-2xl rounded-bl-3xl rounded-tr-3xl border-2 border-rose-300 ring-4 ring-rose-50">
                    <Image
                      src={speaker.image}
                      fill
                      alt=""
                      className="rounded-2xl rounded-tr-3xl rounded-bl-3xl object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-900">
                      {speaker.name}
                    </h3>
                    <a
                      onClick={() => setSpeaker(speaker)}
                      className="mt-1 inline-flex cursor-pointer rounded bg-transparent px-2 py-1 pl-0 text-sm text-rose-500 transition-all hover:bg-rose-500 hover:pl-2 hover:text-white"
                    >
                      About this speaker
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}

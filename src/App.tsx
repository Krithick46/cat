import { useState, useRef, useCallback } from 'react'
import {
  CatLogo, SlimCardIcon, ProCardIcon, ArrowRight,
  Step1Icon, Step2Icon, Step3Icon, Step4Icon,
  VKIcon, InstagramIcon, FacebookIcon, HTMLAcademyIcon
} from './components/Icons'

type NavKey = 'glavnaya' | 'katalog' | 'podbor'
type CornerStyle = 'Sharp' | 'Rounded'

function LogoBrand({ color }: { color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
      <CatLogo style={{ width: 19, height: 26, color }} />
      <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 24, letterSpacing: 1, lineHeight: 1 }}>
        <span style={{ fontWeight: 700, color: '#111' }}>CAT</span>
        &nbsp;
        <span style={{ fontWeight: 400, color: '#444' }}>ENERGY</span>
      </div>
    </div>
  )
}

function HeroSection({
  accent, radius, activeNav, onNav
}: {
  accent: string
  radius: string
  activeNav: NavKey
  onNav: (k: NavKey) => void
}) {
  const navBorder = (k: NavKey) => activeNav === k ? '2px solid #fff' : '2px solid transparent'

  return (
    <div style={{ position: 'relative', width: 1440, height: 696, overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: 0, left: 720, width: 720, height: 696,
        background: 'url(/assets/header-cat-bg.png) center / cover no-repeat'
      }} />

      {/* top bar */}
      <div style={{
        position: 'absolute', top: 53, left: 110, width: 1220, height: 40,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <LogoBrand color={accent} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {([
            ['glavnaya', 'главная'],
            ['katalog', 'каталог продукции'],
            ['podbor', 'подбор программы'],
          ] as [NavKey, string][]).map(([key, label]) => (
            <span
              key={key}
              onClick={() => onNav(key)}
              style={{
                fontFamily: 'Oswald, sans-serif', fontSize: 20, color: '#fff',
                textTransform: 'uppercase', cursor: 'pointer',
                paddingBottom: 6, borderBottom: navBorder(key)
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div style={{
        position: 'absolute', top: 143, left: 558, width: 552, height: 499,
        background: 'url(/assets/can.png) center / contain no-repeat', zIndex: 2
      }} />

      <h1 style={{
        position: 'absolute', top: 215, left: 190, width: 440, margin: 0,
        fontFamily: 'Oswald, sans-serif', fontWeight: 400, fontSize: 60,
        lineHeight: '60px', color: '#000', zIndex: 3
      }}>
        Функциональное<br />питание для котов
      </h1>
      <div style={{
        position: 'absolute', top: 385, left: 190,
        fontFamily: 'Oswald, sans-serif', fontWeight: 400, fontSize: 20, color: '#000', zIndex: 3
      }}>
        Занялся собой? Займись котом!
      </div>
      <button
        style={{
          position: 'absolute', top: 457, left: 190,
          border: 'none', cursor: 'pointer',
          background: accent, borderRadius: radius,
          padding: '16px 36px',
          fontFamily: 'Oswald, sans-serif', fontWeight: 400, fontSize: 20,
          textTransform: 'uppercase', color: '#fff', zIndex: 3
        }}
      >
        подобрать программу
      </button>
    </div>
  )
}

function ProductCards({ accent, radius }: { accent: string; radius: string }) {
  return (
    <div style={{ padding: '0 110px', marginTop: 80, display: 'flex', gap: 80 }}>
      {/* Похудение */}
      <div style={{
        position: 'relative', width: 570, height: 374,
        background: '#f2f2f2', borderRadius: radius, overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', left: 52, top: 41, width: 100, height: 106 }}>
          <div style={{
            position: 'absolute', top: 6, left: 0, width: 100, height: 100,
            borderRadius: '50%', background: accent
          }} />
          <SlimCardIcon style={{ position: 'absolute', left: 15, top: 0, width: 70, height: 97, color: '#000' }} />
        </div>
        <div style={{
          position: 'absolute', left: 214, top: 71,
          fontFamily: 'Oswald, sans-serif', fontSize: 36, textTransform: 'uppercase', color: '#000'
        }}>
          похудение
        </div>
        <p style={{
          position: 'absolute', left: 52, top: 182, width: 467, margin: 0,
          fontSize: 16, lineHeight: '24px', color: '#000'
        }}>
          Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.
        </p>
        <a href="#" style={{
          position: 'absolute', left: 52, top: 285,
          display: 'flex', alignItems: 'center', gap: 28, textDecoration: 'none'
        }}>
          <span style={{
            fontFamily: 'Oswald, sans-serif', fontSize: 20, textTransform: 'uppercase', color: '#000'
          }}>каталог slim</span>
          <ArrowRight />
        </a>
      </div>

      {/* Набор массы */}
      <div style={{
        position: 'relative', width: 570, height: 374,
        background: '#f2f2f2', borderRadius: radius, overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', left: 33, top: 47, width: 134, height: 100 }}>
          <div style={{
            position: 'absolute', top: 0, left: 19, width: 100, height: 100,
            borderRadius: '50%', background: accent
          }} />
          <ProCardIcon style={{ position: 'absolute', left: 0, top: 20, width: 134, height: 56, color: '#000' }} />
        </div>
        <div style={{
          position: 'absolute', left: 214, top: 71,
          fontFamily: 'Oswald, sans-serif', fontSize: 36, textTransform: 'uppercase', color: '#000'
        }}>
          набор массы
        </div>
        <p style={{
          position: 'absolute', left: 52, top: 182, width: 460, margin: 0,
          fontSize: 16, lineHeight: '24px', color: '#000'
        }}>
          Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!
        </p>
        <a href="#" style={{
          position: 'absolute', left: 52, top: 285,
          display: 'flex', alignItems: 'center', gap: 26, textDecoration: 'none'
        }}>
          <span style={{
            fontFamily: 'Oswald, sans-serif', fontSize: 20, textTransform: 'uppercase', color: '#000'
          }}>каталог pro</span>
          <ArrowRight />
        </a>
      </div>
    </div>
  )
}

function HowItWorks({ accent }: { accent: string }) {
  const steps = [
    {
      num: '1',
      Icon: Step1Icon,
      text: 'Функциональное питание содержит только полезные питательные вещества.',
      textWidth: 205,
    },
    {
      num: '2',
      Icon: Step2Icon,
      text: 'Выпускается в виде порошка, который нужно лишь залить кипятком и готово.',
      textWidth: 227,
    },
    {
      num: '3',
      Icon: Step3Icon,
      text: 'Замените один-два приема обычной еды на наше функциональное питание.',
      textWidth: 209,
    },
    {
      num: '4',
      Icon: Step4Icon,
      text: 'Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!',
      textWidth: 245,
    },
  ]

  return (
    <div style={{ padding: '0 110px', marginTop: 71 }}>
      <h2 style={{
        margin: 0, fontFamily: 'Oswald, sans-serif', fontWeight: 400,
        fontSize: 60, lineHeight: '60px', color: '#000'
      }}>
        Как это работает
      </h2>
      <div style={{ marginTop: 32, display: 'flex', justifyContent: 'space-between' }}>
        {steps.map(({ num, Icon, text, textWidth }) => (
          <div key={num} style={{ position: 'relative', width: 250, height: 280, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', top: 0, right: 4,
              fontFamily: 'Oswald, sans-serif', fontSize: 280, lineHeight: '280px',
              color: '#f2f2f2', zIndex: 0
            }}>
              {num}
            </div>
            <div style={{
              position: 'absolute', top: 40, left: 0, width: 80, height: 80,
              background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1
            }}>
              <Icon style={{ width: 30, height: 32, color: '#fff' }} />
            </div>
            <p style={{
              position: 'absolute', top: 151, left: 0, width: textWidth, margin: 0,
              fontSize: 16, lineHeight: '24px', color: '#444', zIndex: 1
            }}>
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function LiveExample({ accent, radius }: { accent: string; radius: string }) {
  const [pos, setPos] = useState(50)
  const trackRef = useRef<HTMLDivElement>(null)

  const drag = useCallback((clientX: number) => {
    const el = trackRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const p = ((clientX - r.left) / r.width) * 100
    setPos(Math.max(0, Math.min(100, p)))
  }, [])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault()
    drag(e.clientX)
    const mv = (ev: PointerEvent) => drag(ev.clientX)
    const up = () => {
      window.removeEventListener('pointermove', mv)
      window.removeEventListener('pointerup', up)
    }
    window.addEventListener('pointermove', mv)
    window.addEventListener('pointerup', up)
  }, [drag])

  const TRACK_W = 428
  const KNOB_W = 34
  const knobLeft = (pos / 100) * (TRACK_W - KNOB_W)
  const wasWeight = pos < 50 ? 600 : 400
  const stalWeight = pos >= 50 ? 600 : 400

  return (
    <div style={{ position: 'relative', width: 1440, height: 656, marginTop: 11, overflow: 'hidden' }}>
      <h2 style={{
        position: 'absolute', top: 58, left: 110, margin: 0,
        fontFamily: 'Oswald, sans-serif', fontWeight: 400, fontSize: 60, lineHeight: '60px', color: '#000'
      }}>
        Живой пример
      </h2>
      <div style={{ position: 'absolute', top: 194, left: 0, width: 1440, height: 462, background: '#f2f2f2' }} />
      <div style={{ position: 'absolute', top: 194, left: 1045, width: 395, height: 462, background: '#eaeaea' }} />

      {/* left text */}
      <div style={{ position: 'absolute', top: 264, left: 110, width: 436 }}>
        <p style={{ margin: 0, width: 436, fontSize: 16, lineHeight: '24px', color: '#444' }}>
          Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim. Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек и по-прежнему спит по 16 часов в день.
        </p>
        <div style={{ marginTop: 45, display: 'flex', gap: 42 }}>
          <div style={{
            position: 'relative', width: 162, height: 72, border: '1px solid #cdcdcd',
            borderRadius: radius, display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: 30, color: '#000' }}>5 КГ</span>
            <span style={{
              position: 'absolute', bottom: -7, left: '50%', transform: 'translateX(-50%)',
              background: '#f2f2f2', padding: '0 7px', fontSize: 14, color: '#444', whiteSpace: 'nowrap'
            }}>снижение веса</span>
          </div>
          <div style={{
            position: 'relative', width: 162, height: 72, border: '1px solid #cdcdcd',
            borderRadius: radius, display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: 30, color: '#000' }}>60 ДНЕЙ</span>
            <span style={{
              position: 'absolute', bottom: -7, left: '50%', transform: 'translateX(-50%)',
              background: '#f2f2f2', padding: '0 7px', fontSize: 14, color: '#444', whiteSpace: 'nowrap'
            }}>затрачено времени</span>
          </div>
        </div>
        <div style={{
          marginTop: 56,
          fontFamily: 'Oswald, sans-serif', fontSize: 20, textTransform: 'uppercase', color: '#000'
        }}>
          Затраты на питание:&nbsp;&nbsp;15 000 руб.
        </div>
      </div>

      {/* before/after images */}
      <div style={{ position: 'absolute', top: 0, left: 680, width: 690, height: 656 }}>
        <div style={{
          position: 'absolute', top: 120, left: 0, width: 365, height: 536,
          background: 'url(/assets/before.png) bottom center / contain no-repeat'
        }} />
        <div style={{
          position: 'absolute', top: 2, left: 365, width: 325, height: 654,
          background: 'url(/assets/after.png) bottom center / contain no-repeat'
        }} />
      </div>

      {/* slider */}
      <span style={{
        position: 'absolute', left: 745, top: 561,
        fontFamily: 'Oswald, sans-serif', fontSize: 20, textTransform: 'uppercase',
        color: '#000', fontWeight: wasWeight
      }}>
        было
      </span>
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        style={{
          position: 'absolute', left: 831, top: 555, width: TRACK_W, height: 34, cursor: 'pointer'
        }}
      >
        <div style={{
          position: 'absolute', left: 0, top: 14, width: TRACK_W, height: 6,
          borderRadius: 6, background: '#dcdcdc'
        }} />
        <div style={{
          position: 'absolute', top: 0, left: knobLeft, width: KNOB_W, height: KNOB_W,
          borderRadius: '50%', background: '#fff', border: '1px solid #cdcdcd',
          boxShadow: '0 1px 3px rgba(0,0,0,0.16)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: accent }} />
        </div>
      </div>
      <span style={{
        position: 'absolute', left: 1270, top: 561,
        fontFamily: 'Oswald, sans-serif', fontSize: 20, textTransform: 'uppercase',
        color: '#000', fontWeight: stalWeight
      }}>
        стало
      </span>
    </div>
  )
}

function LocationSection({ showMapPin }: { showMapPin: boolean }) {
  return (
    <div style={{ position: 'relative', width: 1440, height: 400, overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'url(/assets/map.png) center / cover no-repeat'
      }} />
      {showMapPin && (
        <div style={{
          position: 'absolute', left: 908, top: 131, width: 113, height: 106,
          background: 'url(/assets/map-pin.png) center / contain no-repeat'
        }} />
      )}
      <div style={{
        position: 'absolute', left: 110, top: 95, width: 570, height: 201,
        background: '#fff', display: 'flex', alignItems: 'flex-start',
        justifyContent: 'space-between', padding: '38px 60px'
      }}>
        <div style={{
          width: 200, fontFamily: 'Oswald, sans-serif', fontSize: 20, lineHeight: '22px',
          textTransform: 'uppercase', color: '#111'
        }}>
          приглашаем к сотрудничеству дилеров!
        </div>
        <div style={{
          fontFamily: 'Oswald, sans-serif', fontSize: 20, lineHeight: '22px', color: '#111', textAlign: 'left'
        }}>
          ул. Большая<br />Конюшенная, д. 19/8<br />Санкт-Петербург
        </div>
      </div>
    </div>
  )
}

function FooterSection({ accent }: { accent: string }) {
  return (
    <div style={{ width: 1440, background: '#f2f2f2' }}>
      <div style={{
        padding: '58px 110px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <LogoBrand color={accent} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <a href="#" style={{ display: 'block', width: 29, height: 17 }}>
            <VKIcon style={{ width: 29, height: 17, color: '#666' }} />
          </a>
          <a href="#" style={{ display: 'block', width: 23, height: 23 }}>
            <InstagramIcon style={{ width: 23, height: 23, color: '#666' }} />
          </a>
          <a href="#" style={{ display: 'block', width: 13, height: 27 }}>
            <FacebookIcon style={{ width: 13, height: 27, color: '#666' }} />
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <span style={{ fontSize: 16, color: '#444' }}>HTML Academy</span>
          <HTMLAcademyIcon style={{ width: 27, height: 34, color: '#666' }} />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [accentColor] = useState('#68B738')
  const [cornerStyle] = useState<CornerStyle>('Sharp')
  const [showMapPin] = useState(true)
  const [activeNav, setActiveNav] = useState<NavKey>('glavnaya')

  const radius = cornerStyle === 'Rounded' ? '8px' : '0px'

  return (
    <div style={{
      width: 1440,
      margin: '0 auto',
      background: '#fff',
      fontFamily: 'Arial, Helvetica, sans-serif',
      color: '#000',
      position: 'relative',
      overflow: 'hidden',
    } as React.CSSProperties}>
      <HeroSection accent={accentColor} radius={radius} activeNav={activeNav} onNav={setActiveNav} />
      <ProductCards accent={accentColor} radius={radius} />
      <HowItWorks accent={accentColor} />
      <LiveExample accent={accentColor} radius={radius} />
      <LocationSection showMapPin={showMapPin} />
      <FooterSection accent={accentColor} />
    </div>
  )
}

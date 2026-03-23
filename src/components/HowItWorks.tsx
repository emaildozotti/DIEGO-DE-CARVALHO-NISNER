import { FadeIn } from '../App'

const passos = [
  {
    num: '01',
    titulo: 'Conversa Inicial',
    descricao: 'Nossa primeira conversa é gratuita e sem compromisso. Quero entender sua situação e você terá espaço para entender o que faço e como trabalho. A decisão de avançar é sempre sua.',
  },
  {
    num: '02',
    titulo: 'O Processo',
    descricao: 'As sessões são semanais, online, com duração de 50 minutos. O trabalho vai à raiz dos padrões relacionais, não apenas ao conflito mais recente. Cada sessão tem propósito definido.',
  },
  {
    num: '03',
    titulo: 'A Transformação',
    descricao: 'Com o tempo, você começa a se enxergar para além da relação. A decisão de ficar ou sair deixa de vir do medo e passa a vir de um centro claro. Não é que o amor some. É que ele para de ser sua única ancoragem.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-bg-light">
      <div className="container-ultra">

        <FadeIn>
          <h2 className="font-display font-normal text-heading text-3xl md:text-4xl leading-tight mb-16">
            Como é o <span className="text-primary">acompanhamento</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {passos.map((passo, i) => (
            <FadeIn key={passo.num} delay={i * 0.15}>
              <div className="relative p-8 bg-white rounded-sm editorial-line overflow-hidden h-full">
                {/* Número decorativo */}
                <span
                  className="absolute top-4 right-4 font-display text-7xl text-primary/8 leading-none select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {passo.num}
                </span>
                <h3 className="font-sub font-semibold text-text-main text-lg mb-4">
                  {passo.titulo}
                </h3>
                <p className="font-sans font-light text-text-main/75 text-sm md:text-base leading-relaxed">
                  {passo.descricao}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="font-sans font-light text-text-main/70 text-base leading-relaxed max-w-xl">
            Atendo online, o que significa que você pode começar de onde estiver.
            Não há burocracia no processo. Se fizer sentido na conversa inicial, avançamos juntos.
          </p>
        </FadeIn>

      </div>
    </section>
  )
}

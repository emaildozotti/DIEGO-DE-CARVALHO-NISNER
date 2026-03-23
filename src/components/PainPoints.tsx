import { FadeIn } from '../App'

const dores = [
  {
    num: '01',
    texto: 'Você faz tudo por essa relação e ainda assim parece que não é suficiente.',
  },
  {
    num: '02',
    texto: 'Quando ele ou ela vai embora, vai junto o senso de quem você é.',
  },
  {
    num: '03',
    texto: 'Você fica. Não por amor. Por medo de descobrir o que sobra de você sem aquela pessoa.',
  },
  {
    num: '04',
    texto: 'Passou anos nessa relação e terminar agora parece jogar fora tudo que construiu.',
  },
]

export default function PainPoints() {
  return (
    <section id="dores" className="section-padding-lg bg-bg-light">
      <div className="container-ultra">

        <FadeIn>
          <p className="font-sub font-normal italic text-primary text-lg md:text-xl leading-relaxed mb-16 max-w-2xl">
            Conheço esse padrão. Estive dentro das casas que ninguém vai ouvir falar, antes de qualquer consultório.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {dores.map((dor, i) => (
            <FadeIn key={dor.num} delay={i * 0.1}>
              <div className="relative bg-white p-10 rounded-sm editorial-line overflow-hidden">
                {/* Número decorativo */}
                <span
                  className="absolute top-4 right-6 font-display text-8xl text-primary/8 leading-none select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {dor.num}
                </span>
                <p className="font-sans font-light text-text-main text-base md:text-lg leading-relaxed relative z-10">
                  {dor.texto}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="font-sub font-semibold text-primary text-xl md:text-2xl leading-relaxed">
            Esse vazio tem raiz. E raiz não muda com conversa de casal.
          </p>
        </FadeIn>

      </div>
    </section>
  )
}

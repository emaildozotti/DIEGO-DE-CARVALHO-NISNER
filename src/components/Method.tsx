import { FadeIn } from '../App'

const pilares = [
  {
    num: '01',
    titulo: 'Causa Raiz, Não Sintoma',
    descricao: 'Cada sessão vai ao que está por baixo do conflito: o padrão, o vazio, o que o vínculo está tentando esconder. Sem isso, o trabalho resolve a briga mas deixa a raiz intacta.',
  },
  {
    num: '02',
    titulo: 'Identidade Antes de Relacionamento',
    descricao: 'Vínculo saudável exige dois inteiros, não dois que se completam. O trabalho reconstrói o eixo individual que permite escolher estar numa relação, não depender dela.',
  },
  {
    num: '03',
    titulo: 'Verdade Clínica, Sem Promessa',
    descricao: 'Não prometo salvar o casamento. Não prometo reconciliação. Prometo uma escuta honesta e um processo que respeita a sua autonomia acima de qualquer resultado.',
  },
]

export default function Method() {
  return (
    <section id="metodo" className="section-padding-lg bg-bg-light">
      <div className="container-ultra">

        <FadeIn>
          <p className="eyebrow-ultra text-primary mb-4 tracking-widest">Método</p>
          <h2 className="font-display font-normal text-heading text-3xl md:text-5xl leading-tight mb-4">
            Psicologia Analítica Aplicada ao <span className="text-primary">Vínculo</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-sans font-light text-text-main text-lg leading-relaxed mb-16 max-w-2xl">
            Não trabalho o sintoma, trabalho o que o sustenta.
            Quando a identidade individual é frágil, qualquer vínculo vira uma prótese. Meu trabalho começa aí.
          </p>
        </FadeIn>

        {/* Timeline vertical */}
        <div className="relative">
          {/* Linha conectora */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {pilares.map((pilar, i) => (
              <FadeIn key={pilar.num} delay={i * 0.15}>
                <div className="relative md:pl-12">
                  {/* Ponto na linha */}
                  <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary hidden md:block" />

                  {/* Número decorativo */}
                  <span
                    className="absolute -top-4 -right-2 md:right-0 font-display text-8xl text-primary/8 leading-none select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {pilar.num}
                  </span>

                  <div className="editorial-line">
                    <h3 className="font-sub font-semibold text-text-main text-lg md:text-xl mb-3">
                      {pilar.titulo}
                    </h3>
                    <p className="font-sans font-light text-text-main/80 text-base leading-relaxed">
                      {pilar.descricao}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.5}>
          <p className="font-sub font-normal italic text-primary/70 text-base leading-relaxed mt-16 max-w-xl">
            Não trabalho com prazos garantidos nem mudanças drásticas em curto tempo. O que ofereço é profundidade, e profundidade tem o tempo dela.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="font-sub font-semibold text-text-main text-lg mt-8">
            Mas antes de te contar o que faço, deixa eu te contar de onde vim.
          </p>
        </FadeIn>

      </div>
    </section>
  )
}

import { FadeIn } from '../App'

export default function VideoSection() {
  return (
    <section id="video" className="section-padding bg-dark">
      <div className="container-ultra">

        <FadeIn>
          <p className="font-sans font-light text-off-white/80 text-base md:text-lg leading-relaxed mb-2">
            Passei 5 anos como Agente Comunitário de Saúde antes de me tornar psicólogo.
          </p>
          <p className="font-sans font-light text-off-white/80 text-base md:text-lg leading-relaxed mb-2">
            Estive dentro das casas, ouvindo o que acontece quando pessoas não têm onde se ancorar.
          </p>
          <p className="font-sans font-light text-off-white/80 text-base md:text-lg leading-relaxed mb-12">
            No vídeo abaixo, explico como essa escuta formou o trabalho que faço hoje, e por que ele é diferente.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '300px',
                maxWidth: '100%',
                aspectRatio: '9 / 16',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.6)',
                backgroundColor: '#000',
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/NLej4BoDVzk"
                title="Vídeo de Diego de Carvalho Nisner"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="font-sub font-semibold text-secondary text-lg md:text-xl leading-relaxed mt-12 text-center max-w-xl mx-auto">
            O mecanismo que vou descrever agora é o que separa os relacionamentos que sustentam dos que desgastam.
          </p>
        </FadeIn>

      </div>
    </section>
  )
}

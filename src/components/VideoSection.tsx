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
          <div className="flex justify-center">
            {/* Container 9:16 — YouTube Shorts */}
            <div
              className="relative w-full ring-1 ring-primary shadow-2xl rounded-sm overflow-hidden"
              style={{ maxWidth: '300px', aspectRatio: '9 / 16' }}
            >
              {/* VÍDEO — substituir {YOUTUBE_VIDEO_ID} pelo ID real */}
              <iframe
                src="https://www.youtube.com/embed/{YOUTUBE_VIDEO_ID}"
                title="Vídeo de Diego de Carvalho Nisner"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
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

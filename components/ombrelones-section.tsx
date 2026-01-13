import { Wrench, Clock, Truck } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function OmbrelonesSection() {
  return (
    <section className="py-16 md:py-24 bg-background" id="ombrelones">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-md mb-4">
            Serviços Completos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">SURYA OMBRELONES</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
            Reformas, Manutenção, Vendas e Aluguel
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Especializados em reformar, consertar e adequar ombrelones para todo tipo de uso.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          <Card className="p-6 border-2">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4">
              <Wrench className="h-7 w-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold text-primary mb-3">Conserto de Ombrelones</h4>
            <p className="text-muted-foreground leading-relaxed">
              Muitas vezes, as ações do tempo e condições climáticas comprometem a estrutura do equipamento. Rasgos,
              ressecamento por exposição excessiva aos raios solares além de quebra de varetas causadas por rajadas de
              ventos.
            </p>
          </Card>

          <Card className="p-6 border-2">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4">
              <Clock className="h-7 w-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold text-primary mb-3">Por que reformar?</h4>
            <p className="text-muted-foreground leading-relaxed">
              A reforma de um ombrelone é sempre uma boa alternativa, pois o custo é mais barato que a aquisição de um
              novo. A reforma respeita todas as características de fábrica e garante a aparência de novo.
            </p>
          </Card>
        </div>

        {/* Service Highlight */}
        <div className="max-w-2xl mx-auto bg-accent/10 border-2 border-accent/20 rounded-lg p-8 mb-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-lg mb-4">
            <Truck className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-2">Buscamos e Entregamos seu Ombrelone</h3>
          <p className="text-lg text-muted-foreground">
            <strong className="text-foreground">Comodidade e Segurança</strong> em todo o processo
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <Card className="overflow-hidden border-2">
            <div className="relative h-48 w-full">
              <Image src="/assets/images/card1.jpg" alt="Qualidade e Conforto" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h5 className="text-lg font-bold text-primary mb-3">Qualidade e Conforto</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Além da execução da reforma ou conserto, nossa atenção também se estende à toda logística e os cuidados
                no transporte de seu material, garantindo assim a comodidade para nossos clientes e a segurança de que
                nosso serviço será entregue com todos os cuidados assegurando a qualidade e a durabilidade de nosso
                trabalho.
              </p>
            </div>
          </Card>

          {/* Card 2 */}
          <Card className="overflow-hidden border-2">
            <div className="relative h-48 w-full">
              <Image src="/assets/images/card2.jpg" alt="Charme, Sofisticação e Beleza" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h5 className="text-lg font-bold text-primary mb-3">Charme, Sofisticação e Beleza</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Os ombrelones além de mais eficazes, são peças extremamente charmosas e quando bem escolhidos trazem
                ainda mais beleza para o seu ambiente.
              </p>
            </div>
          </Card>

          {/* Card 3 */}
          <Card className="overflow-hidden border-2">
            <div className="relative h-48 w-full">
              <Image src="/assets/images/card3.jpg" alt="Durabilidade e Manutenção" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h5 className="text-lg font-bold text-primary mb-3">Durabilidade e Manutenção</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Por ser um item de áreas externas, os ombrelones normalmente ficam expostos às mais diversas ações do
                tempo, por isso, é importante que ele seja resistente às alterações climáticas e, imprescindivelmente,
                tenha uma correta manutenção para que sua vida útil se prolongue.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

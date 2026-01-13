export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12" id="footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Brand */}
          <div>
            <strong className="text-xl block mb-2">SURYA OMBRELONES</strong>
            <p className="text-sm text-primary-foreground/80">Todos os direitos reservados.</p>
          </div>

          {/* Atendimento */}
          <div>
            <h3 className="text-lg font-bold mb-3">Atendimento</h3>
            <p className="text-sm text-primary-foreground/90">Atendemos em todo o Sul de Minas.</p>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-lg font-bold mb-3">Horário de Funcionamento</h3>
            <p className="text-sm text-primary-foreground/90 leading-relaxed">
              <strong>Segunda a sexta:</strong> 08h00 às 18h00
              <br />
              <strong>Sábados:</strong> 08h00 às 12h00
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

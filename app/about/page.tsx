"use client"; // Essencial para usar framer-motion

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function AboutPage() {
  return (
    <motion.section
      className="flex justify-center items-center py-12 px-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center space-y-6 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800">Sobre mim</h2>

        <p className="text-gray-700 leading-relaxed">
          Minha jornada começou no <strong>design gráfico</strong>, onde, por
          oito anos, criei identidades visuais que conectavam marcas às pessoas,
          desenvolvendo um olhar apurado para estética e usabilidade. Essa base
          me levou ao <strong>desenvolvimento front-end</strong>, onde encontrei
          o espaço perfeito para unir criatividade e lógica. Hoje, transformo
          ideias em interfaces dinâmicas, com foco em experiências que encantam
          e resolvem problemas reais.
        </p>

        <p className="text-gray-700 leading-relaxed">
          No <strong>DevClub</strong>, mergulhei em <em>HTML, CSS, JavaScript, Git e GitHub</em>, complementando minha
          formação com bootcamps da <strong>DIO</strong> e <strong>Koru (Grupo Boticário)</strong>. Mais recentemente, aprofundei
          meus estudos em <strong>React</strong>, explorando a criação de
          componentes reutilizáveis, rotas dinâmicas, hooks e integração com
          APIs, o que ampliou ainda mais minha capacidade de construir
          aplicações modernas e escaláveis.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Domino ferramentas como <strong>VS Code</strong> e <strong>Git</strong>, com experiência em <strong>APIs REST</strong>,
          responsividade e acessibilidade. Minha abordagem combina organização,
          empatia e atenção aos detalhes, sempre com o usuário no centro.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Busco oportunidades em tecnologia, educação ou bem-estar, onde eu
          possa contribuir com interfaces modernas e impacto positivo.
        </p>

        <div className="flex justify-center gap-6 pt-4">
          <a
            href="https://github.com/RenataARocha"
            target="_blank"
            className="flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium transition"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/renata-alexandre-rocha/"
            target="_blank"
            className="flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium transition"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  );
}

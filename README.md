# 📖 Blog Pessoal — Renata Rocha

[🌐 Ver site ao vivo](https://blog-pessoal-taupe.vercel.app/) • [💻 Código fonte no GitHub](https://github.com/RenataARocha/blog-pessoal)

---

## ✨ Sobre o projeto

Este é o meu **blog pessoal**, desenvolvido com **Next.js, React e Tailwind CSS**, onde compartilho minha jornada de transição de carreira de **design gráfico para desenvolvimento Front-End**.  
Aqui você encontrará **posts, projetos, aprendizados e reflexões** sobre tecnologia, programação e design.

---

## 🚀 Funcionalidades

- Layout **responsivo** (desktop e mobile)  
- Página inicial com seção **Herói** + imagem de fundo  
- Lista de posts + páginas individuais  
- **Curtir posts** (componente LikeButton)  
- **Comentários simples** (nome e texto)  
- SEO básico (meta tags, Open Graph e Twitter)  
- **Botão voltar ao topo**  
- Estrutura clara para **escalabilidade futura**  

---

## 🛠 Tecnologias utilizadas

- [Next.js](https://nextjs.org/) — Framework React  
- [React](https://reactjs.org/) — Biblioteca de UI  
- [Tailwind CSS](https://tailwindcss.com/) — Estilização  
- [Framer Motion](https://www.framer.com/motion/) — Animações  
- [React Markdown](https://github.com/remarkjs/react-markdown) — Renderização de posts  
- Git & GitHub — Controle de versão e deploy com **Vercel**  

---

## ⚙️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/RenataARocha/blog-pessoal.git

# Acesse a pasta do projeto
cd blog-pessoal

# Instale as dependências
npm install

# Rode em modo de desenvolvimento
npm run dev

# Acesse no navegador
http://localhost:3000
```

## 📂 Estrutura de pastas

```
app/
 ├── about/
 │   └── page.tsx
 ├── posts/
 │   ├── [slug]/
 │   │   └── page.tsx
 │   └── page.tsx
 ├── favicon.ico
 ├── globals.css
 ├── layout.tsx
 ├── Navbar.tsx
 └── page.tsx

components/
 ├── FeaturedPostCard.tsx
 ├── LikeButton.tsx
 ├── PostCard.tsx
 ├── PostContent.tsx
 └── ScrollToTopButton.tsx

data/
 └── posts.ts
```

## 🔍 SEO & Acessibilidade

- Open Graph configurado para compartilhamento em redes sociais
- Imagem de capa para WhatsApp, Twitter, LinkedIn etc.
- Alt text em imagens
- ARIA labels em botões e navegação

## 📅 Próximos passos

- Salvar comentários em backend (ex: Firebase ou Supabase)
- Paginação / Infinite scroll para posts
- SEO avançado por post (descrição, tags personalizadas)
- Melhorar performance de imagens

## 🧾 Licença

Este projeto está sob a licença MIT. Fique à vontade para estudar, adaptar e usar como referência.

## 📬 Contato

👩‍💻 Renata Rocha  
[LinkedIn](https://www.linkedin.com/in/renatarocha/) • [GitHub](https://github.com/RenataARocha)

 

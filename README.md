# OxyStore — Documentação do Projeto

E-commerce moderno responsivo com tema roxo completo.
Desenvolvido em HTML5 puro + CSS3 + JavaScript vanilla, sem dependências.

---

## 📁 Estrutura de Pastas

```
oxy-store/
├── index.html              → Página principal (homepage)
│
├── css/
│   ├── tokens.css          → Variáveis CSS, reset, base styles, botões, animações
│   ├── nav-hero.css        → Navbar, Hero section, Marquee
│   ├── products.css        → Categories, Products grid, Promo banner
│   ├── energy.css          → Seção de energéticos (Monster, Red Bull, Oxy Boost)
│   └── ui.css              → Features, Newsletter, Footer, Search, Cart, Toast, Responsivo
│
├── js/
│   └── main.js             → Toda a lógica interativa (carrinho, busca, toast, tabs)
│
└── assets/
    └── images/
        └── logo.png        → Logotipo da OxyStore (substituir pelo arquivo real)
```

---

## 🚀 Como usar no VS Code

1. Abra a pasta `oxy-store/` no VS Code:
   ```
   File → Open Folder → selecione oxy-store/
   ```

2. Instale a extensão **Live Server** (ritwickdey.LiveServer)

3. Clique com o botão direito em `index.html` → **"Open with Live Server"**

4. O site abrirá em `http://127.0.0.1:5500`

---

## 🎨 Paleta de Cores

Todas as cores são CSS custom properties definidas em `css/tokens.css`:

| Token       | Hex       | Uso                          |
|-------------|-----------|------------------------------|
| `--ink`     | `#080412` | Background mais escuro       |
| `--p900`    | `#140a2e` | Fundos escuros secundários   |
| `--p700`    | `#3f2782` | Roxo médio-escuro            |
| `--p600`    | `#6040bc` | Roxo principal (botões, CTA) |
| `--p500`    | `#8560e0` | Roxo médio                   |
| `--p400`    | `#aa87f0` | Roxo claro (destaques)       |
| `--p200`    | `#e6defb` | Roxo muito claro (bordas)    |
| `--p50`     | `#faf8ff` | Background geral da página   |
| `--gold`    | `#f0c040` | Dourado (badges, estrelas)   |
| `--rose`    | `#e05080` | Rosa (badge de sale)         |
| `--neon`    | `#30f080` | Verde neon (seção energia)   |

---

## 🖼 Logo

Coloque o arquivo da logo em:
```
assets/images/logo.png
```

O HTML já referencia esse caminho em dois lugares:
- `<nav>` (linha ~25 do index.html)
- `<footer>` (linha ~260 do index.html)

---

## 📦 Funcionalidades Implementadas

- ✅ Navbar sticky com blur glassmorphism
- ✅ Hero fullscreen com efeitos de gradiente mesh
- ✅ Marquee animado de benefícios
- ✅ Grid de categorias responsivo
- ✅ Cards de produtos com badge, favorito e add ao carrinho
- ✅ Banner promocional com 50% OFF
- ✅ Seção de energéticos (Monster, Red Bull, Oxy Boost)
- ✅ Tabs de filtro por marca/sabor
- ✅ Pack sortido de 12 latas
- ✅ Section de benefícios (frete, segurança, devolução, suporte)
- ✅ Newsletter com validação de e-mail
- ✅ Footer completo com links e redes sociais
- ✅ Overlay de busca com tecla ESC
- ✅ Cart drawer animado com total dinâmico
- ✅ Toast de confirmação ao adicionar item
- ✅ Layout responsivo (1024px, 768px, 560px breakpoints)

---

## 🔧 Extensões VS Code Recomendadas

| Extensão                  | ID                              | Para quê                        |
|---------------------------|---------------------------------|---------------------------------|
| Live Server               | ritwickdey.LiveServer           | Servidor local com hot reload   |
| Prettier                  | esbenp.prettier-vscode          | Formatação automática           |
| CSS Peek                  | pranaygp.vscode-css-peek        | Navegar para definições CSS     |
| Auto Rename Tag           | formulahendry.auto-rename-tag   | Renomear tags HTML pareadas     |
| Color Highlight           | naumovs.color-highlight         | Preview de cores no editor      |
| IntelliSense for CSS      | Zignd.html-css-class-completion | Autocomplete de classes         |

---

## 📐 Breakpoints

| Largura     | Comportamento                           |
|-------------|-----------------------------------------|
| > 1024px    | Layout completo desktop (4 colunas)     |
| ≤ 1024px    | Hero sem visual, grids 2 colunas        |
| ≤ 768px     | Nav links ocultos, padding reduzido     |
| ≤ 560px     | Grids 2 colunas compactos, footer stack |

---

© 2025 OxyStore

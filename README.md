# Clinica Axis

Site institucional estatico da Clinica Axis - Geriatria e Reumatologia, em Campo Grande, Rio de Janeiro.

Esta versao inicial publica a landing page institucional. O agendamento interno e o painel administrativo serao adicionados em uma etapa futura. Por enquanto, os botoes de agendamento direcionam para WhatsApp e Doctoralia.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validar antes de publicar

```bash
npm run lint
npm run typecheck
npm run build
```

## Onde editar conteudo

Quase todo o conteudo publico fica em:

```text
src/content/siteConfig.ts
```

Edite ali:

- telefones e WhatsApp;
- links Doctoralia;
- endereco;
- horarios;
- dados dos medicos;
- CRM, titulos profissionais cautelosos e pos-graduacoes;
- valores;
- FAQs;
- SEO;
- campos legais;
- textos principais.

Troque imagens em `public/`, especialmente:

- `public/logo-axis.png`;
- `public/logo-axis-original.png`;
- fotos futuras dos medicos.

## Deploy recomendado: Cloudflare Pages

Para esta fase estatica, a hospedagem recomendada e Cloudflare Pages.

Use no Cloudflare Pages:

- Framework preset: `Next.js` ou `None`
- Build command: `npm run build`
- Output directory: `out`
- Node version: `20.18.1` ou superior compativel com Next.js 16

Este projeto usa export estatico do Next.js. Nesta primeira fase, nao ha banco de dados, functions, painel administrativo ou pagina exclusiva de agendamento.

Arquivos de suporte para Cloudflare:

- `public/_headers`: headers de seguranca e cache para assets estaticos;
- `public/_redirects`: redirecionamento de `www` para o dominio sem `www`;
- `wrangler.toml`: aponta a saida do Pages para `out`;
- `.node-version`: fixa Node `20.18.1`.

Fluxo recomendado:

1. Subir este projeto para um repositorio GitHub.
2. No Cloudflare Pages, escolher "Create a project".
3. Conectar o repositorio GitHub.
4. Informar o build command e output directory acima.
5. Fazer o primeiro deploy.
6. Em "Custom domains", adicionar `geriatriaereumatologiaaxis.com.br`.
7. No Registro.br, apontar os nameservers para os nameservers mostrados pela Cloudflare.
8. Se tambem adicionar `www`, configurar redirecionamento para a versao sem `www`.

Tambem e possivel publicar manualmente a pasta `out` se a plataforma escolhida aceitar upload de site estatico.

## Dominio sem www

O site esta configurado para usar:

```text
https://geriatriaereumatologiaaxis.com.br
```

Depois que o dominio estiver na Cloudflare, deixe `geriatriaereumatologiaaxis.com.br` como dominio principal. Se voce tambem usar `www`, redirecione para a versao sem `www`.

## Antes da publicacao final

Confirmar:

- pos-graduacoes exatas dos medicos;
- diretor tecnico e CRM;
- horario de funcionamento;
- telefone/WhatsApp definitivo;
- e-mail;
- Instagram;
- convenios ou atendimento particular;
- valores atuais;
- fotos oficiais;
- autorizacao dos medicos para uso das informacoes;
- politica de privacidade final, se houver assessoria juridica.

## Etapa futura

Quando a clinica quiser receber solicitacoes diretamente pelo site, adicionar:

- pagina `/agendamento`;
- painel `/admin/agendamentos`;
- banco PostgreSQL;
- variaveis seguras na hospedagem;
- historico de status e exportacao CSV.

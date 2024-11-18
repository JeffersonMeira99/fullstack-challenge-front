

## 1. Instale as Dependências

```bash
npm install


## 2. Compilação e Execução

# Desenvolvimento
npm run dev

## 3. Estrutura do Projeto

src/
├── components/          # Componentes reutilizáveis (ex: SelectMui, GenericDataGrid, SuccessDialog)
│   ├── SelectMui.tsx    # Componente Select personalizado
│   ├── GenericDataGrid.tsx # Componente genérico para exibir tabelas com dados
│   └── SuccessDialog.tsx # Diálogo para exibir mensagens de sucesso
├── services/            # Funções de comunicação com a API (ex: VehiclesService, DriverService, CompanyService)
│   ├── vehicles/        # Funções relacionadas ao gerenciamento de veículos
│   │   └── vehicles.ts  # Funções para manipular dados dos veículos, como buscar, criar, etc.
│   ├── driver/          # Funções relacionadas ao gerenciamento de motoristas
│   │   └── driver.ts    # Funções para manipular dados dos motoristas
│   └── company/         # Funções relacionadas ao gerenciamento de empresas (caso necessário)
│       └── company.ts   # Funções para manipular dados de empresas (se aplicável)
├── stores/              # Estado global usando Zustand (ex: useVehicleStore, useDriverStore)
│   ├── useVehicleStore.ts # Hook Zustand para gerenciar o estado de veículos
│   └── useDriverStore.ts   # Hook Zustand para gerenciar o estado de motoristas
├── types/               # Tipos TypeScript (ex: vehicles, driver, Company)
│   ├── vehicles.ts      # Tipos e interfaces para veículos
│   ├── driver.ts        # Tipos e interfaces para motoristas
│   └── company.ts       # Tipos e interfaces para empresas (caso necessário)
├── pages/               # Páginas da aplicação (ponto de entrada para as views)
│   ├── Home.tsx         # Página principal que exibe a listagem e o formulário de criação de veículos
├── App.tsx              # Componente principal da aplicação, gerencia o roteamento e o layout
├── main.tsx             # Ponto de entrada para renderizar a aplicação no DOM
├── theme/               # Arquivos de configuração do tema da aplicação (ex: MUI Theme)
│   ├── theme.ts         # Arquivo de configuração do tema MUI


## 4. Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias:

- **React**: Biblioteca JavaScript para a construção de interfaces de usuário dinâmicas e interativas.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática e outros recursos, garantindo maior segurança e produtividade no desenvolvimento.
- **Vite**: Ferramenta de build rápida para projetos front-end, com suporte a hot module replacement (HMR) e otimizações para React.
- **@mui/material**: Conjunto de componentes prontos e personalizáveis baseado no Material Design, utilizado para a criação de interfaces de usuário responsivas e modernas.
- **@mui/x-data-grid**: Componente de tabela avançada da MUI, usado para exibição e manipulação de grandes volumes de dados de forma eficiente.
- **axios**: Cliente HTTP para fazer requisições assíncronas, utilizado para comunicação com APIs.
- **react-router-dom**: Biblioteca para gerenciamento de rotas no React, facilitando a navegação entre páginas na aplicação.
- **zustand**: Biblioteca de gerenciamento de estado simples e leve para React.
- **@emotion/react** e **@emotion/styled**: Bibliotecas para estilização de componentes React usando CSS-in-JS, facilitando a personalização da aparência da aplicação.










```

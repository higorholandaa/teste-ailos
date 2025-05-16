# 🏦 TesteAilos

Projeto Angular desenvolvido como teste técnico para a Ailos, com foco em uma interface de consulta de CPF, exibição de dados e navegação por etapas (stepper).

## 🚀 Tecnologias utilizadas

- [Angular CLI 17.3.17](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [NGX Mask](https://github.com/JsDaddy/ngx-mask) — para máscaras de input
- [JSON Server](https://github.com/typicode/json-server) — API fake para backend REST
- TypeScript
- SCSS
- RxJS
- HTML5

## 📦 Funcionalidades

- Máscara para campos de CPF usando NGX Mask
- Validação de CPF no frontend
- Consulta de dados de cooperado via serviço (JSON Server)
- Exibição de retorno na tela com base na resposta
- Stepper (etapas) com progresso visual
- Componente de dicas fixo no rodapé

## 🛠️ Como rodar o projeto localmente

### 1. Clone o repositório

git clone https://github.com/seu-usuario/TesteAilos.git
cd TesteAilos

### 2. Instale as dependências do projeto
npm install

### 3. Adicione o Angular Material
ng add @angular/material

### 4. Instale o NGX Mask
npm install ngx-mask --save

### 5. Instale o JSON Server globalmente  
npm install -g json-server

### 6. Inicie o JSON Server na porta 3000  
json-server --watch db.json --port 3000

### 7. Execute o servidor Angular  
ng serve

### 8. Abra no navegador  
http://localhost:4200
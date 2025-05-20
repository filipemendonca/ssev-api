# Dockerfile

FROM node:18-alpine

# Define diretório de trabalho
WORKDIR /app

# Copia arquivos necessários
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Gera os arquivos Prisma
RUN npx prisma generate

# Compila o projeto
RUN npm run build

# Comando de inicialização
CMD npx prisma migrate deploy && \
    node dist/prisma/seed.js && \
    npm run start:prod

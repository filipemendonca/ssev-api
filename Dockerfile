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

# # Executa as migrações do banco de dados
# RUN npx prisma migrate deploy

# #Executa o seed do banco de dados
# RUN npx prisma db seed

# Compila o projeto
RUN npm run build

# Expõe a porta padrão do NestJS
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "run", "start:prod"]

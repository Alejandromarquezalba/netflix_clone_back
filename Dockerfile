FROM node:18-alpine

WORKDIR /app


COPY package*.json ./
COPY prisma ./prisma/

# Instalar dependencias y generar Prisma
RUN npm ci
RUN npx prisma generate

# Copiar código y construir
COPY . .
RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start:prod"]
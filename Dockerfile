FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci
RUN npx prisma generate

COPY . .
RUN npm run build && ls -la dist/ && find dist/ -name "*.js" | head -10

EXPOSE 3001

CMD ["node", "dist/src/main"]

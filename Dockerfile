# 1. Imagen oficial y específica (no latest)
FROM node:20.19.0-alpine@sha256:abc123...

# 2. Usar usuario no-root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# 3. Actualizar sistema y instalar solo lo necesario
RUN apk update && apk upgrade && apk add --no-cache curl

# 4. Configurar trabajo con usuario no-root
WORKDIR /app
COPY --chown=nextjs:nodejs package*.json ./
COPY --chown=nextjs:nodejs prisma ./prisma/

# 5. Instalar como usuario no-root
USER nextjs
RUN npm ci --only=production && npx prisma generate

# 6. Copiar código y build
COPY --chown=nextjs:nodejs . .
RUN npm run build

# 7. Exponer puerto y ejecutar
EXPOSE 3001
CMD ["node", "dist/src/main"]

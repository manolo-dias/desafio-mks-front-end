FROM node:18-alpine as builder

WORKDIR /app 

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node:18-alpine as runner

WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV production

EXPOSE 3000
ENTRYPOINT ["npm", "run", "start"]
# Используем базовый образ Node.js
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Удаляем devDependencies после сборки
RUN npm prune --production

# Указываем команду, которая будет выполнена при запуске контейнера
CMD ["node", "dist/app.js"]

# Определяем, на каком порту приложение будет работать
EXPOSE 3000
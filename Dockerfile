FROM node:18-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:18-alpine

RUN yarn global add serve

COPY --from=build /app/build /app

EXPOSE 5000

CMD ["serve", "-s", "/app", "-l", "5000"]
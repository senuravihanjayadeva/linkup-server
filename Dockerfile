FROM node:14.18-apline AS BASE_IMAGE
RUN apk add --no-cache nodejs npm
WORKDIR /linkup-server
COPY ["yarn.lock", "package.json", "./"]
RUN yarn install --check-files --non-interactive --ignore-optional --frozen-lockfile
COPY . .
RUN npm run build

FROM node:14.18-alpine
WORKDIR /app
COPY --from=BUILD_IMAGE /linkup-server /app/
EXPOSE 9000
ENTRYPOINT [ "yarn" ]
CMD [ "start" ]
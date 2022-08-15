FROM nginx:1.21-alpine AS first-stage
WORKDIR /site

COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md

RUN apk add hugo
RUN hugo --minify --gc

ENTRYPOINT ["nginx", "-g", "daemon off;"]

FROM nginx:1.21-alpine AS second-stage
COPY --from=first-stage /site/public/ /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]
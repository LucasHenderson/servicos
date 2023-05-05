FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=123

COPY banco.sql /docker-entrypoint-initdb.d/

EXPOSE 3307

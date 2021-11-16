FROM --platform=linux/amd64  mysql:5.7

ADD ./sql /docker-entrypoint-initdb.d

# ENV MYSQL_USER jin
# ENV MYSQL_ALLOW_EMPTY_PASSWOR 0000
# ENV MYSQL_DATABASE nft_market

EXPOSE 3306

CMD ["mysqld"]
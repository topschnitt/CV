FROM php:8.2-apache

RUN apt-get update && apt-get upgrade -y

# ZIP
RUN apt-get install -y \
        libzip-dev \
        zip \
        && docker-php-ext-install zip


# APACHE MODS
RUN a2enmod rewrite && a2enmod ssl && a2enmod proxy && a2enmod proxy_http && a2enmod headers

EXPOSE 80
EXPOSE 443
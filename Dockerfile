FROM jekyll/builder:latest
LABEL maintainer "Martin Kuhn <Martin.kuhn@myport.ac.uk>"

CMD ["/usr/local/bin/init.sh"]

WORKDIR /jekyll

RUN apk update && apk add imagemagick && rm -rf /var/cache/apk/*
RUN apk add imagemagick-dev

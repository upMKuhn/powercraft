
up:
	UID=${UID} GID=${GID} && docker-compose up



refresh: 
	docker-compose exec web /bin/bash /etc/init.d/nginx reload

install: 
	cd src && bower install && npm install && cd ..

deploy: install
	docker-compose up -d
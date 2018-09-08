
up:
	UID=${UID} GID=${GID} && docker-compose up



refresh: 
	docker-compose exec web /bin/bash /etc/init.d/nginx reload

install: 
	cd src && bower install && npm install && cd ..

deploy: install
	docker-compose up -d

password:
	sudo sh -c "echo -n 'mkuhn:' >> config/config.d/.htpasswd"
	sudo sh -c "openssl passwd -apr1 >> config/config.d/.htpasswd"
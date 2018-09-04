
refresh: 
	docker-compose exec web /bin/bash /etc/init.d/nginx reload

install: 
	bower install && npm install 

deploy:
	install && chmod 
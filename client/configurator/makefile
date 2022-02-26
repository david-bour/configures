build:
	docker build -t davidbour/configclient:latest .

run: build
	docker run -d --name client -p 8080:8080 davidbour/configclient:latest

push:
	docker push davidbour/configclient:latest

stop:
	docker stop client && \
	docker rm client

clean:
	docker rmi $$(docker images -aq)
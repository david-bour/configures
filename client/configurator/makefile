build:
	docker build -t configclient:latest .

run: build
	docker run -d --name client -p 8080:8080 configclient:latest

stop:
	docker stop client && \
	docker rm client

clean:
	docker rmi $$(docker images -aq)
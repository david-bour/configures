build:
	docker build -t configclient:latest .

run: build
	docker run -d --name client -p 8080:8080 configclient:latest

stop:
	docker stop $$(docker ps -aq) && \
	docker rm $$(docker ps -aq)

clean:
	docker rmi $$(docker images -aq)
build:
	docker build -t configapi:latest .

run: build
	docker run -d --name api -p 8000:8000 configapi:latest

stop:
	docker stop $$(docker ps -aq) && \
	docker rm $$(docker ps -aq)

clean: stop
	docker rmi $$(docker images -aq)
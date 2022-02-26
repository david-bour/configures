build:
	docker build -t davidbour/configapi:latest .

run: build
	docker run -d --name api -p 8000:8000 davidbour/configapi:latest

push:
	docker push davidbour/configapi:latest

stop:
	docker stop api && \
	docker rm api

clean: stop
	docker rmi $$(docker images -aq)
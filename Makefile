name = imp

.PHONY: docker-build 
docker-build:
	@echo "Building docker image"
	docker build -t $(name):latest .

.PHONY: docker-run 
docker-run:
	@echo "Starting the docker container"
	docker run -it --init $(name):latest

.PHONY: docker-run-detached
docker-run-detached:
	@echo: "Starting the docker container detached"
	docker run -d --init $(name):latest
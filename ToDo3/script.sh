docker build -t todo-frontend .
docker run --name backend-mongo -d mongo
docker run --link backend-mongo:db_1 --name frontend-mean -d todo-frontend

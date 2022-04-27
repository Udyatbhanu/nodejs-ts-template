nodejs-ts % yarn add class-validator cookie-parser cors dotenv express typedi envalid

nodejs-ts % yarn add -D @types/cors @types/express @types/mongodb @types/node nodemon ts-node typescript

docker build -t nodets/hello .
docker container run -p 5001:5001 -d --rm --name nodehello nodets/hello
docker container run -p 5001:5001 --rm --name nodehello nodets/hello

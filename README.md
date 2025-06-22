# simple-nestjs-cqrs-event-expand

# server install

```shell
npm install
```

만약 설치가 잘 안되면 설치된 파일을 제거하고 다시 설치합니다.

```shell
rm -rf node_modules package-lock.json
npm install
```

# server start

```shell
npm run start:dev
```

# server test

## find orders

```shell
curl -X GET 'http://localhost:3000/orders'
```

## create order

```shell
curl -X POST 'http://localhost:3000/orders' -H "Content-Type: application/json" -d '{
}'
```

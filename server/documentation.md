### API References

List of Endpoints:

- GET /articles
- POST /articles
- GET /articles/:id
- DELETE /articles/:id
- GET /categories
- GET /users

---

- POST /users/register
- POST /users/login
- POST /users/auth/google-sign-in
- PUT /articles/:id
- PATCH /articles/:id
- GET /histories

---

- POST /customers/pub/register
- POST /customers/pub/login
- POST /customers/pub/googleLogin
- GET /customers/pub/articles/:id
- GET /customers/pub/renderpagination
- GET /customers/pub/categories
- GET /customers/pub/favArticle
- POST /customers/pub/addFav/:id

---

### GET all Articles

```https
GET /articles
```

#### Description

- GET All Articles

#### Request

(Headers)

```json
"access_token":"string"
```

#### Response

_200 - Success_

- Body

```json
{
  "statusCode": 200,
  "msg": "Here is the data",
  "result": [
    {
      "title": "The Korea",
      "content": "Stray Kids scores third No. 1 on Billboard 200",
      "imgUrl": "https://img.koreatimes.co.kr/upload/newsV2/images/202306/99b7aaa4065f444085cb2779fd7a4222.jpg/dims/resize/740/optimize",
      "authorId": 3,
      "categoryId": 3,
      "createdAt": "2023-06-12T08:26:09.610Z",
      "updatedAt": "2023-06-12T08:26:09.610Z"
    },
    {
      "title": "CCN",
      "content": "BTS 10th anniversary: K-pop sensation’s decade-long style evolution",
      "imgUrl": "https://media.cnn.com/api/v1/images/stellar/prod/230608130953-03-bts-10th-anniversary-grammys-2022.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp",
      "authorId": 4,
      "categoryId": 3,
      "createdAt": "2023-06-12T08:26:09.610Z",
      "updatedAt": "2023-06-12T08:26:09.610Z"
    }
  ]
}
```

### POST articles

```https
POST /articles
```

#### Description

- POST a new Article

#### Request

(Body)

```json
title, content, imgUrl, authorId, categoryId
```

(Headers)

```json
"access_token":"string"
```

#### Response

_201 - Created_

- Body

```json
{
  "message": "Your data has been created",
  "create": {
    "title": "Coba Add Lagi",
    "content": "Coba Add",
    "imgUrl": "www",
    "authorId": 1,
    "categoryId": 1,
    "updatedAt": "2023-06-12T12:57:10.571Z",
    "createdAt": "2023-06-12T12:57:10.571Z"
  }
}
```

_400 - Bad Request_

- Body

```json
{
  "statusCode": 400,
  "message": "Error"
}
```

---

### Get Article by id

```https
GET /articles/:id
```

#### Description

- Get Articles by id

#### Request

(Params)

```json
id
```

(Headers)

```json
"access_token":"string"
```

#### Response

_200 - Success_

- Body

```json
{
  "message": "Article by this id 3",
  "getOne": {
    "title": "The Korea",
    "content": "Stray Kids scores third No. 1 on Billboard 200",
    "imgUrl": "https://img.koreatimes.co.kr/upload/newsV2/images/202306/99b7aaa4065f444085cb2779fd7a4222.jpg/dims/resize/740/optimize",
    "authorId": 3,
    "categoryId": 3,
    "createdAt": "2023-06-12T08:26:09.610Z",
    "updatedAt": "2023-06-12T08:26:09.610Z"
  }
}
```

_404 - Not Found_

- Body

```json
{
  "statusCode": 404,
  "message": "Error not found"
}
```

---

### Delete Articles by id

```https
DELETE /articles/:id
```

#### Description

- Delete Articles by id

#### Request

(Params)

```json
id
```

(Headers)

```json
"access_token":"string"
```

#### Response

_200 - Success_

```json
{
  "message": "CCN success to delete"
}
```

_404 - Not Found_

- Body

```json
{
  "statusCode": 404,
  "message": "Error not found"
}
```

---

### Get all Categories

```https
GET/categories
```

#### Description

- Get all categories

#### Request

(Headers)

```json
"access_token":"string"
```

#### Response

_200 - Success_

```json
{
  "message": [
    {
      "id": 1,
      "name": "Sports",
      "createdAt": "2023-06-12T08:26:09.608Z",
      "updatedAt": "2023-06-12T08:26:09.608Z"
    },
    {
      "id": 2,
      "name": "Fashion",
      "createdAt": "2023-06-12T08:26:09.608Z",
      "updatedAt": "2023-06-12T08:26:09.608Z"
    },
    {
      "id": 3,
      "name": "Music",
      "createdAt": "2023-06-12T08:26:09.608Z",
      "updatedAt": "2023-06-12T08:26:09.608Z"
    }
  ]
}
```

### Get all Users

```https
GET/users
```

#### Description

- Get all users

#### Response

_200 - Success_

```json
{
  "message": [
    {
      "id": 1,
      "userName": "lhegden0",
      "email": "danniell0@scientificamerican.com",
      "password": "abcdef",
      "role": "staff",
      "phoneNumber": "+380 237 858 7671",
      "address": "184 Carioca Way",
      "createdAt": "2023-06-12T08:26:09.604Z",
      "updatedAt": "2023-06-12T08:26:09.604Z"
    },
    {
      "id": 2,
      "userName": "dlidgely1",
      "email": "jmadgett1@oracle.com",
      "password": "efghij",
      "role": "staff",
      "phoneNumber": "+20 935 644 5751",
      "address": "1 Scofield Crossing",
      "createdAt": "2023-06-12T08:26:09.604Z",
      "updatedAt": "2023-06-12T08:26:09.604Z"
    }
  ]
}
```

---

### POST Users Register

```https
POST/users/register
```

#### Description

- POST a new registered users

#### Request

(Body)

```json
email,password
```

#### Response

_201 - Success_

```json
{
  "msg": {
    "id": 12,
    "email": "jul@gmail.com"
  }
}
```

_400 - Bad Request_

- Body

```json
{
  "statusCode": 400,
  "message": "Error"
}
```

---

### POST Users Login

```https
POST/users/login
```

#### Description

- POST a new login users

#### Request

(Body)

```json
email,password
```

#### Response

_200 - Success_

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImVtYWlsIjoianVsQGdtYWlsLmNvbSIsImlhdCI6MTY4NjYzNTgxN30.t7297u-jAiRuD5cTH0avMVNFdr4PnbD966V7ODDlaIY"
}
```

_401 - Unauthorized_

- Body

```json
{
  "statusCode": 401,
  "message": "Error login user not found atau password not matched"
}
```

_403 - Forbidden_

- Body

```json
{
  "statusCode": 403,
  "message": "Forbidden error di authorization"
}
```

---

### POST GoogleLogin

```https
POST/users/auth/google-sign-in
```

#### Description

- POST by google login

#### Request

(Headers)

```json
google_token
```

#### Response:

_200 - Success_

- Body

```json
{
  "statusCode": 200,
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsI…c4Mn0.zT-xpcFrxHGn3kmVZy5jDQL777q3YmHwgsXuMJ2OrB0",
  "email": " martinishu93@gmail.com",
  " username": "Martini",
  "role": "staff"
}
```

---

### PUT Articles by id

```https
PUT /articles/:id
```

#### Description

- PUT Articles by id

#### Request

(Headers)

```json
"access_token":"string"
```

#### Response

_201 - Edited_

- Body

```json
{
  "message": "Data with id 9 updated"
}
```

_400 - Bad Request_

- Body

```json
{
  "statusCode": 400,
  "message": "Error"
}
```

---

### GET Histories

```https
GET /histories
```

#### Description

- GET All Histories

#### Request

(Headers)

```json
"access_token":"string"
```

#### Response

_200 - Success_

- Body

```json
{
  "msg": "Here is the data",
  "description": "Article apa has successfully created"
}
```

_400 - Bad Request_

- Body

```json
{
  "statusCode": 400,
  "message": "Error"
}
```

---

### PATCH Articles by id

```https
PATCH /articles/:id
```

#### Description

- PATCH Articles by id

#### Request

(Headers)

```json
"access_token":"string"
```

#### Response

_200 - Success_

- Body

```json
{
  "message": "Data with id 9 modified"
}
```

---

_404 - Not Found_

- Body

```json
{
  "statusCode": 404,
  "message": "Error not found"
}
```

---

### POST Customers Register

```https
POST/customers/pub/register
```

#### Description

- POST a new registered customer

#### Request

(Body)

```json
email,password
```

#### Response

_201 - Success_

```json
{
  "msg": {
    "msg": {
      "id": 5,
      "email": "abc@mail.com",
      "password": "$2a$10$kRH1FKXX1bmRwPCiOiVN4eRQ89aCiOPQB7CBQDZZH25fvBPxtvzS2"
    }
  }
}
```

_400 - Bad Request_

- Body

```json
{
  "statusCode": 400,
  "message": "Error"
}
```

---

### POST Customers Login

```https
POST/customers/pub/login
```

#### Description

- POST a new login customers

#### Request

(Body)

```json
email,password
```

#### Response

_200 - Success_

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJhYmNAbWFpbC5jb20iLCJpYXQiOjE2ODgyMzc3ODR9.34mRtU64DxY9ITeA0iwk2ys7J489YlZhcTSpOIi_KKo",
  "email": "abc@mail.com"
}
```

_401 - Unauthorized_

- Body

```json
{
  "statusCode": 401,
  "message": "Error login user not found atau password not matched"
}
```

_403 - Forbidden_

- Body

```json
{
  "statusCode": 403,
  "message": "Forbidden error di authorization"
}
```

---

### POST Customer GoogleLogin

```https
POST/customers/pub/googleLogin
```

#### Description

- POST by customer google login

#### Request

(Headers)

```json
google_token
```

#### Response:

_200 - Success_

- Body

```json
{
  "statusCode": 200,
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsI…c4Mn0.zT-xpcFrxHGn3kmVZy5jDQL777q3YmHwgsXuMJ2OrB0",
  "email": " martinishu93@gmail.com",
  " username": "Martini",
  "role": "staff"
}
```

---

### GET Customers Article by id

```https
GET /customers/pub/articles/:id
```

#### Description

- Customers Get Articles by id

#### Request

(Params)

```json
id
```

(Headers)

```json
"access_token":"string"
```

#### Response

_200 - Success_

- Body

```json
{
  "message": "Article by this id 2",
  "getOne": {
    "id": 2,
    "title": "BBB",
    "content": "Conor McGregor stunt: Mascots being punched 'not the brightest thing' says UFC's Dana White",
    "imgUrl": "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/164B4/production/_130061319_gettyimages-1497303960.jpg",
    "authorId": 2,
    "categoryId": 2,
    "status": "Active",
    "createdAt": "2023-06-28T05:24:36.826Z",
    "updatedAt": "2023-06-28T05:24:36.826Z"
  },
  "qr": "<svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\t viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\n\t\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"100\" height=\"100\" viewBox=\"0 0 2000 2000\" x=\"0\" y=\"0\" shape-rendering=\"crispEdges\"><defs/><rect x=\"0\" y=\"0\" width=\"2000\" height=\"2000\" fill=\"#ffffff\"/><rect x=\"629\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"743\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"971\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1028\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1085\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1256\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1199\" y=\"230\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"743\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"800\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"857\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"971\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1028\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1085\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1199\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1256\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1313\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"629\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"686\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"800\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"857\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"971\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1028\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1085\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1256\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1313\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"686\" y=\"401\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"743\" y=\"401\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"971\" y=\"401\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1028\" y=\"401\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1256\" y=\"401\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"686\" y=\"458\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"743\" y=\"458\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"857\" y=\"458\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"971\" y=\"458\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1028\" y=\"458\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1085\" y=\"458\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1142\" y=\"458\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"629\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"743\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"857\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"971\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1085\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1199\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1313\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"686\" y=\"572\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"743\" y=\"572\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"800\" y=\"572\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"857\" y=\"572\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1028\" y=\"572\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1085\" y=\"572\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1142\" y=\"572\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1313\" y=\"572\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"287\" y=\"629\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"401\" y=\"629\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"458\" y=\"629\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"629\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"629\" y=\"629\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"743\" y=\"629\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"971\" y=\"629\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1199\" y=\"629\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1313\" y=\"629\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1370\" y=\"629\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1598\" y=\"629\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"629\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"401\" y=\"686\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"458\" y=\"686\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1370\" y=\"686\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"686\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1484\" y=\"686\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1541\" y=\"686\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1712\" y=\"686\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"686\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"743\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"287\" y=\"743\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"344\" y=\"743\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"401\" y=\"743\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"743\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"572\" y=\"743\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"743\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1484\" y=\"743\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1712\" y=\"743\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"743\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"800\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"572\" y=\"800\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"800\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1484\" y=\"800\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1598\" y=\"800\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1655\" y=\"800\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"857\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"230\" y=\"857\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"857\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"572\" y=\"857\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"629\" y=\"857\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1313\" y=\"857\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1541\" y=\"857\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1655\" y=\"857\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"857\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"287\" y=\"914\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1313\" y=\"914\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1370\" y=\"914\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"914\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1484\" y=\"914\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1712\" y=\"914\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"971\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"230\" y=\"971\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"344\" y=\"971\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"401\" y=\"971\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"971\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"572\" y=\"971\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"629\" y=\"971\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1313\" y=\"971\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"971\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1484\" y=\"971\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1712\" y=\"971\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"287\" y=\"1028\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"344\" y=\"1028\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"401\" y=\"1028\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"572\" y=\"1028\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"629\" y=\"1028\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1313\" y=\"1028\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"1028\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1598\" y=\"1028\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1655\" y=\"1028\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1712\" y=\"1028\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"1028\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"230\" y=\"1085\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"344\" y=\"1085\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"401\" y=\"1085\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"458\" y=\"1085\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"1085\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"629\" y=\"1085\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1313\" y=\"1085\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1541\" y=\"1085\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1655\" y=\"1085\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1712\" y=\"1085\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"1085\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"287\" y=\"1142\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"401\" y=\"1142\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"458\" y=\"1142\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"572\" y=\"1142\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"629\" y=\"1142\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1370\" y=\"1142\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1712\" y=\"1142\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"1199\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"287\" y=\"1199\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"344\" y=\"1199\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"458\" y=\"1199\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"1199\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"572\" y=\"1199\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"1199\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1484\" y=\"1199\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1712\" y=\"1199\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"1199\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"230\" y=\"1256\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"287\" y=\"1256\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"344\" y=\"1256\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"401\" y=\"1256\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"458\" y=\"1256\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"572\" y=\"1256\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"629\" y=\"1256\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1370\" y=\"1256\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"1256\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1655\" y=\"1256\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1712\" y=\"1256\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"1256\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"1313\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"287\" y=\"1313\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"458\" y=\"1313\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"1313\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"572\" y=\"1313\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"686\" y=\"1313\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"971\" y=\"1313\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1199\" y=\"1313\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1313\" y=\"1313\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1370\" y=\"1313\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"1313\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1484\" y=\"1313\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1541\" y=\"1313\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1598\" y=\"1313\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"629\" y=\"1370\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"686\" y=\"1370\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"743\" y=\"1370\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"857\" y=\"1370\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1028\" y=\"1370\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1085\" y=\"1370\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1142\" y=\"1370\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1199\" y=\"1370\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1313\" y=\"1370\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1541\" y=\"1370\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"857\" y=\"1427\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"971\" y=\"1427\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1028\" y=\"1427\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1085\" y=\"1427\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1142\" y=\"1427\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1256\" y=\"1427\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1313\" y=\"1427\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"1427\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1541\" y=\"1427\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1598\" y=\"1427\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"1427\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"629\" y=\"1484\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"686\" y=\"1484\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"743\" y=\"1484\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"914\" y=\"1484\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"971\" y=\"1484\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1028\" y=\"1484\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1085\" y=\"1484\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1199\" y=\"1484\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1313\" y=\"1484\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1541\" y=\"1484\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1712\" y=\"1484\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"1484\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"629\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"743\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"800\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1028\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1085\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1142\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1256\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1313\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1370\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1484\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1541\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1655\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1712\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"743\" y=\"1598\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"800\" y=\"1598\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"857\" y=\"1598\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"914\" y=\"1598\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"971\" y=\"1598\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1199\" y=\"1598\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1256\" y=\"1598\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1313\" y=\"1598\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"1598\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1484\" y=\"1598\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"629\" y=\"1655\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"743\" y=\"1655\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"800\" y=\"1655\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"914\" y=\"1655\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"971\" y=\"1655\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1028\" y=\"1655\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1085\" y=\"1655\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1313\" y=\"1655\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1370\" y=\"1655\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1484\" y=\"1655\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1541\" y=\"1655\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1598\" y=\"1655\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"1655\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"686\" y=\"1712\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"743\" y=\"1712\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"857\" y=\"1712\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1028\" y=\"1712\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1085\" y=\"1712\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1256\" y=\"1712\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1370\" y=\"1712\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1541\" y=\"1712\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1598\" y=\"1712\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"1712\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"686\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"800\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"857\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"914\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"971\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1085\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1199\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1313\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1370\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1484\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1541\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1598\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1712\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"173\" width=\"399\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"230\" width=\"57\" height=\"285\" fill=\"#000000\"/><rect x=\"515\" y=\"230\" width=\"57\" height=\"285\" fill=\"#000000\"/><rect x=\"173\" y=\"515\" width=\"399\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"230\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"287\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"344\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"401\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"458\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"230\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"230\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"401\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"401\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"458\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"458\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"230\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"287\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"344\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"401\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"458\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"287\" y=\"287\" width=\"171\" height=\"171\" fill=\"#000000\"/><rect x=\"287\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"344\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"401\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"287\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"344\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"401\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"287\" y=\"401\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"344\" y=\"401\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"401\" y=\"401\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"173\" width=\"399\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"230\" width=\"57\" height=\"285\" fill=\"#000000\"/><rect x=\"1769\" y=\"230\" width=\"57\" height=\"285\" fill=\"#000000\"/><rect x=\"1427\" y=\"515\" width=\"399\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1484\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1541\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1598\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1655\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1712\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"173\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"230\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"230\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"401\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"401\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"458\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"458\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1427\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1484\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1541\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1598\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1655\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1712\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1769\" y=\"515\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1541\" y=\"287\" width=\"171\" height=\"171\" fill=\"#000000\"/><rect x=\"1541\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1598\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1655\" y=\"287\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1541\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1598\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1655\" y=\"344\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1541\" y=\"401\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1598\" y=\"401\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"1655\" y=\"401\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"1427\" width=\"399\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"1484\" width=\"57\" height=\"285\" fill=\"#000000\"/><rect x=\"515\" y=\"1484\" width=\"57\" height=\"285\" fill=\"#000000\"/><rect x=\"173\" y=\"1769\" width=\"399\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"1427\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"230\" y=\"1427\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"287\" y=\"1427\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"344\" y=\"1427\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"401\" y=\"1427\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"458\" y=\"1427\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"1427\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"1484\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"1484\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"1598\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"1598\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"1655\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"1655\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"1712\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"1712\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"173\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"230\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"287\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"344\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"401\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"458\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"515\" y=\"1769\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"287\" y=\"1541\" width=\"171\" height=\"171\" fill=\"#000000\"/><rect x=\"287\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"344\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"401\" y=\"1541\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"287\" y=\"1598\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"344\" y=\"1598\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"401\" y=\"1598\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"287\" y=\"1655\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"344\" y=\"1655\" width=\"57\" height=\"57\" fill=\"#000000\"/><rect x=\"401\" y=\"1655\" width=\"57\" height=\"57\" fill=\"#000000\"/><svg version=\"1.0\" id=\"Layer_1\" x=\"714\" y=\"714\" viewBox=\"0 0 700 700\" enable-background=\"new 0 0 700 700\" xml:space=\"preserve\" width=\"570\" height=\"570\" shape-rendering=\"auto\">\n<g>\n\t<g>\n\t\t<polygon fill=\"#000000\" points=\"115.7,584.3 115.7,414.3 87.5,414.3 87.5,584.3 87.5,612.5 115.7,612.5 285.7,612.5 285.7,584.3       \"/>\n\t\t<polygon fill=\"#000000\" points=\"115.7,115.7 285.7,115.7 285.7,87.5 115.7,87.5 87.5,87.5 87.5,115.7 87.5,285.7 115.7,285.7       \"/>\n\t\t<polygon fill=\"#000000\" points=\"584.3,115.7 584.3,285.7 612.5,285.7 612.5,115.7 612.5,87.5 584.3,87.5 414.3,87.5 414.3,115.7       \"/>\n\t\t<polygon fill=\"#000000\" points=\"584.3,584.3 414.3,584.3 414.3,612.5 584.3,612.5 612.5,612.5 612.5,584.3 612.5,414.3     584.3,414.3   \"/>\n\t\t<g>\n\t\t\t<path fill=\"#000000\" d=\"M246.1,274c0-3.3-1.2-6-3.6-8.1c-2.4-2-6.5-3.9-12.5-5.7c-10.4-3-18.2-6.5-23.5-10.6     c-5.3-4.1-7.9-9.7-7.9-16.8s3-13,9.1-17.5c6.1-4.5,13.8-6.8,23.3-6.8c9.6,0,17.3,2.5,23.4,7.6c6,5.1,8.9,11.3,8.7,18.8l-0.1,0.4     h-16.9c0-4-1.3-7.3-4-9.8c-2.7-2.5-6.5-3.7-11.3-3.7c-4.7,0-8.3,1-10.8,3.1s-3.8,4.7-3.8,7.9c0,2.9,1.4,5.4,4.1,7.3     c2.7,1.9,7.4,3.9,14.1,6c9.6,2.7,16.9,6.2,21.8,10.6c4.9,4.4,7.4,10.1,7.4,17.3c0,7.4-2.9,13.3-8.8,17.6     c-5.9,4.3-13.6,6.5-23.3,6.5c-9.5,0-17.7-2.4-24.8-7.3c-7.1-4.9-10.5-11.7-10.3-20.5l0.1-0.4h17c0,5.2,1.6,9,4.7,11.4     c3.2,2.4,7.6,3.6,13.2,3.6c4.7,0,8.4-1,10.9-2.9C244.9,279.9,246.1,277.3,246.1,274z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M342.4,267.1l0.1,0.4c0.2,9.4-2.7,16.8-8.6,22.3c-5.9,5.5-14,8.2-24.5,8.2c-10.5,0-19-3.4-25.5-10.1     s-9.8-15.4-9.8-26v-17.3c0-10.6,3.2-19.2,9.6-26c6.4-6.8,14.7-10.2,24.9-10.2c10.8,0,19.2,2.8,25.2,8.3c6.1,5.5,9,13,8.8,22.6     l-0.1,0.4h-17c0-5.7-1.4-10.1-4.1-13.2c-2.7-3.1-7-4.6-12.8-4.6c-5.2,0-9.4,2.1-12.4,6.4c-3.1,4.2-4.6,9.6-4.6,16.2v17.4     c0,6.6,1.6,12.1,4.8,16.3c3.2,4.2,7.6,6.4,13.1,6.4c5.5,0,9.5-1.5,12.1-4.4c2.6-2.9,3.9-7.3,3.9-13.1H342.4z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M401.6,278h-30.5l-5.9,18.8h-17.6l29.9-87h17.9l29.8,87h-17.6L401.6,278z M375.4,264.3h21.9l-10.8-34.2     h-0.4L375.4,264.3z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M503.6,296.7h-17.4l-35.1-59.4l-0.4,0.1v59.4h-17.4v-87h17.4l35.1,59.4l0.4-0.1v-59.3h17.4V296.7z\"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path fill=\"#000000\" d=\"M224.4,329.3l51.6,131.6h0.7l51.6-131.6h28v162h-21.9v-64.1l2.2-65.9l-0.6-0.1l-52.5,130.1h-14.6     l-52.3-129.8l-0.6,0.1l2.1,65.5v64.1h-21.9v-162H224.4z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M492.7,416.2h-74.2v57.9h85.6v17.2H396.6v-162h106.3v17.2h-84.4V399h74.2V416.2z\"/>\n\t\t</g>\n\t</g>\n</g>\n</svg></svg>\n\n</svg>\n"
}
```

_404 - Not Found_

- Body

```json
{
  "statusCode": 404,
  "message": "Error not found"
}
```

---

### GET Pagination

```https
GET/customers/pub/renderpagination
```

#### Description

- Get customers pagination

#### Response

_200 - Success_

```json
{
  "statusCode": 200,
  "data": {
    "count": 2,
    "rows": [
      {
        "id": 2,
        "title": "BBB",
        "content": "Conor McGregor stunt: Mascots being punched 'not the brightest thing' says UFC's Dana White",
        "imgUrl": "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/164B4/production/_130061319_gettyimages-1497303960.jpg",
        "authorId": 2,
        "categoryId": 2,
        "status": "Active",
        "createdAt": "2023-06-28T05:24:36.826Z",
        "updatedAt": "2023-06-28T05:24:36.826Z",
        "Category": {
          "id": 2,
          "name": "Fashion",
          "createdAt": "2023-06-28T05:24:36.824Z",
          "updatedAt": "2023-06-28T05:24:36.824Z"
        }
      },
      {
        "id": 7,
        "title": "BBB",
        "content": "Conor McGregor stunt: Mascots being punched 'not the brightest thing' says UFC's Dana White",
        "imgUrl": "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/164B4/production/_130061319_gettyimages-1497303960.jpg",
        "authorId": 2,
        "categoryId": 2,
        "status": "Active",
        "createdAt": "2023-06-30T09:38:57.868Z",
        "updatedAt": "2023-06-30T09:38:57.868Z",
        "Category": {
          "id": 2,
          "name": "Fashion",
          "createdAt": "2023-06-28T05:24:36.824Z",
          "updatedAt": "2023-06-28T05:24:36.824Z"
        }
      }
    ]
  },
  "totalPage": 1
}
```

---

### Get customers all Categories

```https
GET/customers/pub/categories
```

#### Description

- Get customers all categories

#### Request

(Headers)

```json
"access_token":"string"
```

#### Response

_200 - Success_

```json
{
  "message": [
    {
      "id": 1,
      "name": "Sports",
      "createdAt": "2023-06-12T08:26:09.608Z",
      "updatedAt": "2023-06-12T08:26:09.608Z"
    },
    {
      "id": 2,
      "name": "Fashion",
      "createdAt": "2023-06-12T08:26:09.608Z",
      "updatedAt": "2023-06-12T08:26:09.608Z"
    },
    {
      "id": 3,
      "name": "Music",
      "createdAt": "2023-06-12T08:26:09.608Z",
      "updatedAt": "2023-06-12T08:26:09.608Z"
    }
  ]
}
```

---

### Get Customer Favorite Article

```https
GET/customers/pub/favArticle
```

#### Description

- Get customers favorite article

#### Request

(Headers)

```json
"access_token":"string"
```

#### Response

_200 - Success_

```json
{
  "statusCode": 200,
  "data": [
    {
      "CustomerId": 5,
      "ArticleId": 1,
      "createdAt": "2023-07-01T19:13:42.783Z",
      "updatedAt": "2023-07-01T19:13:42.783Z",
      "Article": {
        "id": 1,
        "title": "The NY times",
        "content": "Novak Djokovic Captures the French Open and a 23rd Grand Slam Title",
        "imgUrl": "https://static01.nyt.com/images/2023/06/11/multimedia/11french-men-final-hp-promo2-qpjc/11french-men-final-hp-promo2-qpjc-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale",
        "authorId": 1,
        "categoryId": 1,
        "status": "Active",
        "createdAt": "2023-06-28T05:24:36.826Z",
        "updatedAt": "2023-06-28T05:24:36.826Z"
      }
    }
  ]
}
```

_404 - Not Found_

- Body

```json
{
  "statusCode": 404,
  "message": "Error not found"
}
```

---

### Get Customer Favorite Article by Article Id

```https
GET/customers/pub/favArticle/:id
```

#### Description

- Get customers favorite article by article id

#### Request

(Headers)

```json
"access_token":"string"
```

#### Response

_200 - Success_

```json
{
  "statusCode": 200,
  "data": {
    "CustomerId": 5,
    "ArticleId": 1,
    "updatedAt": "2023-07-01T19:13:42.783Z",
    "createdAt": "2023-07-01T19:13:42.783Z"
  },
  "createdBy": "abc@mail.com"
}
```

_404 - Not Found_

- Body

```json
{
  "statusCode": 404,
  "message": "Error not found"
}
```

---

### Global Error

### Response

_500 - Internal Server Error_

- Body
  ```json
  {
    "statusCode": 500,
    "error": {
      "message": "Internal Server Error"
    }
  }
  ```

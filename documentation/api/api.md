# **REST API**

Endpoints list:

- [`/auth`](./)
  - [`/register`](#Registration)
  - [`/log-in`](#Log-in)
  - [`/log-out`](#Log-out)
  - [`/refresh`](#Refresh)

- [`/appointments`](./)
  - [`/details/:slug`](./)
  - [`/client`](./)
    - [`/get-day`](./)
    - [`/from-now`](./)
    - [`/cancel/:slug`](./)
  - [`/worker`](./)
    - [`/get-day`](./)
    - [`/from-now`](./)
    - [`/cancel/:slug`](./)
    - [`/confirm/:slug`](./)
  - [`/make-appointment`](./)

- [`/profile`](./)
  - [`/find-worker`](./)
  - [`/get-schedule`](./)
  - [`/picture`](./)
  - [`/create/service`](./)
  - [`/become-worker`](./)
  - [`/worker`](./)
    - [`/set-schdule`](./)
    - [`/update`](./)
    - [`/update/weekend-days`](./)
    - [`/become-worker`](./)

- [`/services`](#Services)
  - [`/find`](#Find-service)
  - [`/create`](#Create-service)

## **Auth endpoints**

### **Registration**

```http
POST /auth/register
```

**Body:**

```json
{
    "email": "email",
    "username": "username",
    "profileType": "worker",
    "password": "qwerty"
}
```

| **Parameter** | **Type** | **Requeired** | **Options** |
| :--- | :--- | :--- | :--- |
| `email` | string | true | | |
| `username` | string | true | |
| `firstName` | string | false | |
| `lastName` | string | false | |
| `profileType` | string | true | worker \ client |
| `password` | string | true | |

**Response:**

```json
{
    "id": "1",
    "email": "email",
    "clientID": 1,
    "workerID": 1,
    "accessToken": "token..."
}
```

| **Parameter** | **Type** | **Description** |
| :--- | :--- | :--- |
| `id` | int | |
| `email` | string | |
| `clientID` | int | client profile id |
| `workerID` | int | worker profile id |
| `accessToken` | string | access token |

**Cookies:**

- accessToken
- refreshToken

---

### **Log-in**

```http
POST /auth/log-in
```

**Body:**

```json
{
    "email": "email",
    "password": "qwerty"
}
```

| **Parameter** | **Type** | **Requeired** |
| :--- | :--- | :--- |
| `email` | string | true | |
| `password` | string | true |

**Response:**

```json
{
    "id": "1",
    "email": "email",
    "clientID": 1,
    "workerID": 1,
    "accessToken": "token..."
}
```

| **Parameter** | **Type** | **Description** |
| :--- | :--- | :--- |
| `id` | int | user id |
| `email` | string | user email |
| `clientID` | int | client profile id |
| `workerID` | int | worker profile id |
| `accessToken` | string | access token |

**Cookies:**

- accessToken
- refreshToken

---

### **Log-out**

```http
GET /auth/log-out
```

**Requirements:**

User need to be authenticated

**Response:**

```http
200 OK
```

**Cookies:**

- remove - accessToken
- remove - refreshToken

### **Refresh**

```http
GET /auth/refresh
```

**Requirements:**

User need to be authenticated

**Response:**

```json
{
    "id": "1",
    "email": "email",
    "clientID": 1,
    "workerID": 1,
    "accessToken": "token..."
}
```

| **Parameter** | **Type** | **Description** |
| :--- | :--- | :--- |
| `id` | int | |
| `email` | string | |
| `clientID` | int | client profile id |
| `workerID` | int | worker profile id |
| `accessToken` | string | access token |

**Cookies:**

- accessToken
- refreshToken

## **Services**

### **Find service**

```http
POST /services/find
```

**Querys:**

- name
- limit
- page

| **Query** | **Requeired** | **Default** |
| :--- | :--- | :--- |
| `name` | true | |
| `limit` | false | 20 |
| `page` | false | 0 |

**Response:**

```json
[ 
    { 
        "id": 1, 
        "name": "heircut" 
    }
]
```

| **Parameter** | **Type** | **Description** |
| :--- | :--- | :--- |
| `id` | int | service id |
| `name` | string | service name |

---

### **Create service**

```http
POST /services/create
```

**Body:**

```json
{
    "name": "name"
}
```

| **Parameter** | **Type** | **Requeired** | **Description** |
| :--- | :--- | :--- | :--- |
| `name` | string | true | new service name |

**Response:**

```json
{
    "id": 1,
    "name": "heircut",
    "updatedAt": "2022-01-26T22:49:53.391Z",
    "createdAt": "2022-01-26T22:49:53.391Z"
}
```

| **Parameter** | **Type** | **Description** |
| :--- | :--- | :--- |
| `id` | int | |
| `name` | string | new service name |
| `updatedAt` | string | creation time |
| `createdAt` | string | updation time |
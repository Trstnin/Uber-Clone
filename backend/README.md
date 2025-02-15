# Backend API Documentation

## Endpoint: Register User
**POST /api/users/register**

### Description
This endpoint registers a new user. It validates that the required fields are provided, creates a new user, and returns an authentication token along with user details.

### Request Body
| Field     | Type   | Required | Description                             |
|-----------|--------|----------|-----------------------------------------|
| firstName | string | Yes      | User's first name (min 3 characters)    |
| lastName  | string | No       | User's last name (min 3 characters)     |
| email     | string | Yes      | User's email address (min 5 characters) |
| password  | string | Yes      | User's password                         |

#### Example Request
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Responses

#### Success Response (200 OK)
```json
{
  "message": "User created sucessfully",
  "token": "JWT_TOKEN",
  "user": {
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error Responses

- **User Already Exists (401 Unauthorized)**
  ```json
  {
    "message": "User already exists"
  }
  ```

- **Validation or Missing Field Errors (400 Bad Request)**
  ```json
  {
    "errors": [
      {
        "field": "firstName",
        "message": "First name should be at least 3 characters long"
      }
    ]
  }
  ```

- **Server Error (500 Internal Server Error)**
  ```json
  {
    "message": "Internal server error in registerUser"
  }
  ```

## Endpoint: Login User

**POST /api/users/login**

### Description
Logs in an existing user by verifying credentials and returns an authentication token.

### Request Body
| Field    | Type   | Required | Description          |
|----------|--------|----------|----------------------|
| email    | string | Yes      | User's email address |
| password | string | Yes      | User's password      |

#### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Responses

#### Success Response (200 OK)
```json
{
  "message": "User logged in sucessfully",
  "token": "JWT_TOKEN"
}
```

#### Error Responses

- **Unauthorized (401 Unauthorized)**
  ```json
  {
    "message": "Invalid Email or Password"
  }

- **Server Error (500 Internal Server Error)**
  ```json
  {
    "message": "Internal server error in loginUser"
  }

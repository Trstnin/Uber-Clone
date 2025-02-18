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
  ```

- **Server Error (500 Internal Server Error)**
  ```json
  {
    "message": "Internal server error in loginUser"
  }
  ```

## Endpoint: Get User Profile

**GET /api/users/profile**

### Description
Retrieves the authenticated user's profile information.

### Headers
| Header             | Value     | Description                   |
|--------------------|-----------|-------------------------------|
| Authorization/Cookie | JWT_TOKEN | Token obtained after login    |

### Responses

#### Success Response (200 OK)
```json
{
  "user": {
    "id": "user_id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
    // ...other fields...
  }
}
```

#### Error Response

- **Unauthorized (401 Unauthorized)**
```json
{
  "message": "Unauthorized User"
}
```

## Endpoint: Logout User

**GET /api/users/logout**

### Description
Logs out the authenticated user by clearing the authentication cookie and blacklisting the token.

### Headers
| Header             | Value     | Description                   |
|--------------------|-----------|-------------------------------|
| Authorization/Cookie | JWT_TOKEN | Token obtained after login    |

### Responses

#### Success Response (200 OK)
```json
{
  "message": "Loggout Succesfully"
}
```

#### Error Response

- **Server Error (500 Internal Server Error)**
```json
{
  "message": "Internal server error in Logout"
}
```

## Endpoint: Register Captain

**POST /api/captain/register**

### Description
Registers a new captain. Validates provided fields, creates a captain record, hashes the password, and returns an authentication token along with captain details.

### Request Body
| Field      | Type   | Required | Description                                        |
|------------|--------|----------|----------------------------------------------------|
| fullName   | object | Yes      | Captain's full name                                |
| fullName.firstName | string | Yes  | Captain's first name (min 3 characters)      |
| fullName.lastName  | string | Yes  | Captain's last name (min 3 characters)       |
| email      | string | Yes      | Captain's unique email address                     |
| password   | string | Yes      | Captain's password                                 |
| vehicle    | object | Yes      | Details about the captain's vehicle              |
| vehicle.color      | string | Yes      | Color of the vehicle                        |
| vehicle.plate      | string | Yes      | License plate number of the vehicle         |
| vehicle.capacity   | number | Yes      | Seating capacity of the vehicle             |
| vehicle.vehicleType| string | Yes      | Type of vehicle; valid values: "Car", "Bike", "Scooter" |

#### Example Request
```json
{
  "fullName": { "firstName": "Alice", "lastName": "Smith" },
  "email": "alice.smith@example.com",
  "password": "securepassword",
  "vehicle": {
    "color": "red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "Car"
  }
}
```

### Responses

#### Success Response (201 Created)
```json
{
  "status": "success",
  "message": "Captain registered successfully",
  "token": "JWT_TOKEN",
  "captain": {
    "fullName": {
      "firstName": "Alice",
      "lastName": "Smith"
    },
    "email": "alice.smith@example.com",
    // ...other fields...
  }
}
```

#### Error Responses

- **Conflict (409 Conflict)**
  ```json
  {
    "status": "error",
    "message": "Captain already registered"
  }
  ```

- **Server Error (500 Internal Server Error)**
  ```json
  {
    "status": "error",
    "message": "Internal server error in registerCaptain"
  }
  ```

## Endpoint: Login Captain

**POST /api/captain/login**

### Description
Logs in an existing captain by verifying credentials. Sets the authentication token as a cookie and returns it in the response.

### Request Body
| Field    | Type   | Required | Description          |
|----------|--------|----------|----------------------|
| email    | string | Yes      | Captain's email address |
| password | string | Yes      | Captain's password      |

#### Example Request
```json
{
  "email": "alice.smith@example.com",
  "password": "securepassword"
}
```

### Responses

#### Success Response (200 OK)
```json
{
  "message": "Captain logged in sucessfully",
  "token": "JWT_TOKEN"
}
```

#### Error Responses

- **Unauthorized (400 Bad Request)**
  ```json
  {
    "message": "Invalid Email or Password"
  }
  ```

- **Server Error (500 Internal Server Error)**
  ```json
  {
    "message": "Internal server error in captain login"
  }
  ```

## Endpoint: Get Captain Profile

**GET /api/captain/profile**

### Description
Retrieves the authenticated captain's profile details.

### Headers
| Header                | Value      | Description                         |
|-----------------------|------------|-------------------------------------|
| Authorization/Cookie  | JWT_TOKEN  | Token obtained from login           |

### Responses

#### Success Response (201 Created)
```json
{
  "captain": {
    "fullName": {
      "firstName": "Alice",
      "lastName": "Smith"
    },
    "email": "alice.smith@example.com"
    // ...other fields...
  }
}
```

#### Error Response

- **Unauthorized (401 Unauthorized)**
  ```json
  {
    "message": "Unauthorized User"
  }
  ```

## Endpoint: Logout Captain

**GET /api/captain/logout**

### Description
Logs out the authenticated captain by clearing the authentication cookie and blacklisting the token.

### Headers
| Header                | Value      | Description                         |
|-----------------------|------------|-------------------------------------|
| Authorization/Cookie  | JWT_TOKEN  | Token obtained from login           |

### Responses

#### Success Response (200 OK)
```json
{
  "message": "Logout sucessfully"
}
```

#### Error Response

- **Server Error (500 Internal Server Error)**
  ```json
  {
    "message": "Internal server error in logout captain"
  }
  ```

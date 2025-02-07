# Number Classification API

This API analyzes a given number and returns its mathematical properties along with a fun fact.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/DevalSam/test-number.api
   cd your-repo
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the API Locally**:
   ```bash
   node server.js
   ```

4. **Test the API**:
   - Visit `http://localhost:3000/api/classify-number?number=371` in your browser or use a tool like Postman.

## API Documentation

### Endpoint
- **URL**: `/api/classify-number`
- **Method**: `GET`
- **Query Parameter**: `number` (integer)

### Response Format (200 OK)
```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Response Format (400 Bad Request)
```json
{
  "number": "alphabet",
  "error": true
}
```

### Example Usage
1. **Request**:
   ```
   GET /api/classify-number?number=371
   ```

2. **Response**:
   ```json
   {
     "number": 371,
     "is_prime": false,
     "is_perfect": false,
     "properties": ["armstrong", "odd"],
     "digit_sum": 11,
     "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
   }
   ```

## Backlink
- [HNG Node.js Developers](https://hng.tech/hire/nodejs-developers)
```

define({ "api": [
  {
    "type": "post",
    "url": "/auth",
    "title": "Authentification",
    "group": "Auth",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n {\n  \"data\": \n      {\n        \"token\"\n      }     \n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/auth.js",
    "groupTitle": "Auth",
    "name": "PostAuth"
  },
  {
    "type": "get",
    "url": "/products",
    "title": "Get all products",
    "group": "Products",
    "version": "0.1.0",
    "filename": "./app.js",
    "groupTitle": "Products",
    "name": "GetProducts"
  },
  {
    "type": "get",
    "url": "/products/lipsticks",
    "title": "Get all lipsticks",
    "group": "Products",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n {\n  \"data\": [\n      {\n        \"_id\": \"5e39644b6deed52c67995172\",\n        \"color\": \"#D62352\",\n        \"id\": \"49\",\n        \"name\": \"撩骚\"\n      },\n      {\n        \"_id\": \"5e39651eb3d44441f574f8a3\",\n        \"color\": \"#DC4B41\",\n        \"id\": \"14\",\n        \"name\": \"一见倾心\"\n      },\n      {...}\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/products.js",
    "groupTitle": "Products",
    "name": "GetProductsLipsticks"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create user",
    "group": "Users",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/users.js",
    "groupTitle": "Users",
    "name": "PostUsers"
  }
] });

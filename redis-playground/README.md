# Personal Notes on Redis

> **Official Redis Documentation**: [https://redis.io/docs/latest/develop/](https://redis.io/docs/latest/develop/)

## Overview

Redis (Remote Dictionary Server) is an in-memory, key-value data store known for its speed and flexibility. It is commonly used as a cache, database, or message broker. These notes summarize the key concepts of Redis, focusing on its architecture, data structures, and practical use cases, with a custom example to illustrate its application.

## Key Concepts

### What is Redis?

- **Definition**: Redis is an open-source, in-memory data structure store that supports various data types, including strings, lists, sets, sorted sets, hashes, and more.
- **Purpose**: It is designed for high-performance applications requiring low-latency data access, such as caching, session management, real-time analytics, and message queues.
- **In-Memory**: Data is stored in RAM, enabling faster read/write operations compared to disk-based databases like PostgreSQL or MongoDB.

### Redis Architecture

- **Client-Server Model**: Users interact with a web application, which communicates with a server. The server, in turn, interacts with Redis as a data store.
- **Non-Persistent by Default**: Data is stored in memory, but persistence options (RDB snapshots, AOF logs) can be enabled for durability.
- **Use Cases**:
  - Caching frequently accessed data to reduce database load.
  - Real-time analytics (e.g., counting page views).
  - Pub/Sub messaging for real-time notifications.

## Data Structures in Redis

Redis supports a variety of data structures, making it versatile for different scenarios. Below are the key data structures with examples:

### Strings

Store simple key-value pairs.

**Example**: Storing a user's profile name.
```redis
SET user:1001:name "Alice"
GET user:1001:name
# Output: "Alice"
```

### Lists

Ordered collections of strings, allowing push/pop operations (useful for queues or stacks).

**Example**: Managing a task queue for a to-do app.
```redis
LPUSH tasks "Complete project report"
LPUSH tasks "Send email to team"
LRANGE tasks 0 -1
# Output: ["Send email to team", "Complete project report"]
RPOP tasks
# Output: "Complete project report"
```

### Sets

Unordered collections of unique strings.

**Example**: Tracking unique visitors to a website.
```redis
SADD visitors:2025-07-11 "user:1001"
SADD visitors:2025-07-11 "user:1002"
SMEMBERS visitors:2025-07-11
# Output: ["user:1001", "user:1002"]
```

### Sorted Sets

Sets with scores for ordering, ideal for leaderboards or prioritized queues.

**Example**: Ranking players in a game by score.
```redis
ZADD leaderboard 100 "player:alice"
ZADD leaderboard 150 "player:bob"
ZRANGE leaderboard 0 -1 WITHSCORES
# Output: ["player:alice", "100", "player:bob", "150"]
```

### Hashes

Store multiple fields and values under a single key, like a lightweight object.

**Example**: Storing user profile details.
```redis
HMSET user:1001 name "Alice" email "alice@example.com"
HGETALL user:1001
# Output: ["name", "Alice", "email", "alice@example.com"]
```

### Geo-Spatial Data

Store and query geographical coordinates.

**Example**: Finding nearby coffee shops.
```redis
GEOADD locations 40.7128 -74.0060 "Coffee Shop A"
GEOADD locations 40.7130 -74.0070 "Coffee Shop B"
GEORADIUS locations 40.7128 -74.0060 1 km
# Output: ["Coffee Shop A", "Coffee Shop B"]
```

### Streams

Log-like data structure for time-series data or event streaming.

**Example**: Logging user activity on a website.
```redis
XADD activity:log * user_id 1001 action "login"
XADD activity:log * user_id 1001 action "view_page"
XRANGE activity:log - +
# Output: [..., ["user_id", "1001", "action", "login"], ["user_id", "1001", "action", "view_page"]]
```

## Practical Example: E-Commerce Product Cache

Imagine an e-commerce platform where product details are frequently accessed. To reduce database load, we use Redis to cache product information.

### Storing Product Details (Using Hashes)
```redis
HMSET product:101 name "Laptop" price 999.99 stock 50
HGETALL product:101
# Output: ["name", "Laptop", "price", "999.99", "stock", "50"]
```

### Tracking Popular Products (Using Sorted Sets)
```redis
ZADD popular_products 10 "product:101"
ZADD popular_products 15 "product:102"
ZRANGE popular_products 0 -1 WITHSCORES
# Output: ["product:101", "10", "product:102", "15"]
```

### Managing Cart Items (Using Lists)
```redis
LPUSH cart:user:1001 "product:101"
LPUSH cart:user:1001 "product:102"
LRANGE cart:user:1001 0 -1
# Output: ["product:102", "product:101"]
```

### Checking Stock Availability (Using Strings with NX)
```redis
SET product:101:stock 50 NX
# Sets stock only if key doesn't exist
GET product:101:stock
# Output: "50"
```

### Real-Time Sales Monitoring (Using Streams)
```redis
XADD sales:log * product_id 101 quantity 2
XADD sales:log * product_id 102 quantity 1
XRANGE sales:log - +
# Output: [..., ["product_id", "101", "quantity", "2"], ["product_id", "102", "quantity", "1"]]
```

## Benefits of Redis

- **Speed**: In-memory storage ensures low-latency operations.
- **Flexibility**: Multiple data structures support diverse use cases.
- **Scalability**: Redis can handle high-throughput scenarios with clustering.
- **Ease of Use**: Simple commands and extensive documentation.

## Installation and Setup

To get started with Redis:

### Install Redis (e.g., using Docker)

**Basic Installation:**
```bash
docker run -d --name redis-container -p 6379:6379 redis
```

**If port 6379 is already in use (common issue):**
```

### Connect to Redis

**Using redis-cli (if installed locally):**
```bash
redis-cli -h localhost -p 6379
```

**Using redis-cli inside Docker container:**
```bash
# Connect to running container
docker exec -it <container-id> redis-cli

# Example session:
127.0.0.1:6379> HMSET user:1001 name "Alice" email "alice@example.com"
OK
127.0.0.1:6379> HGETALL user:1001
1) "name"
2) "Alice"
3) "email"
4) "alice@example.com"
```

**Install redis-cli locally (macOS):**
```bash
# Using Homebrew
brew install redis

# Or download from Redis website
# https://redis.io/download
```

### Use in Code (e.g., Node.js with redis package)
```javascript
const { Redis } = require('ioredis');
const client = new Redis();

await client.set('key', 'value');
console.log(await client.get('key')); // Output: value
```

## Best Practices

- **Key Naming**: Use descriptive keys with a naming convention (e.g., `user:1001:name`).
- **Avoid Overuse**: Use Redis for high-frequency, low-latency operations, not as a primary database.
- **Monitoring**: Use tools like RedisInsight to visualize and manage data.

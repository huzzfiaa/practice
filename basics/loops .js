/****************************************************************************************
 LOOPS - INDUSTRY LEVEL GUIDE
 Language: JavaScript
 Purpose: Teach loops with real world usage and performance considerations
 Author Style: Production style explanation

 NOTE:
 Every example is written as if a senior dev is explaining inside a real codebase.

****************************************************************************************/


/****************************************************************************************
1️⃣ FOR LOOP
Most common loop in production when:
- you know iteration count
- working with arrays
- performance matters

Example use cases:
- processing API data
- rendering list items
- data transformation
****************************************************************************************/

// Example data (like API response)
const employees = [
  { id: 1, name: "Ali", salary: 50000 },
  { id: 2, name: "Ahmed", salary: 65000 },
  { id: 3, name: "Sara", salary: 72000 }
];


// classic industry loop
for (let i = 0; i < employees.length; i++) {

  // accessing current item
  const employee = employees[i]

  // real world usage:
  // applying salary increment
  employee.salary = employee.salary * 1.10

}

console.log("Updated Employees:", employees)



/****************************************************************************************
PERFORMANCE TIP
Never do this in loop condition:

for(let i=0; i < employees.length; i++)

if array length calculation expensive.

Better store length.
****************************************************************************************/

for (let i = 0, len = employees.length; i < len; i++) {

  const employee = employees[i]

  // example: preparing payroll data
  console.log(`Processing payroll for ${employee.name}`)

}



/****************************************************************************************
2️⃣ FOR...OF LOOP
Cleaner syntax for arrays.

Industry usage:
- reading values
- simple processing
- API response handling
****************************************************************************************/

const orders = [1200, 4500, 2300, 980]

// calculate total revenue
let totalRevenue = 0

for (const order of orders) {

  // each order value
  totalRevenue += order

}

console.log("Total revenue:", totalRevenue)


/****************************************************************************************
3️⃣ FOR...IN LOOP
Used ONLY for objects.

Industry usage:
- iterating config objects
- dynamic key processing
****************************************************************************************/

const serverConfig = {
  host: "localhost",
  port: 5000,
  database: "productionDB"
}

for (const key in serverConfig) {

  // key = host, port, database
  console.log(key, ":", serverConfig[key])

}



/****************************************************************************************
4️⃣ WHILE LOOP
Used when number of iterations unknown.

Real world example:
- retrying API
- polling server
- background jobs
****************************************************************************************/

let attempts = 0
const maxAttempts = 3

while (attempts < maxAttempts) {

  console.log("Trying API request...")

  attempts++

}



/****************************************************************************************
5️⃣ DO WHILE LOOP
Runs at least once.

Industry usage:
- authentication retry
- game loops
- CLI prompts
****************************************************************************************/

let passwordAttempts = 0

do {

  console.log("Checking password attempt")

  passwordAttempts++

} while (passwordAttempts < 3)



/****************************************************************************************
6️⃣ BREAK
Used to stop loop early.

Real world example:
- searching database results
****************************************************************************************/

const users = ["Ali", "Ahmed", "Sara", "Hassan"]

for (let i = 0; i < users.length; i++) {

  if (users[i] === "Sara") {

    console.log("User found")

    break // stop searching

  }

}



/****************************************************************************************
7️⃣ CONTINUE
Skip current iteration.

Real world example:
- filtering invalid data
****************************************************************************************/

const transactions = [200, -50, 500, -10, 100]

for (let amount of transactions) {

  if (amount < 0) {

    // skip invalid transaction
    continue

  }

  console.log("Processing transaction:", amount)

}



/****************************************************************************************
8️⃣ ARRAY METHODS (MODERN INDUSTRY STYLE)
Senior developers prefer these over loops sometimes.

Examples:
- map
- filter
- reduce

Cleaner and functional.
****************************************************************************************/

const productPrices = [100, 200, 300]

// MAP -> transform data
const discountedPrices = productPrices.map(price => {

  return price * 0.9

})

console.log("Discounted prices:", discountedPrices)



// FILTER -> remove unwanted data
const validTransactions = transactions.filter(amount => {

  return amount > 0

})

console.log("Valid transactions:", validTransactions)



// REDUCE -> aggregate data
const totalSales = productPrices.reduce((total, price) => {

  return total + price

}, 0)

console.log("Total sales:", totalSales)



/****************************************************************************************
9️⃣ PERFORMANCE BEST PRACTICES (VERY IMPORTANT IN INDUSTRY)

❌ BAD
nested loops on big datasets

O(n²)

for(let i=0;i<data.length;i++){
   for(let j=0;j<data.length;j++){
   }
}

This can crash production servers.



✅ BETTER
Use Map / Object lookup (O(1))
****************************************************************************************/


const userIds = [1,2,3,4]
const userMap = {}

// create lookup table
for(const id of userIds){

  userMap[id] = true

}

// now lookup fast
console.log(userMap[3]) // true



/****************************************************************************************
🔟 ASYNC LOOPS (VERY IMPORTANT IN BACKEND)

Never use forEach with async.

❌ BAD
array.forEach(async item => {})

It breaks async flow.



✅ GOOD
****************************************************************************************/

async function processPayments(payments){

  for(const payment of payments){

    await fakePaymentAPI(payment)

  }

}


// fake api
function fakePaymentAPI(payment){

  return new Promise(resolve => {

    setTimeout(() => {

      console.log("Processed payment:", payment)

      resolve()

    }, 1000)

  })

}



/****************************************************************************************
FINAL INDUSTRY RULES

1️⃣ Use FOR loop when performance matters.
2️⃣ Use FOR OF for readability.
3️⃣ Use MAP/FILTER/REDUCE in modern React apps.
4️⃣ Avoid nested loops on large datasets.
5️⃣ Use async loops carefully.

****************************************************************************************/












/****************************************************************************************
10 REAL WORLD LOOP PATTERNS USED IN INDUSTRY
Environment: SaaS / Backend / Frontend Production Apps
Language: JavaScript
****************************************************************************************/


/****************************************************************************************
1️⃣ PAGINATION LOOP
Purpose:
Fetch large database data in small chunks.

Used in:
- dashboards
- analytics systems
- admin panels

Example:
Fetching users 100 at a time from database
****************************************************************************************/

async function fetchAllUsers() {

  let page = 1
  const limit = 100
  let hasMore = true

  while (hasMore) {

    const users = await getUsers(page, limit)

    console.log("Processing page:", page)

    // process users
    for (const user of users) {
      console.log("User:", user.name)
    }

    if (users.length < limit) {
      hasMore = false
    }

    page++
  }

}


/****************************************************************************************
2️⃣ RETRY API LOOP
Purpose:
Retry failed network requests.

Used in:
- payment systems
- login systems
- external APIs
****************************************************************************************/

async function fetchWithRetry(apiCall) {

  const maxRetries = 3

  for (let attempt = 1; attempt <= maxRetries; attempt++) {

    try {

      const result = await apiCall()

      return result

    } catch (error) {

      console.log("Retry attempt:", attempt)

      if (attempt === maxRetries) {
        throw error
      }

    }

  }

}



/****************************************************************************************
3️⃣ BACKGROUND WORKER LOOP
Purpose:
Continuous task processing.

Used in:
- email queues
- notification systems
- message brokers
****************************************************************************************/

async function workerLoop() {

  while (true) {

    const job = await getNextJob()

    if (!job) {

      await sleep(2000)
      continue

    }

    console.log("Processing job:", job.id)

  }

}



/****************************************************************************************
4️⃣ BATCH PROCESSING LOOP
Purpose:
Process huge data in batches.

Used in:
- data migration
- analytics pipelines
****************************************************************************************/

function processInBatches(data) {

  const batchSize = 50

  for (let i = 0; i < data.length; i += batchSize) {

    const batch = data.slice(i, i + batchSize)

    console.log("Processing batch:", batch)

  }

}



/****************************************************************************************
5️⃣ SEARCH LOOP
Purpose:
Find item quickly.

Used in:
- search features
- filtering
****************************************************************************************/

function findUser(users, targetName) {

  for (const user of users) {

    if (user.name === targetName) {

      return user

    }

  }

  return null

}



/****************************************************************************************
6️⃣ STREAM PROCESSING LOOP
Purpose:
Handle real-time data streams.

Used in:
- stock trading apps
- live dashboards
****************************************************************************************/

function processStream(stream) {

  for (const event of stream) {

    console.log("New event:", event)

  }

}



/****************************************************************************************
7️⃣ RATE LIMIT LOOP
Purpose:
Avoid hitting API limits.

Used in:
- scraping
- third-party APIs
****************************************************************************************/

async function fetchProducts(products) {

  for (const product of products) {

    await fetchProductAPI(product)

    // wait 500ms to avoid rate limit
    await sleep(500)

  }

}



/****************************************************************************************
8️⃣ INFINITE SCROLL LOOP
Purpose:
Load data when user scrolls.

Used in:
- social media feeds
- ecommerce sites
****************************************************************************************/

async function loadMorePosts() {

  let page = 1

  while (true) {

    const posts = await getPosts(page)

    if (!posts.length) break

    renderPosts(posts)

    page++

  }

}



/****************************************************************************************
9️⃣ DATA TRANSFORMATION LOOP
Purpose:
Convert API response to UI format.

Used in:
- React apps
- dashboards
****************************************************************************************/

function formatProducts(products) {

  const formatted = []

  for (const product of products) {

    formatted.push({
      id: product.id,
      label: product.name,
      price: `$${product.price}`
    })

  }

  return formatted

}



/****************************************************************************************
🔟 QUEUE PROCESSING LOOP
Purpose:
Process tasks sequentially.

Used in:
- email sending
- payment processing
****************************************************************************************/

async function processQueue(queue) {

  while (queue.length > 0) {

    const task = queue.shift()

    console.log("Executing task:", task)

    await executeTask(task)

  }

}



/****************************************************************************************
UTILITY FUNCTIONS
****************************************************************************************/

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}


/****************************************************************************************
INDUSTRY PERFORMANCE RULES

1️⃣ Avoid nested loops on large datasets
2️⃣ Prefer batch processing
3️⃣ Use async loops carefully
4️⃣ Always add rate limiting for APIs
5️⃣ Use queue workers for heavy tasks

****************************************************************************************/
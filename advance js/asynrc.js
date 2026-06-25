function getData(data){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({
                name:'manas kumar lal',
                data,
            })
        }, 1000);
    })
}

async function fetchData(){
    let data1 = await getData(1);
    console.log(data1);
    let data2 = await getData(2);
    console.log(data2);
    let data3 = await getData(3);
    console.log(data3);
    let data4 = await getData(4);
    console.log(data4);
    let data5 = await getData(5);
    console.log(data5);
}

fetchData();

async function fetchData(){
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(data);
}



// ===== FAKE API FUNCTION =====
function getData(id, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data ${id} fetched`);
      resolve({ id, name: `User ${id}` });
    }, delay);
  });
}

// ===== PROMISE.ALL EXAMPLE =====
async function fetchAllData() {
  console.log("Start fetching...");

  const startTime = Date.now();

  // Parallel execution
  const results = await Promise.all([
    getData(1, 1000), // 1 sec
    getData(2, 2000), // 2 sec
    getData(3, 3000)  // 3 sec
  ]);

  console.log("All Data:", results);

  const endTime = Date.now();
  console.log("Total Time:", (endTime - startTime) / 1000, "seconds");
}

// ===== PAUSE FUNCTION (DELAY / SLEEP) =====
function pause(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ===== USING PAUSE =====
async function runWithPause() {
  console.log("Step 1");
  await pause(2000); // 2 sec wait

  console.log("Step 2 (after 2 sec)");
  await pause(1000); // 1 sec wait

  console.log("Step 3 (after 1 sec)");
}

// ===== RUN =====
fetchAllData();
runWithPause();
await Promise.all([
  getData(1),
  getData(2),
  getData(3)
]);

👉 Agar ek bhi fail → sab fail ❌

✅ Safe Version (Production)
const results = await Promise.allSettled([
  getData(1),
  getData(2),
  getData(3)
]);

console.log(results);

🧠 Interview Bomb

👉 Question:
Difference between Promise.all and Promise.allSettled?

Answer (short):

Promise.all fails fast if any promise rejects, while Promise.allSettled waits for all promises and returns their status.
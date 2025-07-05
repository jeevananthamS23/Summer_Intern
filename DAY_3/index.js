// ==========================
// 1. Synchronous Code Execution
// ==========================

// JavaScript is single-threaded and follows synchronous execution by default.
// Synchronous means "one line at a time". No line runs until the previous one finishes.

console.log("Synchronous Execution Starts");
console.log("A");
console.log("B");
console.log("C");
console.log("Synchronous Execution Ends");


// ==========================
// 2. Asynchronous Code Execution
// ==========================

// Asynchronous code allows execution to continue while waiting for a task (like a timer or API call).
// setTimeout is an example of an asynchronous function.

var b = 'Ready to dive into async functions';
console.log(b);

setTimeout(() => {
    console.log("This code executes after 2 seconds");
}, 2000);

var a = 10;
console.log(a);

// ==========================
// 3. Callback Hell
// ==========================

// Callback Hell happens when callbacks are nested inside other callbacks,
// making code hard to read and maintain.

console.log("Callback Hell Example Starts");
// Uncomment below to see it in action

// setTimeout(() => {
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//         setTimeout(() => {
//             console.log("3");
//             setTimeout(() => {
//                 console.log("4");
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// ==========================
// 4. Promises
// ==========================

// Promises are used to handle asynchronous operations more cleanly than callbacks.
// A Promise has 3 states: Pending, Resolved, Rejected.

let myPromise = new Promise((resolve, reject) => {
    let success = true; // change to false to simulate failure
    if (success) {
        resolve("Promise resolved successfully");
    } else {
        reject("Promise rejected");
    }
});

// Handling Promise using .then() and .catch()
myPromise
    .then((value) => {
        console.log(value); // Output: Promise resolved successfully
    })
    .catch((error) => {
        console.log(error); // Output: Promise rejected
    });

// ==========================
// 5. Async/Await
// ==========================

// Async/Await makes asynchronous code look synchronous and easier to read.
// Await can only be used inside an async function.

const handlePromise = async () => {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log("Error from async:", error);
    } finally {
        console.log("This will run regardless of success or failure");
    }
};

handlePromise();

// ==========================
// 6. Data Fetching using Async/Await
// ==========================

// Fetch API is used to get data from servers.
// It's asynchronous and returns a promise.

const fetchData = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        console.log("Raw Response:", response);

        if (!response.ok) {
            console.log("HTTP Error:", response.statusText);
            return;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error while fetching data:", error);
        throw error;
    }
};

fetchData()
    .then(data => {
        console.log("Fetched Data:", data);
    })
    .catch(error => {
        console.error("Caught Error:", error);
    });


// ==========================
// 7. Type Coercion Examples
// ==========================

// In JavaScript, operators like + try to convert (coerce) operands to strings or numbers
// depending on the context. Let's see how JS behaves with empty arrays and objects.

console.log([] + []);      // ""   => both are converted to strings and concatenated
console.log([] + {});      // "[object Object]" => [] becomes "", {} becomes "[object Object]"
console.log({} + {});      // "[object Object][object Object]" in most cases

// Note: the {} + {} case may behave differently depending on where it's placed 
// because the first {} could be interpreted as a code block.

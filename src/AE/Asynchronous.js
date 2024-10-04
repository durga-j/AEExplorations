export default function Asynchronous() {

    //callback
    function fetchData(callback) {
        setTimeout(() => {
            console.log("Call back Data fetched");
            callback();
        }, 2000);
    }

    fetchData(() => {
        console.log("Callback executed");
    });

    //promises
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true; // Simulate success or failure
            if (success) {
                resolve("Promises Data fetched");
            } else {
                reject("Failed to fetch data");
            }
        }, 2000);
    });

    promise
        .then(data => console.log(data))
        .catch(error => console.error(error));


}

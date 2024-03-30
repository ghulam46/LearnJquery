const worker = new Worker("web-worker.js");

worker.addEventListener("message", (event) => {
    console.log(`Receive message from web worker : ${event.data}`);
})

function buttonClick() {
    console.log("Start Log");
    worker.postMessage(20000);
    console.log("Finish Log");
}

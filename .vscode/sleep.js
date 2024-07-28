
function main() {
    console.log("Sleeping for 5 seconds...");
    const start = Date.now();
    while (Date.now() - start < 3000) {
        // Do nothing.
    }
    console.log("Done!");

    setInterval(() => {
        console.log("ticking!");
    },500);
}

async function sleep(duration) {
    return new Promise((resolve) => setTimeout(() => {
        resolve();
        console.log("Done!");
    }, duration));
}

function mainAsync() {
    console.log("Sleeping for 5 seconds...");
    sleep();
    console.log("Done!");

    setInterval(() => {
        console.log("ticking!");
    },500);
}

mainAsync();
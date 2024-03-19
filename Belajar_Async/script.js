function callback() {
    console.log('Hello world!');
}

function buttonClick() {
    // setTimeout(function() {
    //     callback();
    // }, 5000);
    // setTimeout(callback, 5000);
    setInterval(function() {
        callback();
    }, 2000);
    console.log('Success click button');
}
function callback() {
    console.log('Hello world!');
}

function buttonClick() {
    // setTimeout(function() {
    //     callback();
    // }, 5000);
    setTimeout(callback, 5000);
    console.log('Success click button');
}
// Реализовать класс Futures

class Futures {
    constructor(executor){
        this.executor = executor;
    }

    then(func1, func2) {
        const resolve = (val) => {
            func1(val);
        };
        const reject = (val) => {
            func2(val)
        };
        this.executor(resolve, reject);

    }
}


// Тест #1
var foo = new Futures(function (resolve, reject) {
    resolve(123);
});

foo.then(function (val) {
    console.log("foo.resolved:", val === 123);
}, function () {
    console.log("foo.resolved: fail");
});


// Тест #2
var bar = new Futures(function (resolve, reject) {
    setTimeout(resolve.bind(null, "fail"), 3000);
    setTimeout(reject.bind(null, "ok"), 2000);
});

bar.then(function () {
    console.log("bar.rejected: fail");
}, function (val) {
    console.log("bar.rejected:", val === "ok");
});

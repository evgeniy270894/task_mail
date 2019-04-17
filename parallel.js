// Параллельные вычисления

function parallel(arrayOfFunction, showResult) {
    const result = [];

    const iterator = (arr, index) => {

        const resolve = (val) => {
            result.push(val);
            if(index < arr.length - 1){
                iterator(arr, index + 1);
            }
            else showResult(result)
        };

        if(arr[index].length) {
            arr[index](resolve)
        } else {
            result.push(arr[index]());
            iterator(arr, index + 1);
        }
    };
    iterator(arrayOfFunction, 0)

}


parallel(
    [
        function (resolve) {
            setTimeout(function () {
                resolve(10);
            }, 50);
        },
        function () {
            return 5;
        },
        function (resolve) {
            setTimeout(function () {
                resolve(0);
            }, 10)
        }
    ],
    function (results) {
        console.log(results); // [10, 5, 0]
    });

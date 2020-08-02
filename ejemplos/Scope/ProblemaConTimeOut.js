function hacerAlgoConI(i) {
    console.log(i);
}
var _loop_1 = function (i) {
    setTimeout(function () {
        hacerAlgoConI(i);
    }, 100 * i);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}

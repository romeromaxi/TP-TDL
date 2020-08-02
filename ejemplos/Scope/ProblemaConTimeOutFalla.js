function hacerAlgoConI(i){
    console.log(i);
}

for (var i = 0; i < 10; i++) {
    setTimeout(
        function() { 
            hacerAlgoConI(i);
         }, 100 * i
    );
}
function hacerAlgoConI(i: number){
    console.log(i);
}

for (let i: number = 0; i < 10; i++) {
    setTimeout(
        function() { 
            hacerAlgoConI(i);
         }, 100 * i
    );
}
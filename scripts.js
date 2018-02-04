function drawTree (x) {
    for ( i = 0; i < x; i++) { 
        var star = ' ';
        var space = ' ';            
        for (j = 0; j <= i * 2; j++) {
        star += '*';        
     }
    for (k = i + 1; k < x; k++) {
        space += ' ';
    }
    console.log(space,star);
  }
}
console.log(drawTree(6));

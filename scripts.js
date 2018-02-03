var i = 0,
    j = 0;
    
function drawTree () {
  for (var i=0; i<6; i++) { 
        var star = ' ';
          for (var j=0; j<i; j++) {
        star += '* ';        
      }
    console.log(star);
  }
}
drawTree();
   document.addEventListener('DOMContentLoaded', function(){

   
   var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    
    function move() {
        var x = event.clientX;
        var y = event.clientY;
        // console.log(x);
        // console.log(y);
         
        ctx.clearRect(10, 10, 50, 50);
    }

    
    var array = [];    
    // setka
    for( var i = 0; i < 200; i+=2 ) {
        ctx.fillStyle="#FF0000";
        for( var j = 0; j < 100; j += 2 ) {
            array[i] = ctx.strokeRect(0 + i*10, 0 + j*10 , 10, 10);
    
            ctx.fillRect(0 + i*10, 0 + j*10 , 10, 10);
 
        }
    }
    console.log(array);
    canvas.addEventListener('click', move);
   

        // function clearPage() {
        //     document.addEventListener('mousemove',move);
        // }

        // function stop() {
        //     document.removeEventListener('mousemove',move);
        // }


        // document.addEventListener('mousedown',clearPage);
        // document.addEventListener('mouseup',stop);
        

    


    // ctx.beginPath();
    // ctx.arc(80, 100, 56, 3/4 * Math.PI, 1/4 * Math.PI, true);
    // ctx.fill(); // *14
    // ctx.moveTo(40, 140);
    // ctx.lineTo(20, 40);
    // ctx.lineTo(60, 100);
    // ctx.lineTo(80, 20);
    // ctx.lineTo(100, 100);
    // ctx.lineTo(140, 40);
    // ctx.lineTo(120, 140);
    // ctx.stroke(); // *22
});
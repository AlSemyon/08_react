var makeCount = (function (){
     var count = 0;

     return {
        show = function() {
            console.log(count)
        },
        set = function() {
            count++
        }
    }
 }());

 var s1 = makeCount();
 s1.set();
 s1.set();
 s1.set();
 s2.show();
 
 var s2 = makeCount();
 s2.set();
 s2.show();
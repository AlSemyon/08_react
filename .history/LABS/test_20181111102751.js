var makeCount = (function (){
     var count = 0;

     return {
        show: (function(count) {
            console.log(count)
        })(count),
        set: (function(count) {
            count++
        })(count)
    }
 })();

 var s1 = makeCount;
 s1.set;
 s1.set;
 s1.set;
 s1.show;
 
 var s2 = makeCount;
 s2.set;
 s2.show;
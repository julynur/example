window.addEventListener('load', main, false);
function main () {
    console.log("Заработало!")

    var A = [];
    for (var i=0; i<10; i++) {
        A.push(Math.round(Math.random()*10))
    }
    console.log (A) ;

    // stupid sort
    function stupid_sort(A) {
        var B = [...A];
        var N = B.length;
        for (var i=1; i<N; i++) {
            if (B[i]<B[i-1]) { // замена
                var tmp = B[i];
                B[i] =B[i-1];
                B[i-1] = tmp;
                i=0;
            }
        }
        return B;
    }
    console.log(stupid_sort(A));

    // gnome sort
    function gnome_sort(A) {
        var B = [...A];
        var N = B.length;
        for (var i=1; i<N; i++) {
            if (B[i]<B[i-1]) {
                var tmp = B[i];
                B[i] =B[i-1];
                B[i-1] = tmp;
                i-=2;
            }
        }
        return B;
    }
    console.log(gnome_sort(A));

    // bubble sort
    function bubble_sort(A) {
        var B = [...A];
        var N = B.length;
        for (var i=N; i>1; i--) {
            for (var j=1; j<i; j++) {
                if (B[j]<B[j-1]) {
                    var tmp = B[j];
                    B[j] = B[j-1];
                    B[j-1] = tmp;
                }
            }
        }
        return B;
    }
    console.log(bubble_sort(A));

    //shaker sort
    function shaker_sort(A) {
        var B = [...A];
        var N = B.length;
        for (var i=0; i<Math.floor(N/2); i++) {
            for (var j=1+i; j<N-i; j++) {
                if (B[j]<B[j-1]) {
                    var tmp = B[j];
                    B[j] = B[j-1];
                    B[j-1] = tmp;
                }
            }
            for (var j=N-i-1; j>i; j--) {
                if (B[j]<B[j-1]) {
                    var tmp = B[j];
                    B[j] = B[j-1];
                    B[j-1] = tmp;
                }
            }
        }
        return B;
    }
    console.log(shaker_sort(A));

    function measure_time(sort,A) {
        var time = performance.now();
        sort(A);
        return performance.now()-time;
    }

    var stupid_time = 0;
    var gnome_time = 0;
    var bubble_time = 0;
    var shaker_time = 0;
    for (var i=0; i<1000; i++) {
        var A = [];
        for (var j=0; j<10; j++) {
            A.push(Math.round(Math.random()*10));
        }
        stupid_time += measure_time (stupid_sort, A);
        gnome_time += measure_time (gnome_sort, A); 
        bubble_time += measure_time (bubble_sort, A);
        shaker_time += measure_time (shaker_sort, A);
    }
    console.log('stupid sort:', stupid_time/1000);
    console.log('gnome sort:', gnome_time/1000);
    console.log('bubble sort:', bubble_time/1000);
    console.log('shaker sort:', shaker_time/1000);



}

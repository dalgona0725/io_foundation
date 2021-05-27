// JavaScript Document

//텍스트 스크램블
$(document).ready(function () {
    //alert($( window ).width());
    var theLetters = "1234567890ABCDEFabcdefx"; //You can customize what letters it will cycle through
    var ctnt = "LIVE STREAM"; // Your text goes here
    var speed = 50; // ms per frame
    var increment = 8; // frames per step. Must be >2


    var clen = ctnt.length;
    var si = 0;
    var stri = 0;
    var block = "";
    var fixed = "";
    //Call self x times, whole function wrapped in setTimeout
    (function rustle(i) {
        setTimeout(function () {
            if (--i) {
                rustle(i);
            }
            nextFrame(i);
            si = si + 1;
        }, speed);
    })(clen * increment + 1);

    function nextFrame(pos) {
        for (var i = 0; i < clen - stri; i++) {
            //Random number
            var num = Math.floor(theLetters.length * Math.random());
            //Get random letter
            var letter = theLetters.charAt(num);
            block = block + letter;
        }
        if (si == (increment - 1)) {
            stri++;
        }
        if (si == increment) {
            // Add a letter; 
            // every speed*10 ms
            fixed = fixed + ctnt.charAt(stri - 1);
            si = 0;
        }
        $(".strong").html(fixed + block);
        block = "";
    }
});
//화면중간 서클영역
$(document).ready(function () {
    animateDiv('.circle1');
    animateDiv('.circle2');
    animateDiv('.circle3');
    animateDiv('.circle4');
    animateDiv('.circle5');
    animateDiv('.circle6');
    animateDiv('.circle7');
    animateDiv('.circle8');
    animateDiv('.circle9');
    animateDiv('.circle10');
});

function makeNewPosition($container) {
    // Get viewport dimensions (remove the dimension of the div)
    $container = ($container || $(window))
    var h = $container.height() - 50;
    var w = $container.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv(itemToMove) {
    var $target = $(itemToMove);
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $(itemToMove).animate({
        top: newq[0],
        left: newq[1]
    }, speed, function () {
        animateDiv(itemToMove);
    });
}

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = 0.1;
    var speed = Math.ceil(greatest / speedModifier);

    return speed;
}

//스크롤시 헤더 배경 적용
$(window).scroll(function () {
    var sc = $(window).scrollTop();
    if (sc > 40) {
        $("header").addClass("hbg");
    } else {
        $("header").removeClass("hbg");
    }
});


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//넘버 카운트 업
var sc = true;
$(window).scroll(function () {
    if ($(window).scrollTop() > 1300 && sc == true)
        $('.an_num').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 1000,
                easing: 'linear',
                step: function () {
                    var num = numberWithCommas(Math.floor(this.countNum));
                    $this.text(num);
                },
                complete: function () {
                    var num = numberWithCommas(Math.floor(this.countNum));
                    $this.text(num);
                    sc = false;
                }
            });

        });
});

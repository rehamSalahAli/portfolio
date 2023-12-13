
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
        const elem = document.getElementById("nav");
        let height = elem.offsetHeight + 5;
        const nodeList = document.querySelectorAll(".section");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.paddingTop = height;
        }
    }

    else {
        $('nav').removeClass('black');
    }

    if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }

});

// active btn

var secs = $(".section");

$(window).scroll(function () {
    var distance = $(window).scrollTop();
    secs.each(function (i) {
        if ($(this).position().top
            <= distance + 250) {
            $('.navbar-nav a.active').removeClass('active');

            $('.navbar-nav a').eq(i).addClass('active');
        }
    });
}).scroll();

$(document).ready(function () {
    var typed6 = new Typed('#typed1', {
        strings: [' <span style="color:#3fbaff ">Web</span> Des<span style="color:#ff7208 ">ig</span>ner^1000\n <span style="color:#ff7208 ">Web</span> Dev<span style="color:#3fbaff ">elo</span>per'],

        typeSpeed: 40,
        backSpeed: 20,
        loop: true
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');

});


function validateForm() {
    var name = document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Insert Name";
        return false;
    }
    var email = document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Insert Email";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.querySelector('.status').innerHTML = " Invalid Email";
            return false;
        }
    }
    var subject = document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Insert Subject ";
        return false;
    }
    var message = document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Insert Message";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";
}




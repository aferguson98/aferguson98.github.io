$(window).scroll(function(){
    $("header.full").css("opacity", 1 - $(window).scrollTop() / 50);
    $("#attributions").click(function() {
        $(".attributions-modal-bg").fadeIn(500);
    });
    $("#close-btn").click(function() {
        $(".attributions-modal-bg").fadeOut(500);
    });
});

//PhotoSwipe
function ogJuiceGallery(){
    let pswpElement = document.querySelectorAll('.pswp')[0];
    let assetLoc = "assets/images/ogjuice/"
    let items = [
        {
            src: assetLoc + 'ogjuice.jpg',
            w: 1920,
            h: 1080
        },
        {
            src: assetLoc + 'ogjuice1.jpg',
            w: 1920,
            h: 1080
        },
        {
            src: assetLoc + 'ogjuice2.jpg',
            w: 1920,
            h: 1080
        },
        {
            src: assetLoc + 'ogjuice3.jpg',
            w: 1920,
            h: 1080
        },
        {
            src: assetLoc + 'ogjuice4.jpg',
            w: 1920,
            h: 1080
        },
        {
            src: assetLoc + 'ogjuice5.jpg',
            w: 1920,
            h: 1080
        }
    ];
    let options = {
        index: 0
    };
    let gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}

function zapprGallery(){
    let pswpElement = document.querySelectorAll('.pswp')[0];
    let assetLoc = "assets/images/adheski/"
    let items = [
        {
            src: assetLoc + 'zapback.jpg',
            w: 1920,
            h: 1080
        },
        {
            src: assetLoc + 'zapprback1.jpg',
            w: 1920,
            h: 1080
        },
        {
            src: assetLoc + 'zapprback2.jpg',
            w: 1920,
            h: 1080
        },
        {
            src: assetLoc + 'zapprback3.jpg',
            w: 1920,
            h: 1080
        },
        {
            src: assetLoc + 'zapprback4.jpg',
            w: 1920,
            h: 1080
        },
        {
            src: assetLoc + 'zappr1.png',
            w: 1440,
            h: 2880
        },
        {
            src: assetLoc + 'zappr2.png',
            w: 1440,
            h: 2880
        },
        {
            src: assetLoc + 'zappr3.png',
            w: 1440,
            h: 2880
        },
        {
            src: assetLoc + 'zappr4.png',
            w: 1440,
            h: 2880
        },
        {
            src: assetLoc + 'zappr5.png',
            w: 1440,
            h: 2880
        },
        {
            src: assetLoc + 'zappr6.png',
            w: 1440,
            h: 2880
        },
        {
            src: assetLoc + 'zappr7.png',
            w: 1440,
            h: 2880
        },
        {
            src: assetLoc + 'zappr8.png',
            w: 1440,
            h: 2880
        },
        {
            src: assetLoc + 'zappr9.png',
            w: 1440,
            h: 2880
        }
    ];
    let options = {
        index: 0
    };
    let gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}

function gwidioGallery(){
    let pswpElement = document.querySelectorAll('.pswp')[0];
    let items = [
        {
            src: 'gwidiobacknew.png',
            w: 1920,
            h: 1080
        },
        {
            src: 'gwidio1.jpg',
            w: 1920,
            h: 1080
        },
        {
            src: 'gwidio2.jpg',
            w: 1920,
            h: 1080
        },
        {
            src: 'gwidio3.jpg',
            w: 1920,
            h: 1080
        },
        {
            src: 'gwidio4.jpg',
            w: 1920,
            h: 1080
        }
    ];
    let options = {
        index: 0
    };
    let gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}

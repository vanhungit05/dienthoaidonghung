// hiệu ứng chuyển banner 

function addBanner(img, link) {
    var newDiv = `<div class='item'>
						<a target='_blank' href=` + link + `>
							<img src=` + img + `>
						</a>
					</div>`;
    var banner = document.getElementsByClassName('owl-carousel')[0];
    banner.innerHTML += newDiv;
}

addBanner("Images/banner/banner0.gif", "Images/banner/banner0.gif");
var numBanner = 9; // Số lượng hình banner
for (var i = 1; i <= numBanner; i++) {
    var linkimg = "Images/banner/banner" + i + ".png";
    addBanner(linkimg, linkimg);
}

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1.5,
    margin: 100,
    center: true,
    loop: true,
    smartSpeed: 450,
    autoplay: true,
    autoplayTimeout: 3500
});

// chuyển đổi ảnh banner liên tục phần banner section
var indeximgbanner = 0;

changeImageBanner = function () {
    var imgs = ["bannersecsion1.webp", "bannersecsion2.webp", "bannersecsion3.webp", "bannersecsion4.webp"];
    document.getElementById('imgbanner').src = imgs[indeximgbanner];
    indeximgbanner++;

    if (indeximgbanner == 3) {
        indeximgbanner = 0;
    }
}

//ham thay doi anh theo thoi gian 5000 = 5s
setInterval(changeImageBanner, 5000);

// -----------cuộn lên đầu trang--------------------//
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.backtop').fadeIn();
        } else {
            $('.backtop').fadeOut();
        }
    });
    $('.backtop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })
});
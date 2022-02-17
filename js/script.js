let burger = document.querySelector('.nav__burger'),
    nav = document.querySelector('.nav-list'),
    navBurgerAriaLabel = burger.getAttribute('aria-label'),
    navBurgerAriaHidden = burger.getAttribute('aria-hidden'),
    burgerInput = document.querySelector('.burger__input'),
    searchMobile = document.querySelector('.search-mobile'),
    screenWidth = window.screen.width


// add or delete class
function add_delete_class(nameEl, nameClass){
    document.querySelector(nameEl).classList.toggle(nameClass)
}

// change classes
function change_class(nameEl, nameClass1, nameClass2){
  let classes = document.querySelector(nameEl).classList
  if(!classes.contains(nameClass1) && !classes.contains(nameClass2)) {
    classes.add(nameClass1)
  }
  else {
    if(classes.contains(nameClass1)) {
      classes.remove(nameClass1)
      classes.add(nameClass2)
    }
    else {
      classes.remove(nameClass2)
      classes.add(nameClass1)

    }
  }
}

// add attribute aria-label drop button
function fixed_aria_label(name_block, text_ariaLabel){
    let classList_drop = document.querySelector('.drop-down').classList,
        el = document.querySelector(name_block)
    if(classList_drop.contains('drop-down_close')){

      el.setAttribute('aria-label', 'кнопка свернуть меню')
    }
    else{
      el.setAttribute('aria-label', text_ariaLabel)
    }
  }

// change attribute element
  function changeAttribute(className, nameAttribute, valueAttribute1, valueAttribute2) {
    let element = document.querySelector(className)
    if(!element.hasAttribute(nameAttribute)) {
      element.setAttribute(nameAttribute, valueAttribute1)
    }
    else {
      if(String(element.getAttribute(nameAttribute)) == valueAttribute1) {
        element.setAttribute(nameAttribute, valueAttribute2)
      }
      else {
        element.setAttribute(nameAttribute, valueAttribute1)
      }
    }
  }

  // click on burger
burger.addEventListener('click', function(event) {
    add_delete_class('.nav__navigation', 'nav__list_left')
    add_delete_class('.nav__burger', 'nav__burger_active')
    add_delete_class('body', 'body-hidden')
    burgerInput.setAttribute('aria-label', (this.checked) ? 'кнопка свернуть меню' : 'кнопка развернуть меню навигации по сайту')
})

// click navigation menu`s link
document.querySelectorAll('.nav__link').forEach(function(el){
  el.addEventListener('click',function(event){
    let screenWidth = window.screen.width
    if(screenWidth <= '1200') {
      add_delete_class('.nav__navigation', 'nav__list_left')
      add_delete_class('.nav__burger', 'nav__burger_active')
      add_delete_class('body', 'body-hidden')
      burgerInput.setAttribute('aria-label', (this.checked) ? 'кнопка свернуть меню' : 'кнопка развернуть меню навигации по сайту')
      burgerInput.checked = !(burgerInput.checked)
    }
  })
})

// add variable vh
const changeHeight = () => {
  let vh = window.innerHeight
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

changeHeight()
if(screenWidth <= '1200') {
  burger.setAttribute('aria-hidden', 'false')
  document.querySelector('.nav__navigation').style.height = window.innerHeight + 'px'
}

if(screenWidth <= 662) {
  document.querySelector('.contact-form__element_btn').textContent = 'Заказать'
}

let searchInput = document.querySelector('.search__input'),
    searchPlaceholder = searchInput.getAttribute('placeholder');

(Number(screenWidth) <= 1200) ? searchInput.setAttribute('placeholder', '') : searchInput.setAttribute('placeholder', searchPlaceholder);
window.addEventListener('resize', () => {
    let resizeScreenWidth = window.screen.width
    changeHeight();
    (Number(resizeScreenWidth) <= 1200) ? burger.setAttribute('aria-hidden', 'false') : burger.setAttribute('aria-hidden', 'true');
    (Number(resizeScreenWidth) <= 1200) ? searchInput.setAttribute('placeholder', '') : searchInput.setAttribute('placeholder', searchPlaceholder);
    if(Number(resizeScreenWidth) <= 662) {
      document.querySelector('.contact-form__element_btn').textContent = 'Заказать'
    }
    else {
      document.querySelector('.contact-form__element_btn').textContent = 'Заказать обратный звонок'
    }
  });

searchMobile.addEventListener('click', function() {
  change_class('.search-mobile', 'search-mobile_close', 'search-mobile_open')
  change_class('.search-mobile__icon', 'search-mobile__icon_close', 'search-mobile__icon_open')
  add_delete_class('.header__bottom', 'header__bottom_mob-visible')
  changeAttribute('.nav-list', 'aria-hidden', 'true', 'false')
  changeAttribute('.search-mobile', 'aria-label', 'кнопка закрыть форму поиска по сайту', 'кнопка открыть форму поиска по сайту')
})

let arrayDropDown = document.querySelectorAll('.drop-down')
for(el of arrayDropDown) {
  new SimpleBar(el, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});
}


// open drop-down
document.querySelectorAll(".nav-chapter__button").forEach(function(el){
  el.addEventListener('click', function(event){
    if(el.classList.contains('nav-chapter__button_active')) {
      el.classList.remove('nav-chapter__button_active')
      document.querySelector('.drop-wrapper_active').classList.remove('drop-wrapper_active')
    }
    else {
      let btnActive = document.querySelector('.nav-chapter__button_active')
      if(btnActive) {
        btnActive.classList.remove('nav-chapter__button_active')
        document.querySelector('.drop-wrapper_active').classList.remove('drop-wrapper_active')
      }
      // if(document.querySelector('.drop-wrapper_active')) {
      // document.querySelector('.drop-wrapper_active').classList.remove('drop-wrapper_active')
    // }
      el.classList.add('nav-chapter__button_active')
      el.nextElementSibling.classList.add('drop-wrapper_active')
    }

  })
})

document.addEventListener('click', function(e){
  let elementTarget = e.target,
      dropActive = document.querySelector('.drop-wrapper_active')
  if(dropActive && !elementTarget.classList.contains('drop-wrapper')
                && !elementTarget.classList.contains('nav-chapter__button')
                && !elementTarget.classList.contains('list-links__arrow')) {
    dropActive.classList.remove('drop-wrapper_active')
    document.querySelector('.nav-chapter__button_active').classList.remove('nav-chapter__button_active')
  }
})

document.querySelectorAll(".hero__slider-img").forEach(function(el){
el.classList.add("hero__slider-img_fade")

  // hero slider Swiper
const swiperHero = new Swiper('.hero__swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000,
  },
  speed: 700,
});

})

// gallery slider Swiper
const swiperGallery = new Swiper('.gallery__swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  speed: 700,
  rewind: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // If we need pagination
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 640px
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true,
    },

    663: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2
    },

    1401: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3
    }
  }

});

let galleryNavPrev = document.querySelector(".gallery__button-prev"),
    galleryNavNext = document.querySelector(".gallery__button-next")
galleryNavPrev.setAttribute('aria-label', 'Пролистать галерею назад')
galleryNavNext.setAttribute('aria-label', 'Пролистать галерею вперед')

// add tabindexes for slides
// document.querySelectorAll('.swiper-slide picture').forEach(function(el){
//   el.setAttribute('tabindex', '0')
// })

// custom select
const element = document.querySelector('.style-form__select');
const choices = new Choices(element, {
  searchEnabled: false,
  position: 'middle',
  itemSelectText: '',
  allowHTML: true,
})

// open modal gallery
let galleryImgUrlDefault = document.querySelector('.modal-gallery__img img').getAttribute('src'),
    galleryTitleDefault = document.querySelector('.modal-gallery__title').textContent,
    gallerySubtitleDefault = document.querySelector('.modal-gallery__subtitle').textContent,
    galleryYearDefault = document.querySelector('.modal-gallery__date').textContent,
    galleryTextDefault = document.querySelector('.modal-gallery__text').textContent

document.querySelectorAll(".gallery__slide").forEach(function(el){
  el.addEventListener('click', function(event){
    document.querySelector('.modal-gallery__close').classList.add('close-open')
    let srcEl = el.querySelector('[media = "(max-width: 662px)"]')
    urlImg = srcEl.getAttribute('srcset')
    if(urlImg != 'img/gallery/gallery2-320.jpg'){
      let img = document.querySelector('.modal-gallery__img img')
      img.setAttribute('src', urlImg)
      document.querySelector('.modal-gallery__title').textContent = 'Имя и фамилия автора'
      document.querySelector('.modal-gallery__subtitle').textContent = 'Название произведения'
      document.querySelector('.modal-gallery__date').textContent = 'Годы создания'
      document.querySelector('.modal-gallery__text').textContent = 'Описание произведения'
    }
    else {
      document.querySelector('.modal-gallery__img img').setAttribute('src', galleryImgUrlDefault)
      document.querySelector('.modal-gallery__title').textContent = galleryTitleDefault
      document.querySelector('.modal-gallery__subtitle').textContent = gallerySubtitleDefault
      document.querySelector('.modal-gallery__date').textContent = galleryYearDefault
      document.querySelector('.modal-gallery__text').textContent = galleryTextDefault
    }
    document.querySelector('.modal-gallery').classList.add('modal-gallery_visible')
    document.body.classList.add('body-hidden')
  })
})

// close modal gallery
function closeModalGallery() {
  document.querySelector('.modal-gallery').classList.remove('modal-gallery_visible')
  document.body.classList.remove('body-hidden')
  document.querySelector('.modal-gallery__close').classList.remove('close-open')
}

let overlay = document.querySelector('.modal-gallery'),
    buttonCloseGallery = document.querySelector('.modal-gallery__close')

overlay.addEventListener('click', function(event) {
  if(event.target.classList.contains('modal-gallery')){
    closeModalGallery()
  }
})

buttonCloseGallery.addEventListener('click', closeModalGallery)

 // JQuery accordion
 $(".accordion").accordion({
  heightStyle: "content",
  active: 0,
  collapsible: true
});

// function of adding a class to all elements by class
function add_class(name_el, name_class){
  document.querySelectorAll(name_el).forEach(
    function(el){
      el.classList.add(name_class)
    })
}

add_class('.ui-accordion-header-icon', 'circle')

//make an active link and block on click
let painterPicture = document.querySelector('.paiter-picture'),
    painterUrlImgDefualt = document.querySelector('.catalog__img').getAttribute('src'),
    painterUrlImg1024Defualt = painterPicture.querySelector('[media = "(max-width: 1200px)"]').getAttribute('srcset'),
    painterUrlImg768Defualt = painterPicture.querySelector('[media = "(max-width: 768px)"]').getAttribute('srcset'),
    painterUrlImg320Defualt = painterPicture.querySelector('[media = "(max-width: 662px)"]').getAttribute('srcset'),
    painterTitleDefault = document.querySelector('.section__second-title_catalog').textContent,
    painterDescriptionDefault = document.querySelector('.catalog__text').textContent,
    painterDateDefault = document.querySelector('.catalog__date').textContent

document.querySelectorAll('.accordion-descr__link').forEach(function(el){
  el.addEventListener('click',function(event){
    if(!event.target.classList.contains('accordion-descr__link_active')) {
      document.querySelector('.accordion-descr__link_active').classList.remove('accordion-descr__link_active')
      event.target.classList.add('accordion-descr__link_active')
      let title = event.target.textContent
      if(title.trim() != painterTitleDefault.trim()) {
        painterPicture.querySelector('[media = "(max-width: 662px)"]').setAttribute('srcset', 'img/catalog/Default-320.jpg')
        painterPicture.querySelector('[media = "(max-width: 768px)"]').setAttribute('srcset', 'img/catalog/Default-768.jpg')
        painterPicture.querySelector('[media = "(max-width: 1200px)"]').setAttribute('srcset', 'img/catalog/Default-1024.jpg')
        document.querySelector('.catalog__img').setAttribute('src', 'img/catalog/Default.jpg')
        document.querySelector('.section__second-title_catalog').textContent = 'Что мы о нём знаем?'
        document.querySelector('.catalog__date').textContent = ''
        document.querySelector('.catalog__text').textContent = 'Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!'
        document.querySelector('.catalog__link-gallery').textContent = 'В галерею'
        document.querySelector('.catalog__link-gallery').setAttribute('href', '#gallery')
      }
      else {
        painterPicture.querySelector('[media = "(max-width: 662px)"]').setAttribute('srcset', painterUrlImg320Defualt)
        painterPicture.querySelector('[media = "(max-width: 768px)"]').setAttribute('srcset', painterUrlImg768Defualt)
        painterPicture.querySelector('[media = "(max-width: 1200px)"]').setAttribute('srcset', painterUrlImg1024Defualt)
        document.querySelector('.catalog__img').setAttribute('src', painterUrlImgDefualt)
        document.querySelector('.section__second-title_catalog').textContent = painterTitleDefault
        document.querySelector('.catalog__text').textContent = painterDescriptionDefault
        document.querySelector('.catalog__date').textContent = painterDateDefault
        document.querySelector('.catalog__link-gallery').textContent = ''
        document.querySelector('.catalog__link-gallery').removeAttribute('href')
      }
    }
  })
})

// events slider Swiper
const eventsGallery = new Swiper('.events__slider', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  speed: 700,
  rewind: true,
  keyboard: {
    enabled: true,
  },
  // If we need pagination
  pagination: {
    el: '.events__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'events__bullet swiper-pagination-bullet',
    bulletActiveClass: 'events__bullet_active swiper-pagination-bullet-active'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.events__button-next',
    prevEl: '.events__button-prev',
  },

  breakpoints: {
    // when window width is >= 300px
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true
    },

    663: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2
    },

    769: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 3
    },

    1301: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3
    }
  }

});

// projects slider Swiper
const projectGallery = new Swiper('.projects__slider', {
  direction: 'horizontal',
  loop: false,
  clickable: true,
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  speed: 700,
  rewind: true,
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.projects__button-next',
    prevEl: '.projects__button-prev',
  },

  breakpoints: {
    // when window width is >= 640px
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true
    },

    663: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2
    },

    769: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2
    },

    1201: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3
    },

    1301: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3
    }
  }

});


 // tooltips
 tippy('.marker1', {
   content: 'Пример современных тенденций - современная методология разработки',
 });

 tippy('.marker2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
});

tippy('.marker3', {
  content: 'В стремлении повысить качество',
});


// add yandex map
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.758444, 37.601223],
            // убираем элементы управления картой
            controls: ['geolocationControl'],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14
        });
        // создаём элементы зума маленького размера
        var zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: "small"
            }
        });
        myMap.controls.add(zoomControl);

        // Создаем круг.
        var myCircle = new ymaps.Circle([
          // Координаты центра круга.
          [55.758444, 37.601223],
          // Радиус круга в метрах.
          50,
        ], {
          // Описываем свойства круга.
          // Содержимое балуна.
          balloonContent: "Радиус круга - 10 км",
          // Содержимое хинта.
          hintContent: "Подвинь меня"
        }, {
          // Задаем опции круга.
          // Включаем возможность перетаскивания круга.
          draggable: true,
          // Цвет заливки.
          // Последний байт (77) определяет прозрачность.
          // Прозрачность заливки также можно задать используя опцию "fillOpacity".
          fillColor: "#9d5cd0",
          // Цвет обводки.
          strokeColor: "#fff",
          // Прозрачность обводки.
          strokeOpacity: 0,
          // Ширина обводки в пикселях.
          strokeWidth: 1
        });

        // Добавляем круг на карту.
        myMap.geoObjects.add(myCircle);

        // убираем скрулл карты при скролле страницы и добавляем при клике на карту
        myMap.behaviors.disable('scrollZoom')
        myMap.events.add('click', function(){
          console.log(myMap.behaviors)
          myMap.behaviors.enable('scrollZoom')
        })
  }


// mask phone
var selector = document.querySelector(".tel");
var im = new Inputmask("+7 (999) 999 99 99");
im.mask(selector);

// validate
const validation = new JustValidate('.contact-form', {
colorWrong: '#d11616',
rules: {
    name: {
        required: true,
        menLength: 3,
        maxLength: 30,
    },
    phone: {
      required: true,
      function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
      },
    },
},
messages: {
name: 'Как вас зовут?',
phone:  'Недопустимый формат',
},
submitHandler: function (thisForm) {
    sendAjaxForm('result-form', 'contact-form', 'action_ajax_form.php');
    return false;
}
});

function sendAjaxForm(result_form, ajax_form, url) {
  $.ajax({
      url:     url, //url страницы (action_ajax_form.php)
      type:     "POST", //метод отправки
      dataType: "html", //формат данных
      data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
      success: function(response) { //Данные отправлены успешно
        result = $.parseJSON(response);
        $('.name-client').html(result.name);
        $('#contact-form')[0].reset();
        $('#result-form').addClass('result-form_visible');
        $('body').addClass('body-hidden')
    },
    error: function(response) { // Данные не отправлены
      //result = $.parseJSON(response);
      //$('.nameClient').html(result.name);
      $('.name-client').html(document.querySelector('.contact-form__element input[name = "name"]').value);
      $('#result-form-error').addClass('result-form_visible');
      $('body').addClass('body-hidden')
    }
  })
 }

 let closeSuccessfulSend = document.querySelector('.result-form__close')
 closeSuccessfulSend.addEventListener('click',function(){
     add_delete_class('#result-form', 'result-form_visible')
     add_delete_class('body', 'body-hidden')
 })

 let closeErrorSend = document.querySelector('.result-form-error__close')
 closeErrorSend.addEventListener('click',function(){
     add_delete_class('#result-form-error', 'result-form_visible')
     add_delete_class('body', 'body-hidden')
 })

 let resultForm = document.querySelector('.result-form')
 resultForm.addEventListener('click',function(e){
     let  elementTarget = e.target,
          formVisible = document.querySelector('.result-form_visible')
     if(formVisible && !elementTarget.classList.contains('successful-message') && !elementTarget.classList.contains('successful-message__text')) {
         add_delete_class('#result-form', 'result-form_visible')
         add_delete_class('.body-hidden', 'body-hidden')
     }
 })

$(document).ready(function(){var e=$(".modal");$("[data-toggle=modal]").on("click",()=>{e.toggleClass("modal--visible")}),e.on("click",()=>{"modal__close"!==event.target.className&&"modal modal--visible"!==event.target.className||e.toggleClass("modal--visible")});var i=$(".modal-thanks");i.on("click",()=>{"modal__close-thanks"!==event.target.className&&"modal-thanks modal--visible"!==event.target.className||i.toggleClass("modal--visible")});new Swiper(".projects__swiper-container",{loop:!0,pagination:{el:".projects__swiper-pagination",type:"bullets"},navigation:{nextEl:".projects__swiper-button-next",prevEl:".projects__swiper-button-prev"}});var s=$(".projects__swiper-button-next"),r=$(".projects__swiper-button-prev"),t=$(".projects__swiper-pagination");s.css("left",r.width()+20+t.width()+20),t.css("left",r.width()+20);new Swiper(".steps__swiper-container",{loop:!0,pagination:{el:".steps__swiper-pagination,.plan__swiper-pagination",type:"bullets"},navigation:{nextEl:".steps__swiper-button-next",prevEl:".steps__swiper-button-prev"}});var a=$(".steps__swiper-button-next"),l=$(".steps__swiper-button-prev"),n=$(".steps__swiper-pagination");function o(e){e.target.playVideo()}a.css("left",l.width()+20+n.width()+20),n.css("left",l.width()+20),(new WOW).init(),$(".modal__form").validate({rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:{required:!0,minlength:18},userEmail:{required:!0,email:!0},policyCheckbox:{required:!0}},errorClass:"invalid",messages:{userName:{required:"Имя обязательно",minlength:"Длина имени 2-15 символов",maxlength:"Длина имени 2-15 символов"},userPhone:{required:"Телефон обязательно",minlength:"Введите телефон полностью"},userEmail:{required:"Обязательно укажите Email",email:"Введите в формате: name@domain.com"},policyCheckbox:{required:"Нужно поставить галочку"}},submitHandler:function(s){$.ajax({type:"POST",url:"send.php",data:$(s).serialize(),success:function(r){console.log("Ajax сработал, ответ с сервера",r),$(s)[0].reset(),e.removeClass("modal--visible"),i.toggleClass("modal--visible"),ym(61250854,"reachGoal","form")}})}}),$(".footer__form").validate({rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:{required:!0,minlength:18},userQuestion:{required:!0},policyCheckbox:{required:!0}},errorClass:"invalid",messages:{userName:{required:"Имя обязательно",minlength:"Длина имени 2-15 символов",maxlength:"Длина имени 2-15 символов"},userPhone:{required:"Телефон обязательно",minlength:"Введите телефон полностью"},userQuestion:{required:"Обязательно напишите вопрос"},policyCheckbox:{required:"Нужно поставить галочку"}},submitHandler:function(e){$.ajax({type:"POST",url:"send.php",data:$(e).serialize(),success:function(s){console.log("Ajax сработал, ответ с сервера",s),$(e)[0].reset(),i.toggleClass("modal--visible"),ym(61250854,"reachGoal","form")}})}}),$(".control__form").validate({rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:{required:!0,minlength:18},policyCheckbox:{required:!0}},errorClass:"invalid",messages:{userName:{required:"Имя обязательно",minlength:"Длина имени 2-15 символов",maxlength:"Длина имени 2-15 символов"},userPhone:{required:"Телефон обязательно",minlength:"Введите телефон полностью"},policyCheckbox:{required:"Нужно поставить галочку"}},submitHandler:function(e){$.ajax({type:"POST",url:"send.php",data:$(e).serialize(),success:function(s){i.toggleClass("modal--visible"),console.log("Ajax сработал, ответ с сервера",s),$(e)[0].reset(),ym(61250854,"reachGoal","form")}})}}),$("[type=tel]").mask("+7 (000) 000-00-00",{placeholder:"+7 (___) ___-__-__"}),$(".video__play").on("click",function(){new YT.Player("player",{height:"465",width:"100%",videoId:"8awdQRP816c",events:{onReady:o}})})});
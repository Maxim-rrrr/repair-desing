$(document).ready(function(){var e=$(".modal");$("[data-toggle=modal]").on("click",()=>{e.toggleClass("modal--visible")}),e.on("click",()=>{"modal__close"!==event.target.className&&"modal modal--visible"!==event.target.className||e.toggleClass("modal--visible")});new Swiper(".projects__swiper-container",{loop:!0,pagination:{el:".projects__swiper-pagination",type:"bullets"},navigation:{nextEl:".projects__swiper-button-next",prevEl:".projects__swiper-button-prev"}});var i=$(".projects__swiper-button-next"),t=$(".projects__swiper-button-prev"),r=$(".projects__swiper-pagination");i.css("left",t.width()+20+r.width()+20),r.css("left",t.width()+20);new Swiper(".steps__swiper-container",{loop:!0,pagination:{el:".steps__swiper-pagination,.plan__swiper-pagination",type:"bullets"},navigation:{nextEl:".steps__swiper-button-next",prevEl:".steps__swiper-button-prev"}});var n=$(".steps__swiper-button-next"),s=$(".steps__swiper-button-prev"),a=$(".steps__swiper-pagination");function l(e){e.target.playVideo()}n.css("left",s.width()+20+a.width()+20),a.css("left",s.width()+20),(new WOW).init(),$(".modal__form").validate({rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:{required:!0,minlength:18},userEmail:{required:!0,email:!0},policyCheckbox:{required:!0}},errorClass:"invalid",messages:{userName:{required:"Имя обязательно",minlength:"Длина имени 2-15 символов",maxlength:"Длина имени 2-15 символов"},userPhone:{required:"Телефон обязательно",minlength:"Введите телефон полностью"},userEmail:{required:"Обязательно укажите Email",email:"Введите в формате: name@domain.com"},policyCheckbox:{required:"Нужно поставить галочку"}},submitHandler:function(i){$.ajax({type:"POST",url:"send.php",data:$(i).serialize(),success:function(t){console.log("Ajax сработал, ответ с сервера",t),$(i)[0].reset(),e.removeClass("modal--visible"),document.location.href="thanks.html"}})}}),$(".footer__form").validate({rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:{required:!0,minlength:18},userQuestion:{required:!0},policyCheckbox:{required:!0}},errorClass:"invalid",messages:{userName:{required:"Имя обязательно",minlength:"Длина имени 2-15 символов",maxlength:"Длина имени 2-15 символов"},userPhone:{required:"Телефон обязательно",minlength:"Введите телефон полностью"},userQuestion:{required:"Обязательно напишите вопрос"},policyCheckbox:{required:"Нужно поставить галочку"}},submitHandler:function(e){$.ajax({type:"POST",url:"send.php",data:$(e).serialize(),success:function(i){console.log("Ajax сработал, ответ с сервера",i),$(e)[0].reset(),document.location.href="thanks.html"}})}}),$(".control__form").validate({rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:{required:!0,minlength:18},policyCheckbox:{required:!0}},errorClass:"invalid",messages:{userName:{required:"Имя обязательно",minlength:"Длина имени 2-15 символов",maxlength:"Длина имени 2-15 символов"},userPhone:{required:"Телефон обязательно",minlength:"Введите телефон полностью"},policyCheckbox:{required:"Нужно поставить галочку"}},submitHandler:function(e){$.ajax({type:"POST",url:"send.php",data:$(e).serialize(),success:function(i){document.location.href="thanks.html",console.log("Ajax сработал, ответ с сервера",i),$(e)[0].reset()}})}}),$("[type=tel]").mask("+7 (000) 000-00-00",{placeholder:"+7 (___) ___-__-__"}),$(".video__play").on("click",function(){new YT.Player("player",{height:"465",width:"100%",videoId:"8awdQRP816c",events:{onReady:l}})})});
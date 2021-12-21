
// const language = document.querySelector('.language');
// const languageHead = language.querySelector('.language__select-head');
// const languageList = language.querySelector('.language__select-list');
// const items = language.querySelectorAll('.language__select-item');

// function breakpointChecker() {
//   if (window.innerWidth >= 1201) {
//     jQuery(($) => {
//       $('.language').on('click', '.language__select-head', function () {
//           if ($(this).hasClass('open')) {
//               $(this).removeClass('open');
//               $(this).next().fadeOut();
//           } else {
//               $('.language__select-head').removeClass('open');
//               $('.language__select-list').fadeOut();
//               $(this).addClass('open');
//               $(this).next().fadeIn();
//           }
//       });

//       $('.language').on('click', '.language__select-item', function () {
//           $('.language__select-head').removeClass('open');
//           $(this).parent().fadeOut();
//           items.forEach((item) => {
//             item.classList.remove('language__select-item_active')
//           })
//           $(this).parent().addClass('language__select-item_active');
//           $(this).parent().prev().text($(this).text());
//           $(this).parent().prev().prev().val($(this).text());
//       });

//       $(document).click(function (e) {
//           if (!$(e.target).closest('.language').length) {
//               $('.language__select-head').removeClass('open');
//               $('.language__select-list').fadeOut();
//           }
//       });
//     });
//   } else {
//     $('.language').on('click', '.language__select-item', function () {
//       $(this).parent().prev().text($(this).text());
//       $(this).parent().prev().prev().val($(this).text());
//       items.forEach((item) => {
//         item.classList.remove('language__select-item_active')
//       })
//       $(this).addClass('language__select-item_active');
//   });
//   }
// }

// breakpointChecker();
// window.addEventListener('resize', breakpointChecker);

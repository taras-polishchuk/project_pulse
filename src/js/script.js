// $(document).ready(function(){
//     $('.carousel__inner').slick({
//       infinity: true,
//       speed: 1200,
//       prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/chevron-left-solid.png"></button>',
//       nextArrow: '<button type="button" class="slick-next"><img src="img/slider/chevron-right-solid.png"></button>',
//       responsive: [
//         {
//           breakpoint: 992,
//           settings: {
//             dots: true,
//             arrows: false
//           }
//         }
//       ]
//     });
//   });


	const slider = tns({
		"container": ".carousel__inner",
		"nav": true,
		"items": 1,
		"controls": false,
		"responsive": {
		  "992": {
			"nav": false,
			"items": 1
		  }
		},
		"speed": 400
	  });

	document.querySelector('.prev').addEventListener('click', () => {
		slider.goTo('prev');
	});
	document.querySelector('.next').addEventListener('click', () => {
		slider.goTo('next');
	}) ;


const testData = {
	questions: [
		{
			count: 27,
			next: 2,
			previous: null,
			results:	[
					{
						id: 1,
						title: "Кто был первым президентом России?",
						text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
						date: new Date(2017, 1, 25, 9, 30),
						rating: 15,
					},
					{
						id: 2,
						title: "Кто был первый полетел на Луну?",
						text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni ",
						date: new Date(2017, 2, 7, 16, 45),
						rating: 18,
					},
					{
						id: 3,
						title: "Как создать сайт?",
						text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
						date: new Date(2017, 2, 19, 14, 20),
						rating: 17,
					},
					{
						id: 4,
						title: "Как собрать велосипед?",
						text: "Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui",
						date: new Date(2017, 2, 24, 11, 10),
						rating: 19,
					},
					{
						id: 5,
						title: "Как починить плиту?",
						text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
						date: new Date(2017, 3, 5, 7, 30),
						rating: 20,
					},
				]
			},
			{
				count: 27,
				next: 3,
				previous: 1,
				results:	[
					{
						id: 6,
						title: "Сколько звезд в галактике?",
						text: "Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui",
						date: new Date(2017, 4, 12, 12, 50),
						rating: 23,
					},
					{
						id: 7,
						title: "Почему небо голубое?",
						text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni ",
						date: new Date(2017, 5, 21, 13, 48),
						rating: 22,
					},
					{
						id: 8,
						title: "Кто написал Онегина?",
						text: "Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui",
						date: new Date(2017, 6, 19, 17, 8),
						rating: 25,
					},
					{
						id: 9,
						title: "Зачем устроили революцию 1917?",
						text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
						date: new Date(2017, 7, 9, 10, 25),
						rating: 21,
					},
					{
						id: 10,
						title: "Как стать программистом?",
						text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
						date: new Date(2017, 8, 7, 18, 58),
						rating: 30,
					},
				]
			},
			{
				count: 27,
				next: 4,
				previous: 2,
				results:	[
					{
						id: 11,
						title: "Как зовут актера в фильме Форрест Гамп?",
						text: "Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui",
						date: new Date(2017, 9, 10, 5, 32),
						rating: 24,
					},
					{
						id: 12,
						title: "Что такое гаубица?",
						text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
						date: new Date(2017, 10, 14, 13, 50),
						rating: 27,
					},
					{
						id: 13,
						title: "Кто такой Навальный?",
						text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni ",
						date: new Date(2017, 11, 19, 14, 20),
						rating: 29,
					},
					{
						id: 14,
						title: "Сколько стоит автомобиль?",
						text: "Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui",
						date: new Date(2017, 12, 23, 11, 15),
						rating: 28,
					},
					{
						id: 15,
						title: "Что такое имовайоленс?",
						text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
						date: new Date(2018, 1, 2, 19, 22),
						rating: 26,
					},
				]
			},
			{
				count: 27,
				next: 5,
				previous: 3,
				results:	[
					{
						id: 16,
						title: "Зачем Путину налоги?",
						text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
						date: new Date(2018, 2, 14, 13, 22),
						rating: 10,
					},
					{
						id: 17,
						title: "Что делает нас сильными?",
						text: "Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui",
						date: new Date(2018, 3, 16, 17, 8),
						rating: 14,
					},
					{
						id: 18,
						title: "Как правильно размещивать кофе?",
						text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni ",
						date: new Date(2018, 3, 24, 13, 43),
						rating: 12,
					},
					{
						id: 19,
						title: "Поделитесь рецептом пирога",
						text: "Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui",
						date: new Date(2018, 4, 7, 15, 56),
						rating: 11,
					},
					{
						id: 20,
						title: "Что такое Node.js?",
						text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
						date: new Date(2018, 4, 11, 19, 46),
						rating: 5,
					},
				]
			},
			{
				count: 27,
				next: 6,
				previous: 4,
				results:	[
					{
						id: 21,
						title: "Почему развалился СССР?",
						text: "Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui",
						date: new Date(2018, 5, 9, 11, 12),
						rating: 13,
					},
					{
						id: 22,
						title: "Действительно ли в 90-е все было плохо?",
						text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni ",
						date: new Date(2018, 5, 18, 20, 40),
						rating: 9,
					},
					{
						id: 23,
						title: "Какие уязвимости актуальны?",
						text: "Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui",
						date: new Date(2018, 7, 16, 13, 58),
						rating: 6,
					},
					{
						id: 24,
						title: "Как защититься от медведя",
						text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
						date: new Date(2018, 9, 25, 17, 43),
						rating: 7,
					},
					{
						id: 25,
						title: "Где приобрести шпагу?",
						text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
						date: new Date(2018, 11, 15, 14, 20),
						rating: 8,
					},
				]
			},
			{
				count: 27,
				next: null,
				previous: 5,
				results:	[
					{
						id: 26,
						title: "Кто победил в олимпиаде?",
						text: "Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui",
						date: new Date(2019, 2, 18, 16, 40),
						rating: 1,
					},
					{
						id: 27,
						title: "Кто такой Эйнштейн?",
						text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
						date: new Date(2019, 2, 27, 13, 48),
						rating: 3,
					},
				]
			}
	],
			
};

export default testData;
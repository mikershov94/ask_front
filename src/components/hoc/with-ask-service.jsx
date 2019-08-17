import React from 'react';
import { AskConsumer } from './../ask-service-context';

const withAskService = () => (Wrapped) => {		//компонент высшего порядка
	return (props) => {			//возвращаем функцию
		return(								//которая возвращает компонент Consumer (достает данные из контекста)
			<AskConsumer>
				{										//определяем рендер-функцию
					(askService) => {		//принимает из контекста API
						return(						//возвращает компонент с данными
							<Wrapped {...props}
											 askService={ askService } />
						);
					}
				}
			</AskConsumer>
		);
	};
};

export default withAskService;
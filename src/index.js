import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AskProvider } from './components/ask-service-context';
import ErrorBondary from '/components/error-bondary';
import store from './store';
import AskService from './services';
import App from './components/app';

const askService = new AskService();

ReactDOM.render(<AskProvider value={askService} >
									<ErrorBondary>
										<Provider store={store} >
											<App />
										</Provider>
									</ErrorBondary>
								</AskProvider>, document.getElementById('root'));
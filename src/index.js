import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AskProvider } from './components/ask-service-context';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBondary from './components/error-bondary';
import store from './store';
import AskService from './services';
import App from './components/app';

const askService = new AskService();

ReactDOM.render(<Provider store={store} >
									<ErrorBondary>
										<AskProvider value={askService} >
											<Router>
												<App />
											</Router>
										</AskProvider>
									</ErrorBondary>
								</Provider>, document.getElementById('root'));
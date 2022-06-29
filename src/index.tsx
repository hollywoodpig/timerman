import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(<App />);

serviceWorkerRegistration.register();

window.addEventListener('beforeinstallprompt', function (e) {
	console.log(123);
});

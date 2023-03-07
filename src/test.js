import './style.scss';
import { format } from 'date-fns';

const date = format(new Date(1993, 10, 7), 'MM/dd/yy')
const test = document.createElement('p');
test.textContent = "TESTING THIS SHIT!!!";
test.textContent += date;
document.body.appendChild(test)
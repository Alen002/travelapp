import { handleSubmit } from './js/handler.js'; 
import { remove } from './js/remove.js'; 
import { test } from './js/script.js'; 
import { post } from './js/post.js'; 
import { date } from './js/date.js'; 
import { pixabay } from './js/pixabay.js'; 

import './styles/index.scss';
import img from './media/test.png';
import html from './views/index.html';

// Export for usage of the functions in index.html
export { handleSubmit };  
export { test };
export { remove };
export { post };
export { date };
export { pixabay };
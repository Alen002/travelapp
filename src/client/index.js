import { handleSubmit } from './js/handler.js'; 
import { remove } from './js/remove.js'; 
import { post } from './js/post.js'; 
import { date } from './js/date.js'; 
import { pixabay } from './js/pixabay.js'; 
import { processData } from './js/processData.js'; 
import { forecast } from './js/forecast.js'; 

import './styles/index.scss';
import html from './views/index.html';

// Export for usage of the functions in index.html
export { handleSubmit };  
export { remove };
export { post };
export { date };
export { pixabay };
export { processData };
export { forecast };

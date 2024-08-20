import { initializeNavigation } from './src/nav.mjs';
import { loadHomePage } from './src/home.mjs';
import { Menu } from './src/menu.mjs';
import { displayLocation } from './src/location.mjs'; // Import the displayLocation function
import { renderOrderMenu, submitOrder } from './src/order.mjs'; // Import functions from order.js

const lunchItems = [
                { name:'Grilled Chicken Sandwich',image:'https://www.thecountrycook.net/wp-content/uploads/2022/06/thumbnail-ChickFilA-Grilled-Chicken-Club-500x375.jpg' },
                { name:'Caesar Salad',image:'https://www.halfbakedharvest.com/wp-content/uploads/2022/07/Buffalo-Ranch-Pretzel-Chicken-Caesar-Salad-1.jpg' },
                { name:'Vegetable Soup',image:'https://thecozyapron.com/wp-content/uploads/2018/07/vegetable-soup_thecozyapron_1.jpg' }
                 ];
const dessertsItems = [
                { name:'Chocolate Cake',image: 'https://www.cheersonic.com/wp-content/uploads/2017/05/chocolate-truffle-cake.jpg' },
                { name:'Apple Pie',image:'https://www.thebittersideofsweet.com/wp-content/uploads/2021/11/Simple-Apple-Pie-Pic.jpg' },
                { name:'Cheesecake',image:'https://www.lifeloveandsugar.com/wp-content/uploads/2024/02/Turtle-Cheesecake6E.jpg' }
                ];
const breakfastItems = [
                { name:'Pancakes',image:'https://www.wholesomeyum.com/wp-content/uploads/2017/03/wholesomeyum-Low-Carb-Keto-Pancakes-Recipe-21.jpg' },
                { name:'Eggs Benedict',image:'https://goodfooddiscoveries.com/wp-content/uploads/2023/05/smoked-salmon-eggs-benedict-2.jpg' },
                { name:'Fruit Smoothie',image:'https://www.evolvingtable.com/wp-content/uploads/2022/12/How-to-Make-Smoothie-2.jpg' }
                ];

const lunchMenu = new Menu('lunch', lunchItems);
const dessertsMenu = new Menu('desserts', dessertsItems);
const breakfastMenu = new Menu('breakfast', breakfastItems);

// Global search functionality
document.getElementById('search').addEventListener('input', (event) => {
    const query = event.target.value;

    lunchMenu.filterItems(query);
    dessertsMenu.filterItems(query);
    breakfastMenu.filterItems(query);
});

window.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    initializeNavigation();
    //home page content
    loadHomePage();
    //Menu Content
    lunchMenu.renderMenu();
    dessertsMenu.renderMenu();
    breakfastMenu.renderMenu();
    //Location Content
    displayLocation(); 
    // Order Menu Content
    renderOrderMenu();


    // Event listener for the submit button (order submission)
    document.getElementById('submit-order').addEventListener('click', submitOrder);

});

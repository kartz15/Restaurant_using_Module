export {renderOrderMenu,addToOrder,updateOrderSummary,submitOrder}
const orderItems = [
    { name: 'Grilled Chicken Sandwich', price: 8.99 },
    { name: 'Caesar Salad', price: 7.99 },
    { name: 'Vegetable Soup', price: 5.99 },
    { name: 'Chocolate Cake', price: 4.99 },
    { name: 'Apple Pie', price: 3.99 },
    { name: 'Cheesecake', price: 5.99 },
    { name: 'Pancakes', price: 6.99 },
    { name: 'Eggs Benedict', price: 9.99 },
    { name: 'Fruit Smoothie', price: 4.49 }
];

// Array to store the ordered items
let order = [];

// Function to render menu items
function renderOrderMenu() {
    const orderMenu = document.getElementById('order-menu');
    if (orderMenu) {
        orderMenu.innerHTML = ''; // Clear previous content

        orderItems.forEach(item => {
            // Create a container for each menu item
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('order-item');

            // Create and add item name
            const itemName = document.createElement('span');
            itemName.textContent = item.name;
            itemDiv.appendChild(itemName);

            // Create and add item price
            const itemPrice = document.createElement('span');
            itemPrice.textContent = `$${item.price.toFixed(2)}`;
            itemDiv.appendChild(itemPrice);

            // Create and add "Add to Order" button
            const addButton = document.createElement('button');
            addButton.textContent = 'Add to Order';
            addButton.classList.add('btn');
            addButton.addEventListener('click', () => addToOrder(item));
            itemDiv.appendChild(addButton);

            // Append item to menu
            orderMenu.appendChild(itemDiv);
        });
    } else {
        console.error('Order menu section not found');
    }
}

// Function to add item to order
function addToOrder(item) {
    order.push(item);
    updateOrderSummary();
}

// Function to update the order summary
 function updateOrderSummary() {
    const summaryContent = document.getElementById('summary-content');
    if (summaryContent) {
        summaryContent.innerHTML = ''; // Clear previous content

        if (order.length === 0) {
            summaryContent.textContent = 'Your order is empty.';
            return;
        }

        let total = 0;

        // Create and add each item in the order
        order.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('order-summary-item');

            const itemName = document.createElement('span');
            itemName.textContent = item.name;
            itemDiv.appendChild(itemName);

            const itemPrice = document.createElement('span');
            itemPrice.textContent = `$${item.price.toFixed(2)}`;
            itemDiv.appendChild(itemPrice);

            summaryContent.appendChild(itemDiv);

            total += item.price;
        });

        // Add total price
        const totalDiv = document.createElement('div');
        totalDiv.classList.add('order-summary-total');
        totalDiv.textContent = `Total: $${total.toFixed(2)}`;
        summaryContent.appendChild(totalDiv);
    } else {
        console.error('Order summary section not found');
    }
}

// Function to handle order submission
 function submitOrder() {
    if (order.length === 0) {
        alert('Please add items to your order before submitting.');
        return;
    }

    // Here you could implement functionality to send the order data to a server or process it
    console.log('Order submitted:', order);
    alert('Order has been Placed! You Order Will take 30min to Prepare. Once Ready will be available in the Pickup Area.');
    order = []; // Clear the order
    updateOrderSummary(); // Update summary to reflect the cleared order
}

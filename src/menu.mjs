 export {Menu}
 
class Menu {
    constructor(type, items) {
        this.type = type;
        this.allItems = items; // Store original items
        this.items = items; // Current items to display
    }

    renderMenu() {
        const container = document.getElementById(`${this.type}-menu`);
        if (container) {
            container.innerHTML = ''; // Clear previous content

            const menuTitle = document.createElement('h2');
            menuTitle.textContent = `${this.type.charAt(0).toUpperCase() + this.type.slice(1)} Menu`;
            container.appendChild(menuTitle);

            const menuList = document.createElement('ul');
            this.items.forEach(item => {
                const listItem = document.createElement('li');

                const itemImage = document.createElement('img');
                itemImage.src = item.image;
                itemImage.alt = item.name;
                itemImage.className = 'menu-item-image';

                const itemName = document.createElement('span');
                itemName.textContent = item.name;
                itemName.className = 'menu-item-name';

                listItem.appendChild(itemImage);
                listItem.appendChild(itemName);
                menuList.appendChild(listItem);
            });
            container.appendChild(menuList);
        }
    }
    filterItems(query) {
        if (query === '') {
            this.items = this.allItems; // Show all items if query is empty
        } else {
            this.items = this.allItems.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
        }
        this.renderMenu();
    }
}

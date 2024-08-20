export function loadHomePage() {
    const homeSection = document.getElementById('home');

    if (homeSection) {
        homeSection.innerHTML = ''; // Clear previous content

        // Create and add welcome message
        const welcomeMessage = document.createElement('div');
        welcomeMessage.classList.add('welcome-message');
        welcomeMessage.innerHTML = `
            <h1>Welcome to Our Restaurant!</h1>
            <p>Experience the best dining with us. Enjoy a wide variety of dishes made with fresh ingredients and served with a smile.</p>
        `;
        homeSection.appendChild(welcomeMessage);

        // Create and add featured dishes
        const featuredDishes = document.createElement('div');
        featuredDishes.classList.add('featured-dishes');
        featuredDishes.innerHTML = `
            <h2>Featured Dishes</h2>
            <div class="dishes">
                <div class="dish">
                    <img src="https://www.thecountrycook.net/wp-content/uploads/2022/06/thumbnail-ChickFilA-Grilled-Chicken-Club-500x375.jpg" alt="Grilled Chicken Sandwich">
                    <p>Grilled Chicken Sandwich</p>
                </div>
                <div class="dish">
                    <img src="https://www.halfbakedharvest.com/wp-content/uploads/2022/07/Buffalo-Ranch-Pretzel-Chicken-Caesar-Salad-1.jpg" alt="Caesar Salad">
                    <p>Caesar Salad</p>
                </div>
            </div>
        `;
        homeSection.appendChild(featuredDishes);

        // Create and add testimonials
        const testimonials = document.createElement('div');
        testimonials.classList.add('testimonials');
        testimonials.innerHTML = `
            <h2>What Our Customers Say</h2>
            <blockquote>
                <p>"Amazing food and wonderful service. A must-visit for food lovers!" - Jane Doe</p>
            </blockquote>
            <blockquote>
                <p>"The best dining experience I've had in a long time. Highly recommend!" - John Smith</p>
            </blockquote>
        `;
        homeSection.appendChild(testimonials);

        // Create and add contact information
        const contactInfo = document.createElement('div');
        contactInfo.classList.add('contact-info');
        contactInfo.innerHTML = `
            <h2>Contact Us</h2>
            <p>Have questions or want to make a reservation? Reach out to us:</p>
            <p>Email: contact@restaurant.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Follow us on <a href="https://www.facebook.com/restaurant" target="_blank">Facebook</a> and <a href="https://www.instagram.com/restaurant" target="_blank">Instagram</a></p>
        `;
        homeSection.appendChild(contactInfo);
    }
}

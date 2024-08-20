
export function displayLocation() {
    const locationSection = document.getElementById('location');

    if (locationSection) {

        // // Clear previous content
        // locationSection.innerHTML = '';

        // // Create and add the main heading
        // const heading = document.createElement('h2');
        // heading.textContent = 'Our Location';
        // heading.style.color = 'white'; // Ensure heading text is visible
        // locationSection.appendChild(heading);

        // Create and add the location info container
        const locationInfo = document.createElement('div');
        locationInfo.classList.add('location-info');

        // Address paragraph
        const addressPara = document.createElement('p');
        addressPara.innerHTML = `<strong>Address:</strong> 123 Main Street, Anytown, USA`;
        locationInfo.appendChild(addressPara);

        // Phone paragraph
        const phonePara = document.createElement('p');
        phonePara.innerHTML = `<strong>Phone:</strong> <a href="tel:1234567890">(123) 456-7890</a>`;
        locationInfo.appendChild(phonePara);

        // Email paragraph
        const emailPara = document.createElement('p');
        emailPara.innerHTML = `<strong>Email:</strong> <a href="mailto:info@restaurant.com">info@restaurant.com</a>`;
        locationInfo.appendChild(emailPara);

        // Directions link
        const directionsLink = document.createElement('a');
        directionsLink.href = 'https://www.google.com/maps/dir/?api=1&destination=123+Main+Street,+Anytown,+USA';
        directionsLink.target = '_blank';
        directionsLink.classList.add('btn');
        directionsLink.textContent = 'Get Directions';
        locationInfo.appendChild(directionsLink);

        // Public transit paragraph
        const transitPara = document.createElement('p');
        transitPara.innerHTML = `<strong>Public Transit:</strong> Bus lines 1, 2, and 3 stop nearby. Check local transit schedules for details.`;
        locationInfo.appendChild(transitPara);

        // Append the location info to the location section
        locationSection.appendChild(locationInfo);

        // Ensure the section is visible
        locationSection.classList.add('active');
        console.log('Location info added');
    } else {
        console.error('Location section not found');
    }
}

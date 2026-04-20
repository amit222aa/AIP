# Real Estate Website

A colorful and responsive real estate website built with HTML, CSS, Bootstrap, and JavaScript.

## Features

- **Home Page**: Hero section, featured properties, about preview
- **About Page**: Company information and mission
- **Properties Page**: Property listings with working search and filter functionality
- **Contact Page**: Contact form with validation
- **Responsive Design**: Works on all devices using Bootstrap
- **Colorful UI**: Vibrant colors and modern design
- **Interactive Elements**: Search bar, form validation, smooth animations

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5.3.0
- JavaScript (ES6+)

## File Structure

```
real-estate-website/
├── index.html          # Home page
├── about.html          # About page
├── properties.html     # Properties listing page
├── contact.html        # Contact page
├── css/
│   └── styles.css      # Custom styles
├── js/
│   └── scripts.js      # JavaScript functionality
└── images/             # Image placeholders
    ├── house1.jpg
    ├── apartment1.jpg
    └── villa1.jpg
```

## How to Run

1. Clone or download the project files
2. Open the project folder in VS Code
3. Run a local server (e.g., `python -m http.server 8000`)
4. Open `http://localhost:8000` in your browser

## Search Functionality

The properties page includes a working search bar that allows users to:
- Search by property name, location, or description
- Filter by property type (House, Apartment, Villa, Condo)
- Real-time filtering as you type

## Contact Form

The contact form includes:
- Client-side validation
- Success message on submission
- Form reset after successful submission

## Customization

- Colors can be modified in `css/styles.css`
- Properties can be added/edited in `properties.html`
- JavaScript functionality can be extended in `js/scripts.js`

## Images

The website uses placeholder images from via.placeholder.com. To use real images:
1. Replace the image URLs in the HTML files
2. Add actual image files to the `images/` folder
3. Update the `src` attributes accordingly

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is for educational purposes.
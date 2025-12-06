// Products Data
const productsData = {
    'food-grains': {
        title: 'Food Grains',
        description: 'Leading Exporters, Wholesaler and Trader of Pearl Millet Seeds and White Sorghum Seeds from Ahmedabad.',
        products: [
            {
                id: 'pearl-millet',
                name: 'Pearl Millet Seeds',
                price: '₹ 45.00',
                priceDetails: '/ Kilogram (+ 5% GST applicable)',
                moq: '1000 Kilogram (MOQ)',
                image: 'assets/images/products/pearl-millet.jpg',
                specs: {
                    'Business Type': 'Exporter, Supplier, Trader',
                    'Grade': 'Human Grade',
                    'Packaging Type': 'PP Bag',
                    'Packaging Size': '25kg, 50kg, 100kg, 40kg',
                    'Country of Origin': 'India',
                    'Storage Instruction': 'Store In Cool And Dry Place',
                    'Certification': 'FSSAI',
                    'Shelf Life': '2 Years'
                },
                description: 'Green pearl millet seeds are hygienically cleaned through various stages and contemporary and traditional methods as per defined food standards. These millet seeds are extensively used to make Human consumptions, medicines, and many others. We are offering these Green Pearl Millet seeds in various quantities as per patrons requirement at market leading prices.',
                features: [
                    'Safe to consume',
                    'Easy to digest',
                    'Rich in nutrients'
                ]
            },
            {
                id: 'white-sorghum',
                name: 'White Sorghum Seeds',
                price: '₹ 60.00',
                priceDetails: '/ Kilogram (+ 5% GST applicable)',
                moq: '1000 Kilogram (MOQ)',
                image: 'assets/images/products/white-sorghum.jpg',
                specs: {
                    'Business Type': 'Exporter, Supplier, Trader',
                    'Grade': 'Food Grade',
                    'Certification': 'FSSAI',
                    'Cultivation Type': 'Natural',
                    'Processing Type': 'Fine Processed',
                    'Purity': '99%',
                    'Feature': 'Gluten Free, Good for Health, Natural Test, No Artificial Flavour, No Genetic Engineering, No Preservatives, Non Harmful',
                    'Packaging Type': 'PP Bag'
                },
                description: 'People in India are consuming white sorghum for centuries. With chewy texture, these cereal grains which consumed raw offers lignin protein, 3gms dietary fiber and iron. It can be taken in many lungs, some people prefer boiled sorghum, while some like to pop it like popcorn. This 100% gluten-free white sorghum can be ground into flour, which can be used in it is or mixed with other gluten-free flours.',
                features: [
                    'Gluten free',
                    'Good for health',
                    'Natural test',
                    'No artificial flavour'
                ]
            },
            {
                id: 'basmati-rice',
                name: 'Premium Basmati Rice',
                price: '₹ 120.00',
                priceDetails: '/ Kilogram (+ 5% GST applicable)',
                moq: '500 Kilogram (MOQ)',
                image: 'assets/images/products/basmati-rice.jpg',
                specs: {
                    'Business Type': 'Exporter, Supplier, Trader',
                    'Grade': 'Premium Grade',
                    'Grain Length': 'Extra Long',
                    'Purity': '99.5%',
                    'Moisture': 'Max 12%',
                    'Broken Grains': 'Max 1%',
                    'Packaging': '25kg, 50kg bags'
                },
                description: 'Our Premium Basmati Rice is known for its exceptional aroma, extra-long grains, and fluffy texture when cooked. Sourced from the finest farms and aged to perfection.',
                features: [
                    'Extra long grains',
                    'Rich aroma',
                    'Fluffy texture',
                    'Aged rice'
                ]
            },
            {
                id: 'organic-pulses',
                name: 'Organic Pulses',
                price: '₹ 85.00',
                priceDetails: '/ Kilogram (+ 5% GST applicable)',
                moq: '500 Kilogram (MOQ)',
                image: 'assets/images/products/organic-pulses.jpg',
                specs: {
                    'Business Type': 'Exporter, Supplier, Trader',
                    'Grade': 'Organic Grade',
                    'Certification': 'Organic Certified',
                    'Purity': '99%',
                    'Packaging': '25kg, 50kg bags'
                },
                description: 'High-quality organic pulses rich in protein and essential nutrients. Perfect for healthy diets and various culinary applications.',
                features: [
                    'Organic certified',
                    'High protein',
                    'Rich in nutrients',
                    'Chemical-free'
                ]
            }
        ]
    },
    'whole-spices': {
        title: 'Whole Spices',
        description: 'Leading Exporters, Wholesaler and Trader of Black Mustard Seeds, Curom Seeds, coriander seeds, cumin seeds, Fennel Seeds, fenugreek seeds and green cardamom from Ahmedabad.',
        products: [
            {
                id: 'black-mustard',
                name: 'Black Mustard Seeds',
                price: '₹ 90.00',
                priceDetails: '/ Kilogram (+ 5% GST applicable)',
                moq: '500 Kilogram (MOQ)',
                image: 'assets/images/products/black-mustard.jpg',
                specs: {
                    'Business Type': 'Exporter, Supplier, Trader',
                    'Packaging Size': '25Kg, 50Kg, 100kg',
                    'Cultivation Type': 'Natural',
                    'Quality Available': 'A Grade',
                    'Packaging Type': 'PP Bags',
                    'Grade Standard': 'Food Grade',
                    'Form': 'Granules',
                    'Drying Process': 'Sun Dry'
                },
                description: 'Mustard seeds are the small round seeds of various mustard plants. The seeds are usually about 1 or 2 mm in diameter. Mustard seeds may be colored from yellowish white to black. They are important spices in many regional foods.',
                features: [
                    'Natural cultivation',
                    'Sun dried',
                    'A Grade quality',
                    'Food grade standard'
                ]
            },
            {
                id: 'curom-seeds',
                name: 'Curom Seeds',
                price: '₹ 160.00',
                priceDetails: '/ Kilogram (+ 5% GST applicable)',
                moq: '50 Kilogram (MOQ)',
                image: 'assets/images/products/curom-seeds.jpg',
                specs: {
                    'Business Type': 'Exporter, Supplier, Trader',
                    'Speciality': 'Pesticide Pre (For Raw Products), No Artificial Flavour, No Preservatives, Bitter Taste, Hot And Pungent',
                    'Storage Condition': 'Dried',
                    'Usage/Application': 'Cooking Flavoring Vegetarian Dishes, Improving Cholesterol Levels, Lower Blood Pressure, Fighting Peptic Ulcers, Improving Digestion, Preventing Coughing, Improving Airflow, Hair And Skin Health',
                    'Grade Standard': 'Food Grade',
                    'Quality Available': 'A Grade',
                    'Packaging Size': '10Kg, 20Kg, 25Kg, 50Kg',
                    'Cultivation Type': 'Natural'
                },
                description: 'Carom Seed is used to flavor vegetarian dishes primarily legumes and bread dishes. In Indian cuisine, Ajowan/Curom seeds are added during the tadka or tempering process of cooking. Bitter taste, Hot and pungent. Carom Seed can be stored indefinitely if kept from light in airtight containers. Being a strong aromatic spice, green that the lid is tightly closed to retain the freshness of the spic.',
                features: [
                    'Pesticide free',
                    'No artificial flavour',
                    'Natural cultivation',
                    'A Grade quality'
                ]
            },
            {
                id: 'coriander-seeds',
                name: 'Coriander Seeds',
                price: '₹ 75.00',
                priceDetails: '/ Kilogram (+ 5% GST applicable)',
                moq: '500 Kilogram (MOQ)',
                image: 'assets/images/products/coriander-seeds.jpg',
                specs: {
                    'Business Type': 'Exporter, Supplier, Trader',
                    'Grade': 'Food Grade',
                    'Purity': '99%',
                    'Packaging': '25kg, 50kg bags'
                },
                description: 'Premium quality coriander seeds with rich aroma and flavor. Essential spice for various cuisines.',
                features: [
                    'Rich aroma',
                    'High purity',
                    'Food grade',
                    'Natural'
                ]
            },
            {
                id: 'cumin-seeds',
                name: 'Cumin Seeds',
                price: '₹ 180.00',
                priceDetails: '/ Kilogram (+ 5% GST applicable)',
                moq: '500 Kilogram (MOQ)',
                image: 'assets/images/products/cumin-seeds.jpg',
                specs: {
                    'Business Type': 'Exporter, Supplier, Trader',
                    'Grade': 'Premium Grade',
                    'Purity': '99.5%',
                    'Packaging': '25kg, 50kg bags'
                },
                description: 'High-quality cumin seeds with distinctive aroma. Perfect for tempering and flavoring dishes.',
                features: [
                    'Premium quality',
                    'Strong aroma',
                    'High purity',
                    'Natural'
                ]
            },
            {
                id: 'green-cardamom',
                name: 'Green Cardamom',
                price: '₹ 1,200.00',
                priceDetails: '/ Kilogram (+ 5% GST applicable)',
                moq: '100 Kilogram (MOQ)',
                image: 'assets/images/products/green-cardamom.jpg',
                specs: {
                    'Business Type': 'Exporter, Supplier, Trader',
                    'Grade': 'Premium Grade',
                    'Color': 'Green',
                    'Purity': '99%',
                    'Moisture': 'Max 12%',
                    'Packaging Type': 'PP Bags, Cartons',
                    'Packaging Size': '5kg, 10kg, 25kg',
                    'Cultivation Type': 'Natural',
                    'Origin': 'India'
                },
                description: 'Premium quality green cardamom, known as the "Queen of Spices". Our cardamom pods are carefully selected for their intense aroma, vibrant green color, and superior flavor. Widely used in both sweet and savory dishes, as well as in beverages and desserts.',
                features: [
                    'Premium quality pods',
                    'Intense aroma',
                    'Vibrant green color',
                    'Natural cultivation',
                    'High oil content'
                ]
            }
        ]
    }
};

// Get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Load products based on URL parameters
function loadProducts() {
    const category = getUrlParameter('category');
    const productId = getUrlParameter('product');
    
    const pageTitle = document.getElementById('page-title');
    const pageDescription = document.getElementById('page-description');
    const productsContainer = document.getElementById('products-container');
    
    if (category && productsData[category]) {
        const categoryData = productsData[category];
        
        if (productId) {
            // Show single product detail view
            const product = categoryData.products.find(p => p.id === productId);
            if (product) {
                pageTitle.textContent = product.name;
                pageDescription.textContent = '';
                productsContainer.classList.remove('products-grid-view');
                productsContainer.classList.add('products-list');
                
                productsContainer.innerHTML = renderDetailCard(product);
            }
        } else {
            // Show all products in category as mini cards
            pageTitle.textContent = categoryData.title;
            pageDescription.textContent = categoryData.description;
            productsContainer.classList.remove('products-list');
            productsContainer.classList.add('products-grid-view');
            
            productsContainer.innerHTML = categoryData.products.map(product => renderMiniCard(product, category)).join('');
        }
    } else {
        // Show all categories with mini cards
        pageTitle.textContent = 'Our Products';
        pageDescription.textContent = 'Browse our premium selection of food grains and whole spices.';
        productsContainer.classList.remove('products-list');
        productsContainer.classList.add('products-grid-view');
        
        let allProductsHTML = '';
        for (const [catKey, catData] of Object.entries(productsData)) {
            allProductsHTML += `<h2 class="category-heading">${catData.title}</h2>`;
            allProductsHTML += `<div class="category-products-grid">`;
            allProductsHTML += catData.products.map(product => renderMiniCard(product, catKey)).join('');
            allProductsHTML += `</div>`;
        }
        productsContainer.innerHTML = allProductsHTML;
    }
}

// Render mini product card for listing view
function renderMiniCard(product, category) {
    return `
        <div class="product-mini-card">
            <div class="mini-card-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <h3 class="mini-card-title">${product.name}</h3>
            <div class="mini-card-buttons">
                <a href="products.html?category=${category}&product=${product.id}" class="mini-btn enquiry-btn">Enquiry Now</a>
                <a href="products.html?category=${category}&product=${product.id}" class="mini-btn view-btn">View More</a>
            </div>
        </div>
    `;
}

// Render detailed product card for single product view
function renderDetailCard(product) {
    return `
        <div class="product-detail-card">
            <div class="product-image-section">
                <div class="product-main-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-thumbnails">
                    <div class="product-thumbnail">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-thumbnail">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                </div>
            </div>
            <div class="product-info-section">
                <h2 class="product-name">${product.name}</h2>
                <div class="product-price">${product.price}</div>
                <div class="product-price-details">${product.priceDetails}</div>
                <div class="product-moq">${product.moq}</div>
                <a href="index.html#contact" class="get-price-btn">Get Best Price</a>
                
                <div class="product-specifications">
                    <div class="spec-table">
                        ${Object.entries(product.specs).map(([key, value]) => `
                            <div class="spec-row">
                                <div class="spec-label">${key}</div>
                                <div class="spec-value">${value}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="product-description">
                    <p>${product.description}</p>
                    ${product.features ? `
                        <div class="product-features">
                            <h3>Features:</h3>
                            <ul>
                                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadProducts);

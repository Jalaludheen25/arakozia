// Products Data
const productsData = {
    'vegetables-nuts-seeds': {
        title: 'Vegetables, Nuts and Seeds',
        description: 'Leading Exporters and Importers, Wholesaler and Trader of Vegetables, Fruits, Nuts and Seeds.',
        products: [
            {
                id: 'garlic',
                name: 'Garlic',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '100 Kilogram (MOQ)',
                image: 'assets/images/Garlic.jpeg',
                images: [
                    'assets/images/Garlic.jpeg',
                    'assets/images/GARLIC 1.jpg'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier, Trader',
                    'Packaging Type': 'Mesh Bags, Cartons',
                    'Quality Available': 'A Grade'
                },
                description: 'Fresh and premium quality garlic with rich aroma and flavor.',
                features: ['Natural cultivation', 'High quality']
            },
            {
                id: 'ginger',
                name: 'Ginger',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '100 Kilogram (MOQ)',
                image: 'assets/images/Ginger.jpeg',
                images: [
                    'assets/images/Ginger.jpeg',
                    'assets/images/GINGER.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier, Trader',
                    'Packaging Type': 'Mesh Bags, Cartons',
                    'Quality Available': 'A Grade'
                },
                description: 'Fresh and premium quality ginger, essential for various cuisines.',
                features: ['Natural cultivation', 'High quality']
            },
            {
                id: 'mixed-vegetables',
                name: 'Mixed Vegetables',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '100 Kilogram (MOQ)',
                image: 'assets/images/veg.jpeg',
                images: [
                    'assets/images/veg.jpeg',
                    'assets/images/MIXED VEGETABLES.png',
                    'assets/images/mix-veg.jpeg'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier, Trader',
                    'Packaging Type': 'Cartons',
                    'Quality Available': 'A Grade'
                },
                description: 'Fresh and premium quality mixed vegetables directly sourced from farms.',
                features: ['Natural cultivation', 'High quality', 'Fresh']
            },
            {
                id: 'apple',
                name: 'Apple',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '100 Kilogram (MOQ)',
                image: 'assets/images/Apple.jpeg',
                images: [
                    'assets/images/Apple.jpeg',
                    'assets/images/APPLE.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier, Trader',
                    'Packaging Type': 'Cartons',
                    'Quality Available': 'A Grade'
                },
                description: 'Fresh and premium quality apples sourced directly from farms.',
                features: ['Natural cultivation', 'High quality', 'Fresh']
            },
            {
                id: 'walnuts',
                name: 'Walnuts',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '100 Kilogram (MOQ)',
                image: 'assets/images/Walnuts.jpeg',
                images: [
                    'assets/images/Walnuts.jpeg',
                    'assets/images/WALNUTS.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier, Trader',
                    'Packaging Type': 'PP Bags, Cartons',
                    'Quality Available': 'A Grade'
                },
                description: 'Premium quality walnuts carefully sourced for the best taste and nutritional value.',
                features: ['Natural cultivation', 'High quality']
            },
            {
                id: 'pumpkin-seeds',
                name: 'Pumpkin seeds',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '100 Kilogram (MOQ)',
                image: 'assets/images/Pumpkin seeds.jpeg',
                images: [
                    'assets/images/Pumpkin seeds.jpeg',
                    'assets/images/PUMPKIN SEEDS.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier, Trader',
                    'Packaging Type': 'PP Bags, Cartons',
                    'Quality Available': 'A Grade'
                },
                description: 'High-quality pumpkin seeds, perfect for healthy diets and various culinary applications.',
                features: ['Natural cultivation', 'High quality']
            }
        ]
    },
    'food-grains-spices': {
        title: 'Food Grains & Whole Spices',
        description: 'Combination of traditional food grains and aromatic whole spices handpicked for purity.',
        products: [
            {
                id: 'pearl-millet',
                name: 'Pearl Millet Seeds',
                price: '₹ 45.00',
                priceDetails: '/ Kilogram (+ 5% GST applicable)',
                moq: '1000 Kilogram (MOQ)',
                image: 'assets/images/products/pearl-millet.jpg',
                images: [
                    'assets/images/products/pearl-millet.jpg',
                    'assets/images/BAJARA.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier, Trader',
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
                images: [
                    'assets/images/products/white-sorghum.jpg',
                    'assets/images/WHITE SORGHUM SEEDS.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier, Trader',
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
                images: [
                    'assets/images/products/basmati-rice.jpg',
                    'assets/images/PREMIUM BASUMATHI RICE.png',
                    'assets/images/products/basmati-rice-2.jpg'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier, Trader',
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
                images: [
                    'assets/images/products/organic-pulses.jpg',
                    'assets/images/ORGANIC PULSE.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier, Trader',
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
            },
            {
                id: 'black-mustard',
                name: 'Black Mustard Seeds',
                price: '₹ 90.00',
                priceDetails: '/ Kilogram (+ 5% GST applicable)',
                moq: '500 Kilogram (MOQ)',
                image: 'assets/images/products/black-mustard.jpg',
                images: [
                    'assets/images/products/black-mustard.jpg',
                    'assets/images/products/whole-spices.jpg'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier, Trader',
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
                name: 'Carom Seeds',
                price: '₹ 160.00',
                priceDetails: '/ Kilogram (+ 5% GST applicable)',
                moq: '50 Kilogram (MOQ)',
                image: 'assets/images/products/curom-seeds.jpg',
                images: [
                    'assets/images/products/curom-seeds.jpg',
                    'assets/images/CAROM SEEDS.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier, Trader',
                    'Speciality': 'Pesticide Pre (For Raw Products), No Artificial Flavour, No Preservatives, Bitter Taste, Hot And Pungent',
                    'Storage Condition': 'Dried',
                    'Usage/Application': 'Cooking Flavoring Vegetarian Dishes, Improving Cholesterol Levels, Lower Blood Pressure, Fighting Peptic Ulcers, Improving Digestion, Preventing Coughing, Improving Airflow, Hair And Skin Health',
                    'Grade Standard': 'Food Grade',
                    'Quality Available': 'A Grade',
                    'Packaging Size': '10Kg, 20Kg, 25Kg, 50Kg',
                    'Cultivation Type': 'Natural'
                },
                description: 'Carom Seed is used to flavor vegetarian dishes primarily legumes and bread dishes. In Indian cuisine, Ajwain/Carom seeds are added during the tadka or tempering process of cooking. Bitter taste, Hot and pungent. Carom Seed can be stored indefinitely if kept from light in airtight containers. Being a strong aromatic spice, ensure that the lid is tightly closed to retain the freshness of the spice.',
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
                images: [
                    'assets/images/products/coriander-seeds.jpg',
                    'assets/images/products/whole-spices.jpg'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier, Trader',
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
                images: [
                    'assets/images/products/cumin-seeds.jpg',
                    'assets/images/CUMIN SEEDS.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier, Trader',
                    'Grade': 'Premium Grade',
                    'Purity': '99.5%',
                    'Moisture': 'Max 12%',
                    'Broken Grains': 'Max 1%',
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
                images: [
                    'assets/images/products/green-cardamom.jpg',
                    'assets/images/Green Cardamom.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier, Trader',
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
            },
            {
                id: 'black-pepper',
                name: 'Black Pepper',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '100 Kilogram (MOQ)',
                image: 'assets/images/black_pepper.jpg',
                images: [
                    'assets/images/black_pepper.jpg',
                    'assets/images/Black Pepper.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier, Trader',
                    'Grade': 'Premium Grade',
                    'Quality Available': 'A Grade',
                    'Packaging Type': 'PP Bags, Cartons',
                    'Drying Process': 'Sun Dry'
                },
                description: 'Premium quality black pepper bold berries with strong aroma, pungent taste, and high piperine content, sourced from the finest spice farms.',
                features: [
                    'Strong aroma',
                    'Pungent flavor',
                    'Sun dried',
                    '100% organic & natural'
                ]
            }
        ]
    },
    'seafood-frozen': {
        title: 'Fresh & Frozen sea foods',
        description: 'Premium quality fresh seafood and frozen items, air-flown and handled with certified care.',
        products: [
            {
                id: 'fresh-salmon',
                name: 'Fresh Salmon',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '100 Kilogram (MOQ)',
                image: 'assets/images/featured-product.jpg',
                images: [
                    'assets/images/featured-product.jpg',
                    'assets/images/FRESH SALMON.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier',
                    'Storage': 'Chilled (-1°C to 2°C)',
                    'Quality Available': 'A Grade Premium'
                },
                description: 'Fresh salmon sourced from cold waters, rich in flavor and Omega-3.',
                features: ['Freshly harvested', 'Rich in Omega-3', 'Premium Grade']
            },
            {
                id: 'salmon-fillet',
                name: 'Salmon Fillets',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '100 Kilogram (MOQ)',
                image: 'assets/images/salman filley.jpeg',
                images: [
                    'assets/images/salman filley.jpeg',
                    'assets/images/SALMON FILLEY.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier',
                    'Storage': 'Frozen (-18°C)',
                    'Quality Available': 'A Grade'
                },
                description: 'Cleaned and precision-cut salmon fillet ready for cooking.',
                features: ['Boneless fillet', 'Vacuum packed', 'High quality']
            },
            {
                id: 'sea-bream-bass',
                name: 'Sea bream / Sea bass',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '100 Kilogram (MOQ)',
                image: 'assets/images/seabass.png',
                images: [
                    'assets/images/seabass.png',
                    'assets/images/Sea bream OR Sea bass.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier',
                    'Storage': 'Fresh / Frozen',
                    'Quality Available': 'A Grade'
                },
                description: 'Fresh Sea Bream and Sea Bass caught daily and stored under optimum temperature.',
                features: ['Delicious mild taste', 'Fresh / Frozen', 'Sustainably caught']
            },
            {
                id: 'shrimps',
                name: 'Shrimps',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '100 Kilogram (MOQ)',
                image: 'assets/images/Shrimps.jpeg',
                images: [
                    'assets/images/Shrimps.jpeg',
                    'assets/images/SHRIMPS.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier',
                    'Packaging': 'Blocks / IQF',
                    'Quality Available': 'A Grade'
                },
                description: 'Premium quality juicy shrimps, peeled or whole frozen.',
                features: ['IQF Frozen', 'Nutritious & Fresh', 'Export Grade']
            },
            {
                id: 'lobster',
                name: 'Lobster',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '50 Kilogram (MOQ)',
                image: 'assets/images/lobster.png',
                images: [
                    'assets/images/lobster.png',
                    'assets/images/lobster -1.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier',
                    'Storage': 'Live / Frozen',
                    'Quality Available': 'A Grade'
                },
                description: 'Succulent wild-caught lobster delivered with maximum freshness.',
                features: ['Premium seafood', 'Rich taste', 'Carefully packed']
            },
            {
                id: 'mackerel',
                name: 'Mackerel',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '100 Kilogram (MOQ)',
                image: 'assets/images/Mackerel.jpg',
                images: [
                    'assets/images/Mackerel.jpg',
                    'assets/images/Mackerel.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier',
                    'Storage': 'Frozen (-18°C)',
                    'Quality Available': 'A Grade'
                },
                description: 'Whole frozen mackerel packed with essential fatty acids and natural flavor.',
                features: ['High Omega-3', 'Frozen fresh', 'A Grade']
            }
        ]
    },
    'general-items': {
        title: 'General Items',
        description: 'Essential food products, condiments, oils and frozen items for daily culinary excellence.',
        products: [
            {
                id: 'french-fries',
                name: 'French fries',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '500 Kilogram (MOQ)',
                image: 'assets/images/FRENCH FRIES .png',
                images: [
                    'assets/images/FRENCH FRIES .png',
                    'assets/images/french fries 2.png',
                    'assets/images/frozen french frises.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier',
                    'Packaging': 'Carton (10kg/20kg)',
                    'Cut Type': 'Straight Cut / Crinkle Cut'
                },
                description: 'Crispy premium frozen french fries made from top-grade potatoes.',
                features: ['Golden crispiness', 'Easy to fry', 'Long shelf life']
            },
            {
                id: 'eggs',
                name: 'Eggs',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '100 Cartons (MOQ)',
                image: 'assets/images/eggs.webp',
                images: [
                    'assets/images/eggs.webp',
                    'assets/images/eggs1.jpg',
                    'assets/images/eggs (2).jpg'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier',
                    'Packaging': 'Export Master Cartons (360 Eggs)',
                    'Grade': 'A Grade Fresh Eggs'
                },
                description: 'Farm fresh table eggs, high in protein and carefully packed for transport.',
                features: ['Farm fresh', 'Strong shells', 'Hygienic packaging']
            },
            {
                id: 'sunflower-oil',
                name: 'Sunflower / vegetable oil',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '500 Liters (MOQ)',
                image: 'assets/images/gallery-1.jpg',
                images: [
                    'assets/images/gallery-1.jpg',
                    'assets/images/Sunflower Oil.jpg',
                    'assets/images/vegetable oil.jpg'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier',
                    'Packaging': '1L, 5L PET Bottles, Drums',
                    'Quality': 'Refined Pure'
                },
                description: 'Pure refined sunflower and vegetable cooking oil for everyday cooking.',
                features: ['100% Refined', 'Cholesterol free', 'Rich in Vitamin E']
            },
            {
                id: 'ketchup',
                name: 'Ketchup',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '100 Cartons (MOQ)',
                image: 'assets/images/ketchup.jpg',
                images: [
                    'assets/images/ketchup.jpg',
                    'assets/images/ketchup1.jpg',
                    'assets/images/ketchup (2).jpg',
                    'assets/images/ketchup (3).jpg'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier',
                    'Packaging': 'Squeeze Bottles, Pouches, Bulk Jars',
                    'Grade': 'Food Grade'
                },
                description: 'Rich tomato ketchup crafted from ripe sun-drenched tomatoes.',
                features: ['Rich tomato flavor', 'No artificial colors', 'High quality']
            },
            {
                id: 'tomato-paste',
                name: 'Tomato paste',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '100 Cartons (MOQ)',
                image: 'assets/images/Tomato-Paste.jpg',
                images: [
                    'assets/images/Tomato-Paste.jpg',
                    'assets/images/general items.png'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier',
                    'Brix': '28-30%',
                    'Packaging': 'Cans / Drums'
                },
                description: 'Double concentrated thick tomato paste for rich sauces and stews.',
                features: ['Double concentrated', 'Natural red color', 'Pure tomato paste']
            }
        ]
    },
    'frozen-chicken': {
        title: 'Frozen Chicken & Poultry Cuts',
        description: 'Premium grade frozen whole chicken and fresh poultry cuts including chest, leg, wings, and liver, hygienically processed and certified HALAL.',
        products: [
            {
                id: 'full-chicken',
                name: 'Full Whole Chicken',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '500 Kilogram (MOQ)',
                image: 'assets/images/frozen chicken 1.png',
                images: [
                    'assets/images/frozen chicken 1.png',
                    'assets/images/chicken-isolated.jpg',
                    'assets/images/raw-chicken-meat-isolated-white.jpg'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier',
                    'Certification': 'HALAL Certified, ISO Quality',
                    'Storage': 'Deep Frozen (-18°C)',
                    'Grade Available': 'Grade A Whole Bird'
                },
                description: 'Hygienically processed whole frozen chicken, tender, juicy, and vacuum-sealed for maximum freshness.',
                features: ['HALAL certified', 'Deep frozen (-18°C)', 'Clean & ready to cook', 'Export grade quality']
            },
            {
                id: 'chicken-chest',
                name: 'Chicken Chest (Breast)',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '250 Kilogram (MOQ)',
                image: 'assets/images/chicken breast.png',
                images: [
                    'assets/images/chicken breast.png',
                    'assets/images/raw-chicken-meat-isolated-white.jpg'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier',
                    'Cut Type': 'Skinless Boneless Breast / Chest',
                    'Storage': 'Frozen (-18°C)',
                    'Quality': 'Grade A Premium'
                },
                description: 'Lean and tender chicken breast/chest cut, high in protein and perfectly trimmed.',
                features: ['Lean protein cut', 'Boneless & skinless', 'Hygienically packaged']
            },
            {
                id: 'chicken-leg',
                name: 'Chicken Leg & Drumstick',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '250 Kilogram (MOQ)',
                image: 'assets/images/chicken drumstick.png',
                images: [
                    'assets/images/chicken drumstick.png',
                    'assets/images/raw-chicken-meat-isolated-white.jpg'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier',
                    'Storage': 'Frozen (-18°C)',
                    'Grade': 'Grade A Fresh Cut'
                },
                description: 'Juicy chicken leg quarters and drumsticks, fresh-frozen for rich flavor and tender texture.',
                features: ['Juicy & flavorful', 'HALAL certified', 'IQF frozen']
            },
            {
                id: 'chicken-wings',
                name: 'Chicken Wings',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '250 Kilogram (MOQ)',
                image: 'assets/images/chicken wings.png',
                images: [
                    'assets/images/chicken wings.png',
                    'assets/images/raw-chicken-meat-isolated-white.jpg'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier',
                    'Cut Type': '3-Joint / 2-Joint Wings',
                    'Storage': 'Frozen (-18°C)'
                },
                description: 'Fresh frozen 3-joint and 2-joint chicken wings, ideal for frying, grilling, and appetizers.',
                features: ['Prime wing cuts', 'Crispy & tender', 'Export packaging']
            },
            {
                id: 'chicken-liver',
                name: 'Chicken Liver',
                price: 'Ask for Price',
                priceDetails: '',
                moq: '100 Kilogram (MOQ)',
                image: 'assets/images/raw-chicken-meat-isolated-white.jpg',
                images: [
                    'assets/images/raw-chicken-meat-isolated-white.jpg',
                    'assets/images/chicken-isolated.jpg'
                ],
                specs: {
                    'Business Type': 'Exporter and Importer, Supplier',
                    'Storage': 'Deep Frozen (-18°C)',
                    'Packaging': '5kg / 10kg Master Carton'
                },
                description: 'Fresh frozen nutrient-rich chicken liver, cleaned and blast-frozen for premium taste.',
                features: ['Nutrient dense', 'Hygienically cleaned', 'HALAL certified']
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

// Switch main product image on thumbnail click
function switchProductImage(thumbElement, imgSrc) {
    const mainImg = document.getElementById('main-product-img');
    if (mainImg) {
        mainImg.src = imgSrc;
    }
    const thumbnails = document.querySelectorAll('.product-thumbnail');
    thumbnails.forEach(t => t.classList.remove('active'));
    if (thumbElement) {
        thumbElement.classList.add('active');
    }
}

// Load products based on URL parameters
function loadProducts() {
    let category = getUrlParameter('category');
    let productId = getUrlParameter('product');
    
    // Redirect/map legacy categories to merged category
    if (category === 'food-grains' || category === 'whole-spices') {
        category = 'food-grains-spices';
    }

    // Redirect/map legacy product IDs
    if (productId === 'fresh-salman') productId = 'fresh-salmon';
    if (productId === 'salman-filley') productId = 'salmon-fillet';
    if (productId === 'lobstar') productId = 'lobster';
    
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
        pageDescription.textContent = 'Browse our premium selection of food grains, aromatic spices, fresh seafood and general items.';
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
    const galleryImages = (product.images && product.images.length > 0) ? product.images : [product.image];
    return `
        <div class="product-detail-card">
            <div class="product-image-section">
                <div class="product-main-image">
                    <img id="main-product-img" src="${galleryImages[0]}" alt="${product.name}">
                </div>
                <div class="product-thumbnails">
                    ${galleryImages.map((imgSrc, index) => `
                        <div class="product-thumbnail ${index === 0 ? 'active' : ''}" onclick="switchProductImage(this, '${imgSrc}')">
                            <img src="${imgSrc}" alt="${product.name}">
                        </div>
                    `).join('')}
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

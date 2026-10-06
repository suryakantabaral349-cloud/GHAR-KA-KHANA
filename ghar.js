document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. MENU DATA & RENDERING
    // ==========================================

    const menuData = [
        // Odisha Specials
        {
            id: 101,
            name: "Odia Bhata Dalma",
            category: "odisha-special",
            price: "₹XX",
            desc: "The soul of Odisha. Steamed rice served with nutritious roasted lentil and vegetable dalma, accompanied by crispy alubhaja.",
            img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 102,
            name: "Pakhala Bhata",
            category: "odisha-special",
            price: "₹XX",
            desc: "Traditional fermented water rice, perfect for summer. Served with badi chura, saga bhaja, and aloo bharta.",
            img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 103,
            name: "Chhena Poda",
            category: "odisha-special",
            price: "₹XX",
            desc: "Odisha's signature roasted cheese dessert with caramelized sugar and nuts.",
            img: "https://images.unsplash.com/photo-1605859817926-0e1ce6302e3b?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 104,
            name: "Santula",
            category: "odisha-special",
            price: "₹XX",
            desc: "A healthy, lightly spiced mixed vegetable curry boiled and sautéed with garlic and green chilies.",
            img: "https://images.unsplash.com/photo-1548943487-a2e4e43b4859?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 105,
            name: "Macha Besara",
            category: "odisha-special",
            price: "₹XX",
            desc: "Traditional Odia fish curry cooked in a pungent mustard paste with dried mango (ambula).",
            img: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=400"
        },

        // Vegetarian
        {
            id: 1,
            name: "Plain Rice",
            category: "veg",
            price: "₹XX",
            desc: "Freshly steamed white rice.",
            img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 2,
            name: "Dal Fry",
            category: "veg",
            price: "₹XX",
            desc: "Yellow lentils tempered with mild spices.",
            img: "https://images.unsplash.com/photo-1548943487-a2e4e43b4859?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 3,
            name: "Authentic Dalma",
            category: "veg",
            price: "₹XX",
            desc: "Traditional Odia preparation of lentils and roasted vegetables.",
            img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 4,
            name: "Crispy Alubhaja",
            category: "veg",
            price: "₹XX",
            desc: "Thinly sliced, crispy fried potatoes.",
            img: "https://images.unsplash.com/photo-1573215886678-8316c026dc8c?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 5,
            name: "Mix Veg Curry",
            category: "veg",
            price: "₹XX",
            desc: "Seasonal vegetables in a rich, comforting gravy.",
            img: "https://images.unsplash.com/photo-1625944227301-44755a5b51d3?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 6,
            name: "Dhaba Style Tadka",
            category: "veg",
            price: "₹XX",
            desc: "Spiced lentil dish cooked to perfection.",
            img: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 7,
            name: "Soyabin Aloo",
            category: "veg",
            price: "₹XX",
            desc: "Soya chunks and potatoes in a homely masala.",
            img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 8,
            name: "Traditional Besara",
            category: "veg",
            price: "₹XX",
            desc: "Vegetables cooked in an authentic mustard paste.",
            img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 9,
            name: "Chana Masala",
            category: "veg",
            price: "₹XX",
            desc: "Chickpeas simmered in a spiced tomato gravy.",
            img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 16,
            name: "Saga Bhaja",
            category: "veg",
            price: "₹XX",
            desc: "Simple and nutritious stir-fried seasonal leafy greens.",
            img: "https://images.unsplash.com/photo-1600813958933-4f9e1e30953f?auto=format&fit=crop&q=80&w=400"
        },

        // Non-Vegetarian
        {
            id: 10,
            name: "Homestyle Chicken Curry",
            category: "non-veg",
            price: "₹XX",
            desc: "Tender chicken cooked in traditional spices.",
            img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 11,
            name: "Classic Egg Curry",
            category: "non-veg",
            price: "₹XX",
            desc: "Boiled eggs in a rich onion-tomato gravy.",
            img: "https://images.unsplash.com/photo-1546253457-3f3f5080de0b?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 12,
            name: "Odia Fish Curry (Macha Jhola)",
            category: "non-veg",
            price: "₹XX",
            desc: "Fresh fish in a flavorful, light mustard gravy.",
            img: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 13,
            name: "Mati Handi Mutton",
            category: "non-veg",
            price: "₹XX",
            desc: "Slow-cooked mutton prepared in an earthen pot for an earthy flavor.",
            img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 14,
            name: "Prawn Masala (Chingudi Jhola)",
            category: "non-veg",
            price: "₹XX",
            desc: "Succulent prawns tossed in a thick, spicy traditional masala.",
            img: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 15,
            name: "Chicken Kasa",
            category: "non-veg",
            price: "₹XX",
            desc: "Dry, heavily spiced preparation of chicken.",
            img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=400"
        }
    ];


    // ==========================================
    // MENU ELEMENTS
    // ==========================================

    const menuContainer = document.getElementById('menu-container');
    const searchInput = document.getElementById('menu-search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const noResults = document.getElementById('no-results');

    let currentFilter = 'all';
    let searchQuery = '';


    // ==========================================
    // RENDER MENU
    // ==========================================

    function renderMenu() {

        const filteredData = menuData.filter(item => {

            const matchesFilter =
                currentFilter === 'all' ||
                item.category === currentFilter;

            const matchesSearch =
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.desc.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesFilter && matchesSearch;
        });


        menuContainer.innerHTML = '';


        // No results
        if (filteredData.length === 0) {

            noResults.classList.remove('hidden');

        } else {

            noResults.classList.add('hidden');


            filteredData.forEach(item => {

                const isVeg =
                    item.category === 'veg' ||
                    item.id === 101 ||
                    item.id === 102 ||
                    item.id === 103 ||
                    item.id === 104 ||
                    item.id === 16;

                const markClass =
                    isVeg ? 'veg-mark' : 'non-veg-mark';


                const badgeHtml =
                    item.category === 'odisha-special'
                        ? `
                        <div class="absolute top-4 left-4
                        bg-brand-yellow/90 backdrop-blur-sm
                        px-3 py-1 rounded-full text-xs font-bold
                        text-brand-black shadow-sm flex items-center gap-1">

                            <i class="ph-fill ph-star"></i>
                            Odisha Special

                        </div>
                        `
                        : '';


                const card = `
                    <div class="bg-slate-900 rounded-2xl overflow-hidden
                    shadow-sm hover:shadow-md transition-shadow
                    border border-slate-800 flex flex-col text-white">

                        <div class="relative h-48 overflow-hidden bg-slate-800">

                            ${badgeHtml}

                            <img
                                src="${item.img}"
                                alt="${item.name}"
                                class="w-full h-full object-cover"
                                loading="lazy"
                            >

                            <div class="absolute top-4 right-4
                            bg-slate-900/90 backdrop-blur-sm
                            px-3 py-1 rounded-full font-bold text-white
                            shadow-sm border border-slate-800">

                                ${item.price}

                            </div>

                        </div>


                        <div class="p-6 flex-grow flex flex-col">

                            <div class="flex items-start justify-between mb-2">

                                <h3 class="text-xl font-bold text-white pr-4">
                                    ${item.name}
                                </h3>

                                <div class="w-4 h-4 rounded-sm flex-shrink-0
                                flex items-center justify-center mt-1 ${markClass}">

                                    <div class="w-2 h-2 rounded-full"></div>

                                </div>

                            </div>


                            <p class="text-gray-300 text-sm flex-grow">
                                ${item.desc}
                            </p>

                        </div>

                    </div>
                `;

                menuContainer.insertAdjacentHTML('beforeend', card);

            });
        }
    }


    // ==========================================
    // MENU FILTER BUTTONS
    // ==========================================

    filterBtns.forEach(btn => {

        btn.addEventListener('click', (e) => {

            filterBtns.forEach(b => {

                b.classList.remove(
                    'bg-brand-red',
                    'text-white'
                );

                b.classList.add('text-gray-300');

            });


            e.target.classList.remove('text-gray-300');

            e.target.classList.add(
                'bg-brand-red',
                'text-white'
            );


            currentFilter =
                e.target.getAttribute('data-filter');

            renderMenu();

        });

    });


    // ==========================================
    // MENU SEARCH
    // ==========================================

    searchInput.addEventListener('input', (e) => {

        searchQuery = e.target.value;

        renderMenu();

    });


    // Initial menu render
    renderMenu();


    // ==========================================
    // 2. MOBILE MENU
    // ==========================================

    const mobileMenuBtn =
        document.getElementById('mobile-menu-btn');

    const mobileMenu =
        document.getElementById('mobile-menu');

    const menuIcon =
        document.getElementById('menu-icon');

    const mobileLinks =
        document.querySelectorAll('.mobile-link');

    let menuOpen = false;


    function toggleMenu() {

        menuOpen = !menuOpen;


        if (menuOpen) {

            mobileMenu.classList.remove(
                'translate-x-full'
            );

            menuIcon.classList.remove(
                'ph-list'
            );

            menuIcon.classList.add(
                'ph-x'
            );

            document.body.style.overflow = 'hidden';

        } else {

            mobileMenu.classList.add(
                'translate-x-full'
            );

            menuIcon.classList.remove(
                'ph-x'
            );

            menuIcon.classList.add(
                'ph-list'
            );

            document.body.style.overflow = '';

        }
    }


    mobileMenuBtn.addEventListener(
        'click',
        toggleMenu
    );


    mobileLinks.forEach(link => {

        link.addEventListener(
            'click',
            toggleMenu
        );

    });


    // ==========================================
    // 3. GALLERY LIGHTBOX
    // ==========================================

    const galleryItems =
        document.querySelectorAll('.gallery-item');

    const lightbox =
        document.getElementById('lightbox');

    const lightboxImg =
        document.getElementById('lightbox-img');

    const lightboxClose =
        document.getElementById('lightbox-close');


    galleryItems.forEach(item => {

        item.addEventListener('click', () => {

            const img =
                item.querySelector('img').src;

            lightboxImg.src = img;


            lightbox.classList.remove('hidden');


            setTimeout(() => {

                lightbox.classList.remove(
                    'opacity-0'
                );

                lightboxImg.classList.remove(
                    'scale-95'
                );

                lightboxImg.classList.add(
                    'scale-100'
                );

            }, 10);


            document.body.style.overflow = 'hidden';

        });

    });


    // Close lightbox
    function closeLightbox() {

        lightbox.classList.add(
            'opacity-0'
        );

        lightboxImg.classList.remove(
            'scale-100'
        );

        lightboxImg.classList.add(
            'scale-95'
        );


        setTimeout(() => {

            lightbox.classList.add(
                'hidden'
            );

            document.body.style.overflow = '';

            lightboxImg.src = '';

        }, 300);

    }


    lightboxClose.addEventListener(
        'click',
        closeLightbox
    );


    lightbox.addEventListener('click', (e) => {

        if (e.target === lightbox) {
            closeLightbox();
        }

    });


    // ==========================================
    // 4. SCROLL ANIMATIONS
    // ==========================================

    const observerOptions = {

        root: null,

        rootMargin: '0px',

        threshold: 0.15

    };


    const observer =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            'visible'
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            observerOptions
        );


    document
        .querySelectorAll('.fade-in-up')
        .forEach(element => {

            observer.observe(element);

        });


    // ==========================================
    // 5. STICKY HEADER
    // ==========================================

    const header =
        document.getElementById('main-header');


    window.addEventListener('scroll', () => {

        if (window.scrollY > 20) {

            header.classList.add(
                'shadow-md'
            );

        } else {

            header.classList.remove(
                'shadow-md'
            );

        }

    });

});
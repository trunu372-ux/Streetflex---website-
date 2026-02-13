<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shop - StreetFlex</title>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <!-- Same as index.html -->
    </header>

    <main>
        <section class="shop">
            <h1>Shop</h1>
            <div class="filters">
                <select id="category"><option>Shoes</option><option>Hoodies</option><option>T-Shirts</option><option>Bottoms</option></select>
                <input type="range" id="price-filter" min="0" max="100">
                <select id="size"><option>S</option><option>M</option><option>L</option></select>
                <select id="color"><option>Black</option><option>Green</option></select>
            </div>
            <div class="products-grid" id="products">
                <!-- Products loaded via JS -->
            </div>
        </section>
    </main>

    <footer>
        <!-- Same as index.html -->
    </footer>

    <script src="script.js"></script>
</body>
</html>

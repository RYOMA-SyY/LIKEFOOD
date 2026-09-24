# Like Food — complete business dossier and React website prompt

## 1. Business information

| Field | Confirmed information | Source / status |
|---|---|---|
| Brand name | **Like Food** | Supplied logo, menu boards, staff shirt, and photos |
| Google Maps listing | **Espace Reiad Ennour** | Public Google Maps listing supplied by the user |
| Business type | Café / casual restaurant | Google Maps category: café |
| City | Casablanca, Morocco | Public Google Maps listing |
| Address | **HGMC+H7V, Unnamed Road, Casablanca, Maroc** | Public Google Maps listing |
| Google rating | **4.5 / 5 from 2 reviews** | Public Google Maps listing at time of review |
| Phone 1 | **06 66 56 73 68** | Supplied menu board |
| Phone 2 | **06 89 59 97 64** | Supplied menu board |
| WhatsApp | Not confirmed; the menu displays WhatsApp branding next to the phone numbers | Verify before publishing as a WhatsApp CTA |
| Opening hours | Not published on the Google Maps listing | Must be confirmed before launch |
| Website | Not published on the Google Maps listing | This React website will fill that gap |
| Delivery | The supplied menu shows delivery-platform logos including Yassir Express and Glovo | Confirm current availability and delivery zones |
| Social media | The supplied menu shows TikTok, Facebook, Twitter/X, and Instagram labels as “LIKE FOOD” | Confirm exact profile URLs before linking |
| Map link | https://maps.app.goo.gl/uCcvznhEtYHgzqKD7 | User-provided Google Maps link |

## 2. Positioning and tone

Like Food should be presented as a friendly, affordable Casablanca café for generous comfort food, quick lunches, casual dinners, takeaway, and possible delivery. The communication should be warm, direct, youthful, and appetising. Avoid luxury-restaurant language and avoid making unsupported claims about ingredients, opening hours, delivery speed, halal status, allergens, or food sourcing.

**Suggested French tagline:**

> **La pause gourmande qui fait plaisir.**

**Suggested hero headline:**

> **Le goût qui met tout le monde d’accord.**

**Suggested hero body:**

> Chez Like Food, on prépare des pizzas, tacos, burgers, sandwiches, plats, pâtes, salades et jus généreux pour les petites faims comme les grandes envies. Des recettes simples, servies avec le sourire, au cœur de Casablanca.

## 3. Website information architecture

Build a polished single-page restaurant website with these sections:

1. **Sticky header** with logo, navigation links, phone CTA, and a mobile menu.
2. **Hero** with a food image or short video, headline, supporting copy, and two CTAs: “Voir le menu” and “Nous trouver”.
3. **Category highlights** for Pizzas, Tacos & Sandwichs, Burgers, Plats & Pâtes, and Salades & Jus.
4. **Featured dishes** featuring Pizza mixte, Pastichio gratiné, and Like Burger.
5. **Menu section** with searchable/filterable categories and exact prices listed below.
6. **About / service section** describing the welcoming, generous neighborhood-café experience.
7. **Gallery / video section** using the supplied vertical showcase video and reworked food photos.
8. **Contact and location section** with address, phone numbers, Google Maps link, and clearly marked “hours to be confirmed” placeholder until verified.
9. **Footer** with logo, contact details, map link, social placeholders, and a short legal/content note.

## 4. Supplied assets to use

Use the supplied and reworked assets from the project package. Do not replace them with generic stock images.

| Asset filename | Use |
|---|---|
| `reworked-logo.png` | Header logo, footer logo, mobile brand mark |
| `reworked-pizza.png` | Hero image or featured pizza card |
| `reworked-pastichio.png` | Featured pastichio card |
| `reworked-pizza-menu.png` | Menu introduction or editorial gallery image |
| `reworked-service.png` | About/service/trust section |
| `menu-website-1.png` | Optional readable visual menu card, page 1 |
| `menu-website-2.png` | Optional readable visual menu card, page 2 |
| `showcase-web.mp4` | Mobile-first video section; autoplay muted loop with controls available |
| `showcase-poster-web.jpg` | Video poster and fallback image |
| Original supplied files | Keep available in the assets folder as source references, but prefer reworked assets in the interface |

Use image `object-fit: cover` carefully and preserve the food focal point. Keep dense menu text on solid backgrounds rather than placing it over photography.

## 5. Exact menu data and prices

Use this data as the source of truth. Display prices in **DH** and make clear when two prices mean “seul / avec frites” or “petit / grand”. Do not silently change prices.

### Tacos

- Viande hachée — 20 DH seul / 25 DH avec frites
- Nuggets — 20 DH seul / 25 DH avec frites
- Poulet — 20 DH seul / 25 DH avec frites
- Mixte — 20 DH seul / 25 DH avec frites

### Sandwichs

- Thon — 8 DH seul / 13 DH avec frites
- Viande hachée — 10 DH seul / 15 DH avec frites
- Poulet — 10 DH seul / 15 DH avec frites
- Like — 10 DH seul / 15 DH avec frites

### Panini

- Hot dog — 10 DH seul / 15 DH avec frites
- Viande hachée — 10 DH seul / 15 DH avec frites
- Poulet — 10 DH seul / 15 DH avec frites
- Mixte — 10 DH seul / 15 DH avec frites
- Thon fromage — 10 DH seul / 15 DH avec frites
- Saucisse — 10 DH seul / 15 DH avec frites
- Lançon — 10 DH seul / 15 DH avec frites

### Pizza

- Margherita — 20 DH petit / 25 DH grand
- Charcuterie — 20 DH petit / 25 DH grand
- Thon — 20 DH petit / 30 DH grand
- Viande hachée — 25 DH petit / 35 DH grand
- Mixte — 25 DH petit / 35 DH grand
- Poulet — 25 DH petit / 35 DH grand
- Fruits de mer — 28 DH petit / 35 DH grand

### Plats

- Viande hachée — 20 DH
- Chicken crispy — 20 DH
- Mixte — 20 DH
- Chicken américain — 20 DH

### Burgers

- HA Burger — 13 DH seul / 18 DH avec frites
- Cheese Burger — 15 DH seul / 20 DH avec frites
- Chicken Burger — 15 DH seul / 20 DH avec frites
- Double Cheese — 17 DH seul / 22 DH avec frites
- Like Burger — 20 DH seul / 25 DH avec frites

### Poutchi

- Thon — 8 DH seul / 13 DH avec frites
- Viande hachée — 9 DH seul / 15 DH avec frites
- Hot dog — 10 DH seul / 15 DH avec frites
- 4 fromage — 10 DH seul / 15 DH avec frites
- Lançon — 10 DH seul / 15 DH avec frites
- Poulet — 10 DH seul / 15 DH avec frites

### Pastichio

- Poulet — 25 DH
- Viande hachée — 25 DH
- Fruits de mer — 25 DH
- Mixte — 25 DH

### Nuggets

- 4 pièces — 12 DH
- 6 pièces — 18 DH
- 10 pièces — 20 DH

### Spaghetti, tagliatelle & penne

- Sauce champignon — 20 DH
- Sauce blanche — 20 DH
- Sauce arrabiata — 25 DH
- Poulet doré — 25 DH
- Carbonara — 25 DH
- Bolognaise — 25 DH
- Fruits de mer — 25 DH

### Shawarma

- Fromage + frite — 25 DH
- Fromage + frite + boisson — 27 DH

### Salade

- Marocain — 10 DH
- Nicoise — 20 DH

### Chicken

- 1/4 — 25 DH
- 1/2 — 50 DH
- 1 poulet — 95 DH

### Jus

- Banane — 10 DH
- Pomme — 10 DH
- Orange — 10 DH
- Panaché — 12 DH
- Avocat — 15 DH
- Mangue — 15 DH
- Avocat fruits — 18 DH
- Sec — 18 DH

### Extras

- Boisson gazeuse — 5 DH
- Eau — 3 DH
- Frites — +2 DH
- Fromage — +2 DH
- Sauce — +2 DH

## 6. Visual design direction

Use a warm, energetic restaurant identity:

- **Primary yellow:** `#F4C928`
- **Charcoal:** `#1D1D1B`
- **Tomato red:** `#D94D3D`
- **Warm off-white:** `#F7F1E5`
- **White cards:** `#FFFDF8`
- **Muted text:** `#6E675B`

Use large bold sans-serif headings, compact uppercase labels, rounded cards, high-contrast CTAs, generous spacing, and subtle shadows. The visual language should feel modern and accessible, not corporate. Use a soft grain or warm surface texture only sparingly.

Recommended UI details:

- Header: charcoal text on warm off-white background with a yellow “Commander / Appeler” CTA.
- Hero: split layout on desktop, stacked on mobile; food image on the right or below the copy.
- Menu: category tabs or filter chips; cards with item name, short optional description, and red price pill.
- Featured cards: use 4:5 photos with yellow or charcoal text panels.
- Location: include a “Voir sur Google Maps” link pointing to the supplied Maps URL.
- Phone buttons: use `tel:` links for both phone numbers.
- If WhatsApp links are added, keep them behind a simple configuration constant until WhatsApp availability is confirmed.
- Add accessible labels, keyboard focus styles, alt text, and sufficient contrast.

## 7. Functional requirements

Build a responsive React website that works on mobile, tablet, and desktop.

- Use React with clean reusable components.
- Use a local structured menu data object rather than hardcoded repeated markup.
- Add category filtering and a search field for menu items.
- Add smooth scrolling from navigation and CTAs.
- Add a mobile navigation drawer.
- Add a lightbox or modal for gallery images.
- Add a video section with poster fallback, muted autoplay, loop, and accessible controls.
- Add a sticky mobile bottom bar with “Appeler” and “Itinéraire”.
- Use the Google Maps URL as an external link; do not require a Maps API key.
- Do not claim online ordering unless a real ordering backend is connected. The CTAs should call, open directions, or scroll to the menu.
- Make the contact information easy to update from one configuration object.
- Make opening hours a clearly visible `À confirmer` value, not invented hours.
- Do not add checkout, accounts, payment, delivery tracking, or reservations unless explicitly implemented later.

## 8. SEO and metadata

Use French page metadata:

- **Title:** Like Food Casablanca — Pizzas, Tacos, Burgers & Plus
- **Description:** Like Food, café à Casablanca : pizzas, tacos, burgers, sandwiches, plats, pâtes, salades et jus. Découvrez le menu et trouvez-nous facilement.
- **Keywords:** Like Food Casablanca, café Casablanca, pizza Casablanca, tacos Casablanca, burger Casablanca, menu Like Food
- Add Open Graph image using `showcase-poster-web.jpg` or the reworked pizza image.
- Add basic LocalBusiness / Restaurant JSON-LD only with confirmed fields. Do not invent opening hours or a phone type.

## 9. Copy blocks

### About

**Simple, généreux, toujours gourmand.**

Une cuisine de quartier pensée pour être partagée : des produits réconfortants, des portions généreuses et une carte qui laisse chacun trouver son favori. Sur place, à emporter ou en livraison, Like Food garde la même promesse : vous servir quelque chose qui vous fera dire « j’aime ».

### Service / trust

**Une adresse qui fait plaisir.**

Une équipe accueillante, une carte accessible et des plats préparés pour être dégustés sans attendre. C’est l’esprit Like Food : bon, généreux et sans complication.

### Contact

**On se retrouve chez Like Food ?**

HGMC+H7V, Unnamed Road, Casablanca, Maroc  
06 66 56 73 68 · 06 89 59 97 64

## 10. Important verification checklist before launch

- Confirm opening hours.
- Confirm whether both phone numbers accept WhatsApp.
- Confirm delivery availability, delivery zones, and current platform links.
- Confirm exact Instagram, Facebook, TikTok, and other social URLs.
- Confirm whether “Lançon” on the supplied menu board is the correct spelling or should be another item name.
- Confirm whether the business prefers “Espace Reiad Ennour”, “Like Food”, or both in the official page title.
- Confirm current prices before publishing, since restaurant prices can change.
- Confirm whether food photography may be used publicly and whether any staff image requires permission.

---

# Copy-paste prompt for an AI React website builder

```text
Build a polished, responsive React website for a Casablanca café and casual restaurant called Like Food. The website should be production-quality, mobile-first, accessible, fast, and visually appetising. Use the local assets supplied in the project rather than generic stock images.

BUSINESS CONTEXT
- Brand: Like Food
- Google Maps listing name: Espace Reiad Ennour
- Business type: café / casual restaurant
- Location: HGMC+H7V, Unnamed Road, Casablanca, Maroc
- Google Maps link: https://maps.app.goo.gl/uCcvznhEtYHgzqKD7
- Public rating: 4.5/5 from 2 reviews
- Phone: 06 66 56 73 68
- Phone: 06 89 59 97 64
- Opening hours: show “À confirmer”; do not invent hours
- Delivery: menu shows Yassir Express and Glovo branding; do not promise delivery until availability is confirmed
- Social URLs: not confirmed; show social labels only or use clearly marked placeholders

BRAND AND COPY
Use this French tagline: “La pause gourmande qui fait plaisir.”
Use this hero headline: “Le goût qui met tout le monde d’accord.”
Use this hero paragraph: “Chez Like Food, on prépare des pizzas, tacos, burgers, sandwiches, plats, pâtes, salades et jus généreux pour les petites faims comme les grandes envies. Des recettes simples, servies avec le sourire, au cœur de Casablanca.”
Hero buttons: “Voir le menu” and “Nous trouver”.
About title: “Simple, généreux, toujours gourmand.”
About copy: “Une cuisine de quartier pensée pour être partagée : des produits réconfortants, des portions généreuses et une carte qui laisse chacun trouver son favori. Sur place, à emporter ou en livraison, Like Food garde la même promesse : vous servir quelque chose qui vous fera dire « j’aime ».”
Service title: “Une adresse qui fait plaisir.”
Service copy: “Une équipe accueillante, une carte accessible et des plats préparés pour être dégustés sans attendre. C’est l’esprit Like Food : bon, généreux et sans complication.”

ASSETS
Use these local files:
- /assets/reworked-logo.png for the logo
- /assets/reworked-pizza.png for the hero or pizza feature
- /assets/reworked-pastichio.png for a featured dish
- /assets/reworked-pizza-menu.png for an editorial menu/gallery block
- /assets/reworked-service.png for the service/about section
- /assets/showcase-web.mp4 for the video section
- /assets/showcase-poster-web.jpg as the video poster
- /assets/menu-website-1.png and /assets/menu-website-2.png as optional readable visual menu cards

Do not replace these assets with generic stock photography. Do not invent food items, toppings, logos, staff claims, prices, delivery promises, or opening hours.

DESIGN SYSTEM
Use:
- Yellow #F4C928
- Charcoal #1D1D1B
- Tomato red #D94D3D
- Warm off-white #F7F1E5
- White #FFFDF8
- Muted text #6E675B

Create a warm, modern, youthful restaurant design with bold sans-serif headings, rounded cards, red price pills, subtle shadows, generous whitespace, and high-contrast buttons. Avoid a generic template look. Avoid putting dense menu text directly over food photographs.

PAGE STRUCTURE
1. Sticky header with logo, links to Accueil, Menu, À propos, Galerie, Contact, and a phone CTA.
2. Hero section with split desktop layout and stacked mobile layout. Use the reworked pizza image or the showcase video as the visual. Include the hero copy and CTAs.
3. Category cards for Pizzas, Tacos & Sandwichs, Burgers, Plats & Pâtes, and Salades & Jus.
4. Featured dishes: Pizza mixte, Pastichio gratiné, and Like Burger.
5. Full searchable and filterable menu section.
6. About/service section with reworked-service.png.
7. Video/gallery section using showcase-web.mp4 with poster, muted autoplay, loop, controls, and a graceful fallback image.
8. Contact/location section with address, both phone numbers, opening hours shown as “À confirmer”, and a Google Maps button.
9. Footer with logo, contact details, map link, and placeholder social labels.
10. On mobile, add a fixed bottom action bar with “Appeler” and “Itinéraire”.

MENU DATA
Create a reusable structured menu data object and render all categories below exactly. Display DH prices and preserve the pricing context.

Tacos:
- Viande hachée — 20 DH seul / 25 DH avec frites
- Nuggets — 20 DH seul / 25 DH avec frites
- Poulet — 20 DH seul / 25 DH avec frites
- Mixte — 20 DH seul / 25 DH avec frites

Sandwichs:
- Thon — 8 DH seul / 13 DH avec frites
- Viande hachée — 10 DH seul / 15 DH avec frites
- Poulet — 10 DH seul / 15 DH avec frites
- Like — 10 DH seul / 15 DH avec frites

Panini:
- Hot dog — 10 DH seul / 15 DH avec frites
- Viande hachée — 10 DH seul / 15 DH avec frites
- Poulet — 10 DH seul / 15 DH avec frites
- Mixte — 10 DH seul / 15 DH avec frites
- Thon fromage — 10 DH seul / 15 DH avec frites
- Saucisse — 10 DH seul / 15 DH avec frites
- Lançon — 10 DH seul / 15 DH avec frites

Pizza:
- Margherita — 20 DH petit / 25 DH grand
- Charcuterie — 20 DH petit / 25 DH grand
- Thon — 20 DH petit / 30 DH grand
- Viande hachée — 25 DH petit / 35 DH grand
- Mixte — 25 DH petit / 35 DH grand
- Poulet — 25 DH petit / 35 DH grand
- Fruits de mer — 28 DH petit / 35 DH grand

Plats:
- Viande hachée — 20 DH
- Chicken crispy — 20 DH
- Mixte — 20 DH
- Chicken américain — 20 DH

Burgers:
- HA Burger — 13 DH seul / 18 DH avec frites
- Cheese Burger — 15 DH seul / 20 DH avec frites
- Chicken Burger — 15 DH seul / 20 DH avec frites
- Double Cheese — 17 DH seul / 22 DH avec frites
- Like Burger — 20 DH seul / 25 DH avec frites

Poutchi:
- Thon — 8 DH seul / 13 DH avec frites
- Viande hachée — 9 DH seul / 15 DH avec frites
- Hot dog — 10 DH seul / 15 DH avec frites
- 4 fromage — 10 DH seul / 15 DH avec frites
- Lançon — 10 DH seul / 15 DH avec frites
- Poulet — 10 DH seul / 15 DH avec frites

Pastichio:
- Poulet — 25 DH
- Viande hachée — 25 DH
- Fruits de mer — 25 DH
- Mixte — 25 DH

Nuggets:
- 4 pièces — 12 DH
- 6 pièces — 18 DH
- 10 pièces — 20 DH

Spaghetti, tagliatelle & penne:
- Sauce champignon — 20 DH
- Sauce blanche — 20 DH
- Sauce arrabiata — 25 DH
- Poulet doré — 25 DH
- Carbonara — 25 DH
- Bolognaise — 25 DH
- Fruits de mer — 25 DH

Shawarma:
- Fromage + frite — 25 DH
- Fromage + frite + boisson — 27 DH

Salade:
- Marocain — 10 DH
- Nicoise — 20 DH

Chicken:
- 1/4 — 25 DH
- 1/2 — 50 DH
- 1 poulet — 95 DH

Jus:
- Banane — 10 DH
- Pomme — 10 DH
- Orange — 10 DH
- Panaché — 12 DH
- Avocat — 15 DH
- Mangue — 15 DH
- Avocat fruits — 18 DH
- Sec — 18 DH

Extras:
- Boisson gazeuse — 5 DH
- Eau — 3 DH
- Frites — +2 DH
- Fromage — +2 DH
- Sauce — +2 DH

FUNCTIONAL REQUIREMENTS
- Use reusable React components: Header, Hero, CategoryCard, FeaturedDish, MenuSection, MenuItem, Gallery, ContactSection, Footer, MobileActionBar.
- Keep all business information in one editable configuration object.
- Keep all menu data in one editable data object.
- Add menu category filters and item search.
- Add smooth scrolling and a mobile navigation drawer.
- Add accessible alt text, labels, keyboard navigation, focus states, semantic headings, and sufficient color contrast.
- Add tel links for both phone numbers.
- Add an external Google Maps link without requiring a Maps API key.
- Do not implement checkout, payments, accounts, online ordering, booking, or delivery tracking.
- If using WhatsApp, keep it disabled or clearly marked pending verification.
- Add a visible “Horaires à confirmer” state instead of fake hours.
- Optimize images and lazy-load below-the-fold media.
- Make the website work well at 375px, 768px, and desktop widths.

SEO
Use:
- Title: “Like Food Casablanca — Pizzas, Tacos, Burgers & Plus”
- Description: “Like Food, café à Casablanca : pizzas, tacos, burgers, sandwiches, plats, pâtes, salades et jus. Découvrez le menu et trouvez-nous facilement.”
- Open Graph image: showcase-poster-web.jpg
- Restaurant / LocalBusiness JSON-LD only with confirmed facts; do not invent opening hours.

DELIVERABLE
Return a complete working React project with clean component structure, responsive styling, local asset imports, menu filtering, functional phone/map links, and clear comments showing where the owner can later add opening hours, social URLs, delivery links, and verified WhatsApp settings. Before finishing, check that no prices are missing, no menu category is omitted, and no unsupported business claim has been added.
```

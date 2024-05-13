## Booking System

Booking system application where user can book their favorite places hotel. In `Home` page showing 6 cart wise hotel, including network, family or single, place name, number of bed/beds number of bath/baths total square feet, user rating and price.

`Listing Stay Detail` page here is showing choose hotel attractive some images, category fof hotel, full name, rating location name, host name, stay info, rooms rate per days, host info, and user provided review. and right site also price cart, here is price details and "Reserve" button.

`Checkout` page is user can see confirm to payment procedure, pay method and use own info. and right site also see price summary.

`Pay Done` page ia user can see all kind of booked information

The back to home or explore more stays back button.

### How to Clone and Run the Project

#### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager) or yarn

#### Clone the

```bash
git clone https://github.com/mayinuddin-munna/js-encoder-react.js-task
cd js-encoder-react.js-task
```

#### Install Dependencies

```bash
npm install
# or
yarn
```

#### Run the Project

```bash
npm run dev
# or
yarn run dev

```

This will generate optimized production-ready assets in the dist directory.

### Components and Functionality

#### Represent Directory Tree
```plaintext
.
--src
  |--app
  |  |--(client-components)
  |  |  |--(Header)
  |  |  |   |--Header.tsx
  |  |  |   |--Nav.tsx
  |  |  |--(HeroSearchFrom)
  |  |      |--ButtonSubmit.tsx
  |  |      |--DateRangeInput.tsx
  |  |      |--GuestInput.tsx
  |  |      |--HeroSearchForm.tsx
  |  |  |--type.ts
  |  |--(home)
  |  |  |--layout.tsx
  |  |  |--SearchProperty.tsx
  |  |--(listing-detail)
  |  |  |--listing-stay-detail
  |  |     |--constants.ts
  |  |     |--GuestInput.ts
  |  |     |--page.ts
  |  |     |--StayDateRangeInput.ts
  |  |--api
  |  |  |--hello
  |  |     |--auth
  |  |        |--[...nextauth].ts
  |  |     |--route.ts
  |  |--checkout
  |  |  |--page.tsx
  |  |  |--PageMain.tsx
  |  |--login
  |  |   |--page.tsx
  |  |--pay-node
  |  |   |--page.tsx
  |  |--sign-up
  |     |--page.tsx
  |--components
     |--listing-image-gallery
     |  |--components
     |  |  |--Icons
     |  |     |--Twitter.tsx
     |  |  |--ShareModal.tsx
     |  |--style
     |  |  |--index.css
     |  |--utils
     |  |  |--downloadPhoto.ts
     |  |  |--range.ts
     |  |  |--types.ts
     |  |  |--useLasImageGallery.tsx
     |  |--ListingImageGallery.tax
     |--BtnLikeIcon.tsx
     |--CardCategory.tsx
     |--CommentListing.tsx
     |--DatePickerCustomDay.tsx
     |--DatePickerCustomHeader.tsx
     |--FiveStartIconForRate.tsx
     |--Footer.tsx
     |--GallerySlider.tsx
     |--Label.tsx
     |--MolSelectDay.tsx
     |--NcInputNumber.tsx
     |--NextBtn.tsx
     |--PropertyCard.tsx
     |--StarRating.tsx

  |--contains
  |--data
  |--fonts
  |--hooks
  |--images
  |--redux
  |--routers
  |--shared
  |--styles
  |--utils
```
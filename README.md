# 3D NextJS Marketplace site

This is a 3D marketplace site built with NextJS, ThreeJS, and TailwindCSS.

## Live Demo
[Link](https://3d-nextjs-marketplace.netlify.app)

## Features

- Site has 5 pages: Home, Products, Cart, Account, and Item page
- All pages share a top navigation bar
- Home page contains an interactive three.js canvas
- Products page contain list of products
- Account page contains user's profile information
- Cart contains list of items in cart
- Using redux state management to manage two data slices: Cart and Profile
- Assuming only one account in the system and desktop layout starting at min-width of 950px

## Running Locally

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
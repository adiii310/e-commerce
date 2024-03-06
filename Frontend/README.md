# Intorduction

- This is an e-commerce website made with react , this project use dymaic routing and uses static data to show the product detail, No api is used in this project.

- This Project only showcases my react knowledge and some what designing skiil.
- I made this project to enhance my skills and how to build logic while working on some real life project.

# Table Of Content

- [Use of React Router Dom](#react-router-dom)
- [From Where The Data Is Coming](#static-data)
- [use of ContextAPI](#context-api)
- [Hooks Used](#hooks)
- [Navbar Component](#navbar)
- [ Utility Component](#utility-component)
- [Product Detail Component](#product-detail-page)
- [category](#men-women-new-page)
- [Cart Mangement](#cart-page)
- [Favourite Itme](#fav-page)
- [footer Component](#footer)




# WorkFlow

## React Router Dom

- react-router-dom package is used to make the dynamic routing and accoring to the path the component is lodaed

## Static Data

> Data Used to show the product is Static
- we have the array of object and we loop through themn to show the product.
- for diffrent pages we have diffrent set of data.
- we will try to make the data dymaic in future.

## Context Api

> `context api` will be used to store the data at single place so that every component can acees it

- This feature is `not applied` yet
- for Now The data is fetched from the data folder and data is passed from parent to child

## Hooks

1. ` UseCart Hook`

- This hook is used to add item to cart and also to acess the itme from cart.

- cart items are stoered in Local Storage.

2. `UseFav Hook`

- This hook is used to Acess the fav item and to add Fav Item.

- All the fav items are stoerd in The Local Storage.

## Navbar

- we have diffrent sction such as
  1. Mens Category
  1. Womens Category
  1. New Collection Categoru
- on the other side of nav bar we have
  1. Search box
  1. Favourite Items
  1. Cart
  1. Login/ SignUp Section

## Utility Component
> Utility Component Takes data loop through it and show all the data in card format

- This component is used inside all the categorise such as ` Men , Women ,New `

- It takes the prop ` Incoming Data` which contain product Details.

- It loops Through this incoming Data and form the Card view of all the product.

- It have `2 Buttoons` 
    - Add To Fav
    - Add To Cart

## Product Detail Page

> This page is used to show the full Description About the product 

- From the url it takes the product id with the help of  `useParams()` hook
- It filter the Product which has the same id and view only that.


## Men Women New Page
>We have static data for `Men` `Women` `New ` as  `Menswear`, `WomensWear`,`NewWear` respectively

## Cart Page 

>It fetch the data from the local Storage `key` = `Cart`

- It display all the product and generate the bill

- The itme present in the cart will have `Tick` Symbol on them 

-The item not present in cart will have `Plus` Symbom on them

## Fav Page
> This page contains all the item You marekd as fav

- The item marked as fav will have `Red Heart` 
- Item not markd as fav will have `Black Heart`

## Login Page
> Not Ready Yet.

## Footer
> this component contains detail regarding the company and also about the publisher

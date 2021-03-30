# Minor WDD Enquête

_Made for Browser Technologies @ cmda-minor-web 2020 - 2021_


<!-------------------------- New Paragraph -------------------------->

## :pushpin: Table of Contents

<!-- - [What does this Web App do?](#gem-What-does-this-Web-App-do?) -->

<!-- - [API](#link-API)
- [Used Packages](#gift-Used-Packages)
- [Install](#inbox_tray-Install)
- [Next Steps](#telescope-Next-Steps)
- [License](#closed_lock_with_key-License)
- [Sources](#books-Sources) -->

<br/>

---

<!-- features
 
 saving data to database
 pure CSS progress bar
 localStorage
 form validation
 slider 
 
 
 -->


<!-- Cut the mustard
Ik trek een grens bij browsers die het gebruik van ES6 niet ondersteunen, dit geldt voor internet explorer en browsers ouder dan 2015. Het gebruik van let en const zorgt voor strictere code en onderandere het gebruik van arrow functions, dat code een stuk leesbaarder maakt. -->



<!-------------------------- New Paragraph -------------------------->

<!-- ## :interrobang: What does this Web App do?

- Fetch & show the trending GIFs on load
- Fetch & show the user GIFs based on the value they haved typed into the input field
- Fetch & show the user the details of a GIF they clicked on
- Provide the user with feedback while the content is loading
- Provide the user with feedback when hovering over a GIF

<br/>  -->

---

<!-------------------------- New Paragraph -------------------------->

## :gem: Features & Enhancements
I have added the following features & enhancements to my website:

- Fully functional HTML-only page
- HTML & CSS only navigation
- HTML & CSS only progress bar 
- localStorage
- Form validation
- Saves user input to a database 
- Shows user input on a results page
- Fully responsive design 

<br/>

---

<!-------------------------- New Paragraph -------------------------->

## :mag: Testing & Layers

### :globe_with_meridians: Browsers
I tested my website in the following browsers:
- Desktop: Chrome & Firefox
- iOS: Safari
- Android: Chrome

### :computer: What did I do in my code?
To make sure that all my styling and added features worked in all browsers named above, I added some fallbacks or extra lines of code.  

</br>

An example of this, is the lines of code below. I used this ```.valid``` class in my JavaScript to give correctly filled out input fields a box shadow. Safari doesn't understand the regular ```box-shadow```, so I added in the two lines of code below. First, I set the ```-webkit-appearance``` to none, to get rid of any styling to browser may add by default. Next, I put ```-webkit-``` before my original code in order to get the box-shadow to work in Safari as well.

```
.valid {
  box-shadow: -3px 3px 0px rgba(127, 205, 123, 1);
  
  /* safari styles */
  -webkit-appearance: none;
  -webkit-box-shadow: -3px 3px 0px rgba(127, 205, 123, 1);
}
```

</br>

Another example is the extra line of code that I added in order to remove the default styles that Safari gives to buttons. I added this line of code to my regular code for the buttons.

```
  /* remove default safari styles */
  -webkit-appearance: none;
```

</br>

### Layers
In order to write a progressively enhanced website, you write your code in three layers: first comes HTML, secondly you add a layer of CSS to that and lastly you enhance the experience with a layer of JavaScript.  

#### Core
By rendering my HTML server-side, I am able to save all user input to a database. This makes it a core functionality which always works.

#### HTML
I started my app by writing semantic HTML, making the website's core as user friendly as possibly can be achieved with only HTML. I tested this HTML in my four browsers. In all four of the browsers, the HTML works exactly as intended.

</br>

**Desktop - Chrome**
![desktop_chrome_html](https://user-images.githubusercontent.com/57795294/113063690-03471e80-91b6-11eb-9f00-0889f659fb0e.gif)

</br>

**Desktop - Firefox**
![desktop_firefox_html](https://user-images.githubusercontent.com/57795294/113063742-1823b200-91b6-11eb-89dc-560ea4bb5d73.gif)

</br>

**Mobile - Chrome (Android)**
![mobile_chrome_html)](https://user-images.githubusercontent.com/57795294/113063806-2d004580-91b6-11eb-9985-6ef2ad7a4e38.gif)

</br>

**Mobile - Safari (iOS)**
![mobile_safari_html](https://user-images.githubusercontent.com/57795294/113063926-62a52e80-91b6-11eb-984e-86490c793b39.gif)


</br>

#### CSS
Next, I added my CSS. I gave each course their own 'page' to make the survey progressively disclosed and easier to fill out, because the user needs to only focus on one course at a time. The navigation for this layout is HTML & CSS only, so it doesn't need any JavaScript to work. I did this, so the user has the most optimal layout, even if they may have JavaScript turned off. Another enhancement that gets enabled once CSS does, is a progress bar being shown to the user on each page as well.

</br>

**Desktop - Chrome**
![desktop_chrome_css](https://user-images.githubusercontent.com/57795294/113063520-bd8a5600-91b5-11eb-8c1c-713bab80ca84.gif)

</br>

**Desktop - Firefox**
![desktop_firefox_css](https://user-images.githubusercontent.com/57795294/113063730-122dd100-91b6-11eb-925e-fb173563934b.gif)

</br>

**Mobile - Chrome (Android)**
![mobile_chrome_css](https://user-images.githubusercontent.com/57795294/113063778-2671ce00-91b6-11eb-977f-ca30e7c57bd2.gif)

</br>

**Mobile - Safari (iOS)**
![mobile_safari_css](https://user-images.githubusercontent.com/57795294/113063905-57520300-91b6-11eb-8815-b2fd59a4aaeb.gif)

</br>

#### JavaScript
Last but definitely not least - JavaScript. This layer is meant to really enhance the overall user experience. When JavaScript in enabled, the user input is stored in localStorage, so they can close the window and return to the survey later. Another features that works once JavaScript is enabled, is form validation. The form validations works together with the CSS, by checking if the user has entered something inside an input field and adding the correct class to that input field once they leave that field.

</br>

**Desktop - Chrome**
![desktop_chrome_js](https://user-images.githubusercontent.com/57795294/113063712-0a6e2c80-91b6-11eb-8bb9-e7df4ec18be5.gif)

</br>

**Desktop - Firefox**
![desktop_firefox_js](https://user-images.githubusercontent.com/57795294/113063756-1e199300-91b6-11eb-898b-1df9bd59a7ed.gif)

</br>

**Mobile - Chrome (Android)**
![mobile_chrome_js](https://user-images.githubusercontent.com/57795294/113063827-34275380-91b6-11eb-8191-f72d3672860e.gif)

</br>

**Mobile - Safari (iOS)**
![mobile_safari_js](https://user-images.githubusercontent.com/57795294/113063942-6afd6980-91b6-11eb-86e2-cf7001334588.gif)


<br/>

---

<!-------------------------- New Paragraph -------------------------->

<!-- ## :inbox_tray: Install

### 1. :dancers: Cone this repo

Before we can get started, we'll need to clone this repo.
This can be done by typing the following line of code into your terminal:

`git clone https://github.com/lisaoude/gifinder-pwa.git`

<br/>

### 2. :computer: Install package

Next, we will have to install the used packages.

`npm install `

<br/>

### 3. :arrow_forward: Start local dev environment

This can be done by typing the following line of code into your terminal:

`npm run dev`

<br/>

### 4. :european_post_office: Build export

Almost done! We just need to navigate to the localhost in the browser.

`npm run build`

<br/> -->

---

<!-------------------------- New Paragraph -------------------------->

<!-- ## :telescope: Next Steps

We all know creative developing projects are never _truly_ done..  
These are some next steps that I would love to make:

- [ ] Make it possible to let the users search for GIFs -->

<!-- - Make it possible for the user to save gifs, in the following ways:

  - Save the gifs to a favorites list
  - Save the gifs to a special collection, which the user can name themselves (e.g. funny gifs, cat gifs, etc.)
  - Save the gifs to their device (download)

- Give Gifinder a random mode

  - Returns a random GIF o the user after a button press

- Autocomplete user input with a list of valid terms that completes what the user has typed into the input field

- Provide users with a list of GIF categories
- Provide users with a list of the trending search terms
- Suggest searches to users -->

<br/>

---

<!-------------------------- New Paragraph -------------------------->

## :closed_lock_with_key: License

This repository is licensed as [MIT](https://github.com/lisaoude/browser-technologies-2021/blob/master/LICENSE) by © Lisa Oude Elferink, 2021

<br/>

---

<!-------------------------- New Paragraph -------------------------->

## :books: Sources

- Schepenaar, W. (2018, June 12). Server-side vs Client-side Routing. Retrieved March 8, 2021, from [Medium](https://medium.com/@wilbo/server-side-vs-client-side-routing-71d710e9227f)
- Ian Schoonover. (2020, June 27). How to Install Node JS on Windows 10. Retrieved March 8, 2021, from [YouTube](https://www.youtube.com/watch?v=AuCuHvgOeBY)
- Installing Express. (2021). Retrieved March 8, 2021, from [Expressjs.com](http://expressjs.com/en/starter/installing.html)
- The Net Ninja. (2020).  Node.js Crash Course Tutorial. Retrieved March 8, 2021, from [YouTube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)
- npm: ejs. (2021, February 6). Retrieved March 9, 2021, from [NPMjs.com](https://www.npmjs.com/package/ejs)
- Big thanks to [Jonah](https://github.com/theonejonahgold) for helping me with fixing the last steps of my personal localStorage hell & re-writing my localStorage JavaScript code to be about 10 times shorter


# Minor WDD Enquête

_Made for Browser Technologies @ cmda-minor-web 2020 - 2021_

<!-------------------------- New Paragraph -------------------------->

## :pushpin: Table of Contents

- [Case description](#pencil2-Case-description)
  - [User wants & needs](#User-wants-&-needs)
  - [Requirements](#Requirements)

</br>

- [What does this Web App do?](#interrobang-What-does-this-Web-App-do?)
- [Live link](#rainbow-Live-link)
- [Features & Enhancements](#gem-Features-&-Enhancements)
- [npm install progressive-enhancement](#electric_plug-npm-install-progressive-enhancement)

</br>

- [Testing](#mag-Testing)
  - [Browsers](#globe_with_meridians-Browsers)
  - [Cutting the Mustard](#hocho-Cutting-the-mustard)
  - [What did I do in my code?](#computer-What-did-I-do-in-my-code?)
  - [Accessibility](#crown-Accessibility)
  - [Layers](#zap-Layers)
  - [Error testing](#red_circle-Error-testing)

</br>

- [Flow](#wavy_dash-Flow)
- [Next steps for this project](#telescope-Next-steps-for-this-project)
- [Take aways for my next project](#pizza-ramen-Take-aways-for-my-next-project)
- [Install](#inbox_tray-Install)
- [License](#closed_lock_with_key-License)
- [Sources](#books-Sources)

<br/>

---



<!-------------------------- New Paragraph -------------------------->

## :pencil2: Case description
### :princess: User wants & needs
> I want to fill out a survey about the minor Web Design & Development, with different answering options. If I can't finish the survey in one sitting, I want to be able to continue where I left off before at a different moment.

</br>

### :memo: Requirements
The survey must contain (the options to fill out) the following:
- Students' information (name & number)
- For each course:
  - Name of the course
  - Teacher who taught the course
  - Weeks in which the course was followed
  - General rating from 1 tot 10
  - Question about course materials
  - Question about explanation during the course
  - Question about how good the student understands the course materials now
- Form validation
- Local storage

<br/>

---

<!-------------------------- New Paragraph -------------------------->

## :interrobang: What does this Web App do?

- Allow the user to fill out a survey, whether they have CSS and JS turned on or off
- Always works - even when CSS and JS are not available
- Save the user input to a database
- Show the user input on a results page ('admin')  

<br/> 

---

<!-------------------------- New Paragraph -------------------------->

## :rainbow: Live link

[My work can be viewed right here](https://enquete-bt.herokuapp.com/)

<br/> 

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

## :electric_plug: npm install progressive-enhancement
(layers)

<br/>

---

<!-------------------------- New Paragraph -------------------------->

## :mag: Testing

### :globe_with_meridians: Browsers
I tested my website in the following browsers:
- Desktop: Chrome & Firefox
- iOS: Safari
- Android: Chrome

</br>

### :hocho: Cutting the mustard
I draw the line at browsers that don't support JS ES6, which is Internet Explorer and browsers older than 2015. Using ```let``` and ```const``` results in more strict and clean code and the use of arrow functions, which makes the code much more readable.

</br>

### :computer: What did I do in my code?
Before using a CSS selector, I checked [caniuse.com](www.caniuse.com) to see if the variable I was planning on using was supported by the browsers I'm testing my website in. To make sure that all my styling and added features worked in all browsers named above, I added some fallbacks or extra lines of code.  

</br>

An example of this, is the lines of code below. I used this ```.valid``` class in my JavaScript to give correctly filled out input fields a box shadow. Safari doesn't understand the regular ```box-shadow```, so I added in the two lines of code at the bottom. First, I set the ```-webkit-appearance``` to none, to get rid of any styling to browser may add by default. Next, I put ```-webkit-``` before my original code in order to get the box-shadow to work in Safari as well.

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

### :crown: Accessibility
During development, I used Chrome Lighthouse to check how my Accessibility & Best Practices were looking. The only accessibility issues Lighthouse is able to find, is that I use multiple h3's in my form (as a heading for my section with three radio buttons). I'll take it!  

![image](https://user-images.githubusercontent.com/57795294/113069165-06dfa300-91c0-11eb-9695-61160a853ed7.png)

</br>

I also chose to give my background a gradient (with a fallback), but keep the actual form white with black text. This combination results in the highest color contrast, ensuring that it's as accessible as far as colors go.





</br>

### :zap: Layers
In order to write a progressively enhanced website, you write your code in three layers: first comes HTML, secondly you add a layer of CSS to that and lastly you enhance the experience with a layer of JavaScript.  

</br>

#### Core
By rendering my HTML server-side, I am able to save all user input to a database. This makes it a core functionality which always works.

</br>

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

### :red_circle: Error testing

<br/>

---

<!-------------------------- New Paragraph -------------------------->

## :wavy_dash: Flow

<br/>

---

<!-------------------------- New Paragraph -------------------------->

## :telescope: Next steps for this project

<br/>

---

<!-------------------------- New Paragraph -------------------------->

## :pizza::ramen: Take aways for my next project

<br/>

---


<!-------------------------- New Paragraph -------------------------->

## :inbox_tray: Install

### 1. :dancers: Cone this repo

Before we can get started, we'll need to clone this repo.
This can be done by typing the following line of code into your terminal:

```
git clone https://github.com/lisaoude/gifinder-pwa.git
```

<br/>

### 2. :computer: Install package

Next, we will have to install the used packages.

```
npm install
```

<br/>

### 3. :arrow_forward: Start app.js

This can be done by typing the following line of code into your terminal:

```
npm run start
```

<br/>

### 4. :globe_with_meridians: Navigate to local host

Almost done! We just need to navigate to the localhost in the browser.

```
https://localhost:3000/
```

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
- Web Dev Simplified. (2019, June 18). JavaScript Form Validation. Retrieved March 24, 2021, from [YouTube](https://www.youtube.com/watch?v=In0nB0ABaUk&t=307s)
- Thomas Bradley. (2015, September 5). Progressive enhancement: cutting the mustard. Retrieved March 24, 2021, from [YouTube](https://www.youtube.com/watch?v=zbMJtxDD-4I)
- Big thanks to [Jonah](https://github.com/theonejonahgold) for helping me with fixing the last steps of my personal localStorage hell & helping me re-write my localStorage code to be about 10 times shorter


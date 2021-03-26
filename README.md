# RESPONSIVE CAROUSEL BY ANTONIO F. GASCO
  This is a small project I've built to test my abilities in front-end development
  
  If you want to see a live demo of the project, please visit -> https://responsive-carousel.web.app/
  
## Installation
  Type these commands below into the terminal in order to clone this repository to your local machine and then install the packages through npm 
  
  ```bash
  git clone https://github.com/AGasco/responsive-carousel/
  cd .\react-responsive-carousel\
  npm i 
  ```
  
## Usage
To see the project in action, type the following in the terminal 

```bash
npm start
```
  
## How to add any HTML element
Data is defined in <code>src/data.js</code>, and it has the following structure: 

```
{
  index: unique-integer-id,
  slide: html-element
}
```
Inside the slide, you can add any html element. For example, to add an element of type `<img>`, do: 
```
{
  index: 10,  // Unique identifier
  slide: (  
    <img
      id={"slide10"}
      className="slide__img" // Always use this structure -> "slide__{type}"
      src={"path"}
    />)
}
```
The <code>id</code> attribute in the slide element is used to target that specific slide, for styling purposes

## How to target an specific slide
If any slide's style needs to be modified, it can be targeted inside <em>_Slide.scss</em> using the <code>id</code> html attribute. For example, if we would like to target the slide above, we would do so

```
.slide{
  ...
  & #slide10{
    // css goes here
  }
}
```
  
## Features
  <ul>
    <li>
      Responsive
    </li>
    <li>
      Works for all HTML elements
    </li>
      <li>
      Carousel can be navigated using:
        <ul>
          <li>
            Arrows
          </li>
          <li>
            Dots
          </li>
          <li>
            Swipes (mobile & desktop)
          </li>                              
        </ul>
    </li>
  </ul>

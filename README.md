# knockoutjs-examples
![build](https://travis-ci.org/AquaJerry/knockoutjs-examples.svg?branch=master)

Codes from http://learn.knockoutjs.com

## Table of Contents
- [Intro](#intro)
- [Usage](#usage)
- [Wheels](#wheels)
- [License](#license)

## Intro
Knockout applys MVVM (Model-View-ViewModel) into practice. What are these strange names? Well, in my opinions:
- A __view__ is something you can see and touch with, just like the page you're now looking at and scrolling on.
- A __viewModel__ is a "waiter" who can help you reach somewhere within the page.
  > NOTE: It spells as 'viewModel' instead of 'view model' or something.
- I won't talk about a __model__ in this readme.

Someone might wonder why we need such a "waiter". Why don't just let a view do all we want?

Take this readme for example, if you want to know what wheels (pretty useful things) I need in order for my codes to run, see the section "Wheels". How to do it?
- One way is to scroll down with your finger on your phone (or to tap the PageDown key several times on your computer) until you see a big section title "Wheels".
- Another is [click or tap here](#wheels).

No matter which way you do it, you should get something like what I've got after I added "#wheels" in my browser url box, which I didn't do anything with the view of my webpage. When you follow the link above, have you noticed that your url box seems to have something like "#wheels"? In fact, following a link is actually typing a url.
```
Scroll        -+--------------+->
               |              |   Wheels
Follow a link -+-> Type Url  -+->
```
If no url box:
```
Scroll        ------------------> Wheels
```
Oh, too boring.
If no scroll or links:
```
                   Type Url  ---> Wheels
```
Aha, too geek.
So one of the most resonable ways I think is:
```
Scroll        -+--------------+->
               |              |   Wheels
Follow a link -+-> Type Url  -+->
```
Feels better.
In a nerd way:
```
View          -+-> ViewModel -+-> ?
```

## Usage
Since this is now in alpha, what you can only do is just to test. You should have [npm](https://www.npmjs.com/) install before.
```bash
git clone https://github.com/AquaJerry/knockoutjs-examples.git
cd knockoutjs-examples
npm i
npm test
```

## Wheels
If you come from Intro, [click or tap here](#intro).

- Code Quality Tool
  - Htmlhint.
  - Eslint
- Test Environment
  - Jsdom
- Test Library
  - Chai
  - Mocha
- UI Library
  - Knockout

## License
ISC
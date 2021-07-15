In **S**ingle **P**age **A**pplication or **P**rogressive **W**eb **A**pplication world lot of JavaScript framework evolves every day. Let’s talk about Why SPA needed in the modern web application.

## SPA

In the classic web application page reload every time the content changes even though with the help of AJAX, the page reload has minimized but not drastically. To overcome the above issue the we need SPA. In SPA the app that works inside a browser and does not require page reloading during use.

## PWA

It is type of web app built using common web technologies including HTML, CSS and JavaScript. It is intended to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices.

## Library Vs Framework

**Library** is a collection of reusable code that is used to solve common problems

**Framework** is defined open or unimplemented functions or objects which the user writes to create a custom application. we should structure our application how the application should get started how various components should interact with each other and so on. Angular and Blazor are both examples of frameworks for building front-end applications.

## Why we need Framework or Library?

**Use case:** Build a Chair or Table

Would you buy pieces of wood and put them together or would you go to the forest and cut the trees? if there are already pieces (Framework or library) of wood ready for us.

If we reuse the frameworks or libraries then it can increase the productivity and speed up the development process.

Let’s compare the React, Angular & Blazor

| Feature          |    **React**     |  **Angular**   |                        **Blazor**                        |
| :--------------- | :--------------: | :------------: | :------------------------------------------------------: |
| Type             |     Library      |   Framework    |                        Framework                         |
| Release Date     |       2013       |      2010      |                           2015                           |
| Developer        |     Facebook     |     Google     |                        Microsoft                         |
| Language         | JavaScript (JSX) |   TypeScript   |                            C#                            |
| DOM              |   Virtual DOM    |  Regular DOM   |                     Incremental DOM                      |
| Data Binding     | Uni-directional  | Bi-directional |                     Uni-directional                      |
| Learning         | Easy to learn    |    Steep       | <p>Easy to learn</p><p>` `\* if you are OO Developer</p> |
| State Management |      Redux       |     Akita      |                  Fluxor (yet to mature)                  |

## Why React?

**Angular** was developed by Google and was initially released in 2010 until 2016 it used to be called AngularJS. In 2016 angular team released Angular2 which was a complete rewrite of AngularJS.

There is nothing in common with the previous version of angular. It was a completely new framework.

This made a lot of developers unhappy. Any applications that were built with AngularJS had to be rebuilt with angular. The last three years there have been several releases of angular and we have experienced several breaking changes.

**React** is developed Facebook and it's been around since 2013 currently it's at version 17 and it's

being used by Facebook, Twitter, Netflix, PayPal and uber. It has a huge community support and tons of third-party libraries, packages, tools and extensions as well as tutorials.

**Blazor** was developed by Microsoft and it’s been around since 2018, it’s a free and open-source web framework that enables developers to create web apps using C# and HTML.

## Learning curve

The framework or library you choose should be relatively easy to learn so that other members in your team can quickly up-to-speed.

**Angular** has always been famous for having a steep learning curve because it's a full-blown framework or a complete solution. There is so many concepts to recall. The entry barrier for angular is clearly higher than for react there are so many things you need to learn in contrast.

**React** is just a library and not a complete solution so it has fewer concepts that you need to learn and understand react uses JavaScript XML or JSON HTML within JavaScript code.

**Blazor** lets you build interactive web UI’s using C# instead of JavaScript. Apps are composed of reusable web UI components implemented using C#, HTML, and CSS. But yet to get matured.

## State management

State management plays vital role in SPA, for Angular we can go with Akita, React its Redux & for Blazor its Fluxor.

**Now the ball is on your court!**

## Demo

I’ve implemented the Shopping cart application using Balzor, React & Angular.

Github: <https://github.com/thavasnippets/SPA>

![ShoppingCart](https://user-images.githubusercontent.com/15138302/125741682-3628bdfc-c0aa-4b13-a384-4e627020d8f8.png)

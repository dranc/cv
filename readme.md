# My CV

This CV has been made using [Hugo](https://gohugo.io/) and not enough skills in term of design...

You can visit the cv here : [cv.dranc.dev](https://cv.dranc.dev).

## Installation

First install Hugo following [this link](https://gohugo.io/installation/).

Then run

> hugo serve

Open a brother and check http://localhost:1313/.

## Customization

Some data are hidden from the www.

To access it you need to pass some data as a query to do so, use base64 to "encrypt" chat you want.

Currently you can update

| Key | Description                              |
| --- | ---------------------------------------- |
| a   | The address above the country            |
| p   | The phone number (visible part included) |
| t   | Title of the CV                          |
| d   | Description (under the title)            |

To encrypt the data use whatever tool you want, for example Node :

> btoa(JSON.stringify({a: "Une rue", p: "06.00.00.00.00", t: "Best CV !", d: "You can add whatever you want !"}))

It will give you

> eyJhIjoiVW5lIHJ1ZSIsInAiOiIwNi4wMC4wMC4wMC4wMCIsInQiOiJCZXN0IENWICEiLCJkIjoiWW91IGNhbiBhZGQgd2hhdGV2ZXIgeW91IHdhbnQgISJ9

Then use that as a query parameter and here you have your custom cv :

https://cv.dranc.dev?data=eyJhIjoiVW5lIHJ1ZSIsInAiOiIwNi4wMC4wMC4wMC4wMCIsInQiOiJCZXN0IENWICEiLCJkIjoiWW91IGNhbiBhZGQgd2hhdGV2ZXIgeW91IHdhbnQgISJ9

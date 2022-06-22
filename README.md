# <font color="yellow">Hubikes 🚲</font>
This is a project of an API about sell bikes 🚴‍♀️✨

</BR>
<div align = "center"> <strong> POWERED BY </strong> </div> 
</BR>
  <div align = "center">

    👻 Danielle Kensy 👻

</div>
</BR>

___
## 🔧 Using the following technologies:
- Knex
- MySql
- Typescript
- Express
- Node.js
___

In the document below you can find all the instructions about how to use the `6` methods:
___
## <font color="pink">Get All Bikes</font>
Using the path /bikes

You will have the return of an array with all the registered bicycles:
~~~
[
  {
    "id": "08c7f425-ab7e-44ea-8a9d-c2bbc54042b8",
    "color": "yellow",
    "marches": 6,
    "brand": "Orbea",
    "model": "Trip Bike",
    "price": 3000
  },
  {
    "id": "3538ca7b-d995-4ade-8d5b-1e6fb01d90f4",
    "color": "black",
    "marches": 6,
    "brand": "Caloi",
    "model": "aro 29",
    "price": 1000
  }
]
~~~
___
## <font color="pink">Get Bikes By Color</font>
Using the path /colors?color=black

You will have the return of an array with the bicycles of the color you choose:
~~~
[
  {
    "id": "3538ca7b-d995-4ade-8d5b-1e6fb01d90f4",
    "color": "black",
    "marches": 6,
    "brand": "Caloi",
    "model": "aro 29",
    "price": 1000
  }
]
~~~
___
## <font color="pink">Get Bikes By Price</font>
Using the path /colors?price=3000

You will have the return of an array with the bicycles of the price you choose:
~~~
[
  {
    "id": "08c7f425-ab7e-44ea-8a9d-c2bbc54042b8",
    "color": "yellow",
    "marches": 6,
    "brand": "Orbea",
    "model": "Trip Bike",
    "price": 3000
  }
]
~~~
___
## <font color="pink">Bike Register</font>
Using the path /bike/register

And passing the following body:
~~~
{
    "color":"black", 
    "marches": 6, 
    "brand":"Caloi", 
    "model":"aro 29", 
    "price": 1000.00
}
~~~
You will get this return:
~~~
Registered Bike✅
~~~
___
## <font color="pink">Alter Price</font>
Using the path /bike/:bikeId

And passing the following body:
~~~
{ 
    "price": 1000.00
}
~~~
You will get this return:
~~~
Altered Bike✅
~~~
___
## <font color="pink">Sell Bike</font>
Using the path /bike/del/:bikeId

You will get this return:
~~~
Removed Bike✅
~~~
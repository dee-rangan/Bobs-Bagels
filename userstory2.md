As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket. In the same way, I want to know if I try to add an item with the same ID already in my basket.


| Object | Properties| Messages | Output
| ----------- | ----------- | -----| -----|
| Basket | basket  | basket()   | @string  |
| Item |           | addItem()   | @string  |
|      |           | removeItem()| @string  |
|  |   |   |   |

Objects
Basket
Item
price(@Integer)

Properties
Integer
Basket(@Array[Items])


Messages
addItem()
removeItem()
total()
showBasket()
expandCapacity()

Output
@ItemList
@String
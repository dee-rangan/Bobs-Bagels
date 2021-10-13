As a member of the public,
So that I can change my order
I'd like to remove an item from my basket



| Object | Properties| Messages | Output
| ----------- | ----------- | -----| -----|
| Item | Item @Array[@String] |  itemName()| @string |
| Basket | items @Array[@Item]  | removeItem(@string) | @basket  |


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
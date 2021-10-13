As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

| Object      |   Properties| Messages    |   Output    |
| ----------- | ----------- |-----------  | ----------- |
| Basket | ExpandBasket(string) | expandBasket(@basket) | @basket |
| | items @Array[@Item]  | addItem(@String)   | @basket |
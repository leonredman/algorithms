// Big O - Hash Tables

// in table example we see that each address has a linked list just to make it look easier.

// The Hash Method itself is constant time O(1)

//if we set a value and we run the set method through the hash we get an address say index of 2
//then we push on an item this is an O(1)

// if we do a get method   like get(screws) we run that throght the hash method and find its index of 6
// that is also one operation if screws is at the index
// But if Screws is at the end of a list then we have to iterate through the list to get to screws
// This would be O(n)

// Built in HashTables in javascript are typically objects. The Hash Function is going to be very
// efficient at randomizing the addresses so it will look spread out. Collisions are rare.
//Finding things by the Key Value Pair is O(1)

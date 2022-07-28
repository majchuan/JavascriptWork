/*
You are given a list of cities in a map. it represents avaliable roads from one city to another.
0 <-> 2
1 <-> 1
2 <-> 3,4
3 <-> 2,4
4 <-> 2,3,6
5 <-> 6
6 <-> 4,5
given above the lsit, city id 0 is connected to city id 2, which is connected to city ids 3 and 4.
a visitor can travel its destinaltion by visiting other cities in the path, so city id 0 can send a message to city id 4 via city id 2.
in fact, all of the above cities can communite with each other except for 1 which is only connected to itself.
Building a function that can identify wheather a city is reachable via another city
is_reachable(0,2) => true
is_reachable(2,0) => false
is_reachable(0,1) => false
is_reachable(0,6) => true
is_reachable(0,0) => true
is_reachable(0,999) => false
*/
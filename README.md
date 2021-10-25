# ticker-technical-test

command line args

npm start x y FFFLLLBBB [mk1 | mk2]

Example:

```

npm start 0 0 FFFLLLBBB mk1


npm start 4 2 FFFLLLBBB mk2
```
## MK 1

Scenario 1:
FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF
FFFFFFFFFFFFFFFFFFFFF = 21
RRRRR = 6
LLLLLL = 7

-1, 21
+0 +0

Scenario 2:
FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF

FFFFFFFFFFFFFFF = 15
RRRRRRRRRRRRR = 13
LLLLLLLLLLLL = 12
BB = 2

1,13
+3, +6
4, 19

Scenario 3:
RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR
RRRRRRRRRRRR = 12
FFFFFFFFFFFFF = 13
LLLLLLLLL = 9
BBBBB = 5

3,8
+0, +7
3, 15


### Assumptions

1. Initial direction is always up, therefore, F = Y + 1, B = Y - 1, R = X + 1, L = X - 1;

## Mk2

Scenario 1:
Diagonal right
FFFRFFF
3,3

Scenario 2:
return to 0
FFFFRRFFFF
0,0

Scenario 3:
dont go beyond boundry
LFFRFF
0,0

Scenario 4:
dont go beyond boundry
LFFRFFLLFF,
0,0

Scenario 5:
2 steps forwards, 1 step back
FFB,
0,1

### Assumptions

1. Origin cannot be negative on either axis
2. Turning around to face the way we are going also moves.

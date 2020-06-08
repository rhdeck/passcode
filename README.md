# passcode

Node.js passcode generator

## Installation

```
yarn add @raydeck/passcode
```

## Usage: makePasscode([length = 6], [characterset = "number"]): Promise<string>

### Return value

Promise for a string that contains the random passcode. Best used with async/await as in example below.

### Arguments

#### length

How long to make the passcode. Must be positive integer. Defaults to 6

#### characterset

Key of an avaiable set of characters to randomly generate from. Available keys:

1. number (digits 0-9)
2. alphanumeric (lowercase letters plus numbers)
3. loweralphanumeric (same as alphanumeric)
4. upperalphanumeric (uppercase letters plus numbers)
5. allalphanumeric (uppercase, lowercase and numbers - maximum entropy)
6. lowercase (lowercase letters a-z)
7. uppercase (uppercase letters a-z)

Defaults to "number".

## Example

```js
const makePasscode = require("@raydeck/passcode");

const sixDigitCode = await makePasscode();

const tenCharacterCode = await makePasscode(10, "alphanumeric");
```

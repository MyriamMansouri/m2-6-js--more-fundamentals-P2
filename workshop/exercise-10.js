// Exercise 10
// -----------

let inputData = {
  name: "Will Byers",
  age: 9,
  status: "upside down",
  superpower1: "can-blink-lights",
  superpower2: null,
  address1: "123 Whatever street",
  addressCity: "Hawkins",
  addressState: "Indiana",
  addressCountry: "United States",
  motherName: "Joyce Byers",
  motherAge: 35,
  motherStatus: "worried",
  motherSuperpower1: null,
  motherSuperpower2: null,
  bestFriendName: "Mike Wheeler",
  bestFriendAge: 9,
  bestFriendStatus: "frenetic",
  bestFriendSuperpower1: null,
  bestFriendSuperpower2: null,
  girlfriendName: "Eleven",
  girlfriendAge: 9,
  girlfriendStatus: "angry",
  girlfriendSuperpower1: "telepathy",
  girlfriendSuperpower2: "multiverse portal sealing",
};

// We want a function that can transform it from that shape to this shape:
//
// {
//   "name": "Will Byers",
//   "age": 9,
//   "status": "upside down",
//   "address": {
//     "streetAddress": "123 Whatever street",
//     "city": "Hawkins",
//     "state": "Indiana",
//     "country": "United States"
//   },
//   "superpowers": [
//     "can-blink-lights"
//   ],
//   "relationships": [
//     {
//       "type": "mother",
//       "name": "Joyce Byers",
//       "age": 35,
//       "status": "worried",
//       "superpowers": []
//     },
//     {
//       "type": "girlfriend",
//       "name": "Eleven",
//       "age": 9,
//       "status": "angry",
//       "superpowers": [
//         "telepathy",
//         "multiverse portal sealing"
//       ]
//     }
//   ]
// }

// Specifically:

// - Address becomes nested in an object
// - Instead of `superpower1` and `superpower2`, an array is used
// - Instead of having a "flat" structure for relationships, a new `relationships`
//   array is added, which holds objects for each relationship.
// - Each relationship has a `type`, like mother/best-friend/girlfriend
// - Each relationship also has an array of super powers, same logic as the main
//   `superpowers` array

// NOTE: For superpowers, you should only have as many items as are available.
// For example, the main superpowers array should be:
// ✅ ['can-blink-lights']
// ⛔️ ['can-blink-lights', null]

const superPowers = (power1, power2) => {
  let powers = [];
  if (typeof power1 === "string") powers.push(power1);
  if (typeof power2 === "string") powers.push(power2);
  return powers;
};

const objCreation = (
  name,
  age,
  status,
  street,
  city,
  state,
  country,
  power1,
  power2,
  type
) => {
  let obj = {};
  if (typeof type === "string") obj.type = type;
  obj.name = name;
  obj.age = age;
  obj.status = status;
  if (typeof street === "string") {
    obj.address = {
      streetAddress: street,
      city: city,
      state: state,
      country: country,
    };
  }
  obj.superpowers = superPowers(power1, power2);
  console.log(type);
  return obj;
};

function transformData(data) {
  let obj = objCreation(
    data.name,
    data.age,
    data.status,
    data.address1,
    data.addressCity,
    data.addressState,
    data.addressCountry,
    data.superpower1,
    data.superpower2,
    null
  );
  let mother = objCreation(
    data.motherName,
    data.motherAge,
    data.motherStatus,
    null,
    null,
    null,
    null,
    data.motherSuperpower1,
    data.motherSuperpower2,
    'mother'
  );
  let bestFriend = objCreation(
    data.bestFriendName,
    data.bestFriendAge,
    data.bestFriendStatus,
    null,
    null,
    null,
    null,
    data.bestFriendSuperpower1,
    data.bestFriendSuperpower2,
    'bestfriend'
  );
  let girlfriend = objCreation(
    data.girlfriendName,
    data.girlfriendAge,
    data.girlfriendStatus,
    null,
    null,
    null,
    null,
    data.girlfriendSuperpower1,
    data.girlfriendSuperpower2,
    'girlfriend'
  );


  obj.relashionships = []
  obj.relashionships.push(mother, bestFriend, girlfriend)

  return obj;
}

// `JSON.stringify` is used to "pretty-print" the output, so that it's easy
// to see what it looks like, and debug any problems.

console.log(JSON.stringify(transformData(inputData), null, 2));

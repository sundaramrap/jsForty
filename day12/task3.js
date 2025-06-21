const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

//extract --> name,comapny , adress.city, using desturcting

const {
  name: userName,
  company: {
    name: userCompany,
    location: { city: address },
  },
} = person;

console.log(
  `UserName : ${userName} companyName: ${userCompany} userAddress ${address}`
);

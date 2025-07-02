const user = {
  name: "tapaScript",
  greet: function () {
    return () => {
      console.log(`Hello, ${this.name}!`);
    };
  },
};
const userCalling = user.greet();

console.log(userCalling());

//simple fix will be
/** use genereal fucntion so that it will in its lexical scope of the assigned function ,
 * function(){//code}
 * 2nd way --> put greet inside a function and then we will get the desired ans ans arrow function consider this from its parents
 */

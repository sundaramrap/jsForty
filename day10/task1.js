let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}

outer();

/**
 *GEC: user -> 
        outer --> memory is allocated 

        EP: user --> alice 
            outer--> executed 
            FEC(for outer)
            cp:     user
                 inner --> memory is allocated
            ep:     user->Bob
                 inner --> executed
                FEC(for inner)
                    cp:
                    ep: console.log( Bob)
Final output will be BOB

 */

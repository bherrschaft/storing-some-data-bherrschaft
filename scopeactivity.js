function outer() {
    let a = "Hello";
    let b = { message: "Hi" };
    
    console.log(a); 
    console.log(b); 
  
    function inner(a, b) {
        console.log(a);
        console.log(b);
        a - "goodbye";
        b.message = "Bye";
        console.log(a);
        console.log(b);
    }
  
    inner(a, b);
    console.log(a);
    console.log(b)

  }
  
  outer();


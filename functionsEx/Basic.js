export default function Basic({name}) {
   const str = speak();
   const area = calcArea(5)
   const productsBill = [3000,4_000, 7_200, 200]
   const totalBill = bill(productsBill, 0.1);
   return (
       <div>
          <div>hello there {name}</div>
          <div>{str}</div>
          <div>area : {area}</div>
          <div>{totalBill}</div>
       </div>
   )
}

const speak = (name="Generosity") => `안녕하세요 ${name}`;

// const calcArea = (radius) => { return 3.14 * radius**2;  }

const calcArea = radius => 3.14 * radius**2;

const bill = (products, tax) => {
   let total = 0;
   for(let i=0; i < products.length; i++) {
      total += products[i] + products[i]*tax
   }
   return total;
}
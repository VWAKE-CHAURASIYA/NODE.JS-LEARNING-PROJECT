import https from 'https';        
//IF WE HAVE TO DEAL WITH API'S THAN WE NEED TO IMPORT HTTP PACKAGE.
import readline from 'readline';  
// IF WE WANT TO READ OR WRITE SOMETHING ON CONSOLE, THEN WE USE 'READLINE

//! 1.FIRST WE NEED TO CREATE INTERFACE USING READLINE, THAT READS AND WRITE:
const rl = readline.createInterface(
    {
        input: process.stdin,
        output:process.stdout,
    }
)
    
//!2. ONCE WE CREATED THE INTERFACE, NOW WE ACCESS THE API DATA:

   const apikey= '1eeccfb59edc61c8c944107e';    //Replace with Real Api key
   const url =  `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;

   const convertCurr =(amount, rate)=>
   {
      return (amount * rate).toFixed(2); 
   }


//!3. HERE NEED TO GET THE API DATA, FOR THAT WE NEED TO USE EVENT, THAT READ THE DATA AND GET DATA IN FORM OF CHUNKS.
   https.get(url, (Res)=>{                            
//Here we get the data from API, in the form of chunks, WHICH IS READABLE STRING
    let data = "";
    Res.on('data', (chunk)=>
    {
        data += chunk;
    }) 

//!4. NOW IN SECOND STEP: WE NEED TO DEFINE THE ANOTHER EVENTS FOR END, WHEN DATA IS COMPLETELY PASSED BY API, AND NO DATA REMAINS.
    Res.on("end", ()=>
    {                      //HERE WE NEED TO REPRESENT ALL THE API DATA TO CONSOLE: 
        const rates = JSON.parse(data).conversion_rates;
        console.log(rates);

        //NOW WE NEED TO ASK QUESTIONS FORM THE USER: 
        rl.question("Enter the Amount in USD:", (amount)=>      //Get Amout as answer
        {
             rl.question("Enter The target Currency: {eg: INR, NPR, EUR:", (curr)=>
            {
                  const rate = rates[curr.toUpperCase()];
                  
                  if(rate)
                    {
    //!5. HERE WE NEED TO CALL THE FUNCTION TO CONVERT THE CURR.
console.log(`${amount} USD is approximately ${convertCurr(amount, rate)} ${curr}`);   
                  }
                  else
                  {
                    console.log("INvalid Currency...");
                  }
            rl.close();
            })
        })
    })
    
})

//let we want : amount : // 90 curr: inr // 90 usd = how much inr ? // 1 usd = 84.9667
// 90 usd = 90 * 84.9667

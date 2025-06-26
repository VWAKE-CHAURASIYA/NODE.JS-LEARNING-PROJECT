// if we need to deal with api in Node.js, first we import http module:
import https from "https";
import chalk from "chalk";

const getjoke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";       // accessing api
  https.get(url , (response)=>                                          //here with get method, we need to pass two args, url and one callback fun.
                //This callback function also include parameter like http.incomingmessage which is an object, which we can give any name to use it.
{

    //Now response is an object , which is READABLE STREAM that allows us to listen events like DATA, END, or ERROR. 
    let data= "";
      response.on("data", (chunk)=>             //here we get the data in the form of chunks by the server, which we need to print it.
    {
            data += chunk; 
    });


    response.on("end", ()=>{
          //once it will be end , now we need to show data  to our webpage, by converting it.
          const joke = JSON.parse(data);
          console.log(joke);
          console.log(`Here is the Random ${joke.type} joke`)
          console.log(chalk.red(`${joke.setup}`));
          console.log(chalk.blue.bgRed.bold(`${joke.punchline}`))
    })


    req.on("error", (err)=>
    {
        console.log(`Error fetching the joke, ${err.message}`);
    })
})
};

const button =document.getElementById('button');
const jokeText=document.getElementById('paragraph');


addEventListener('DOMContentLoaded',getJoke)
button.addEventListener('click',getJoke);

async function getJoke(){
    const jokeData= await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'accept':'application/json'
        }
    })
    const jokeObj=await jokeData.json();
    const joke=jokeObj.joke;
    jokeText.innerHTML=joke
}
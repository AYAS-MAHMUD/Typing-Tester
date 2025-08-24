const typing_text = document.querySelector('.text-of-typing p');
const inputField = document.querySelector('.container .input-field');
const errorTag = document.querySelector('.errors span');
const timeTag = document.querySelector('.time span');
const wpmTag = document.querySelector('.wpm span');
const cpmTag = document.querySelector('.cpm span');
const button = document.querySelector('button');

let characterIndex = 0;

function randomparagraph(){
    let randomIndex = Math.floor(Math.random()*paragraph.length);

    paragraph[randomIndex].split("").forEach((span)=>{
        let spanTag = `<span>${span}</span>`;
        typing_text.innerHTML +=spanTag;
    });
    document.addEventListener('keydown',()=> inputField.focus());
    typing_text.addEventListener('click',()=>inputField.focus());
}

randomparagraph()



function initTyping(){
    const characters = typing_text.querySelectorAll('span');
    let typedCharacter = inputField.value.split("")[characterIndex];
    if(characters[characterIndex].innerText === typedCharacter){
        characters[characterIndex].classList.add('correct');
    }else{
        characters[characterIndex].classList.add('incorrect');
    }

}
inputField.addEventListener('input',initTyping)
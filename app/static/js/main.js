var cl ="left";

window.onscroll = () =>
{   
    var body = document.body,
        html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );

    if(height - window.scrollY <= 2*window.innerHeight){
        AddQuote()
    };
    console.log(height - window.scrollY, window.innerHeight)
    
    x = document.querySelectorAll(".right");
    rightElements = Array.prototype.map.call(x, function(element) {
        return element;
    });
    
    y  = document.getElementsByClassName("left");
    leftElements = Array.prototype.map.call(y, function(element) {
        return element;
    });
    


    rightElements.forEach(elem =>{
        var bodyRect = document.body.getBoundingClientRect(),
        elemRect = elem.getBoundingClientRect(),
        offset   = elemRect.top - bodyRect.top;

        
        elem.style.transform = `scale(${Math.min(- 20+Math.abs( ((offset+1) / window.scrollY) *100), 100)}%) `;
        elem.style.transform += `perspective(${window.innerWidth*2}px)`

        elem.style.transform += `rotateY(${Math.max((window.scrollY - offset) / window.innerHeight*-30 ,0)}deg)`
    })

    leftElements.forEach(elem =>{
        var bodyRect = document.body.getBoundingClientRect(),
        elemRect = elem.getBoundingClientRect(),
        offset   = elemRect.top - bodyRect.top;
        
        
        elem.style.transform = `scale(${Math.min( - 20 + Math.abs( ((offset+1) / window.scrollY) *100), 100)}%) `;
        elem.style.transform += `perspective(${window.innerWidth*2}px)`

        elem.style.transform += `rotateY(${Math.min((window.scrollY - offset) / window.innerHeight*30, 0 )}deg)`


    })

}

function AddQuote(){
    fetch('./random')
    .then((response) => response.json())
    .then((data) => {

        
        author = data['author'];
        content = data['content']
        console.log(data)

        x = document.createElement('div');
        x.classList.add(`${cl}`);
        if(cl === 'left'){
            cl = 'right';
        }else{
            cl = 'left'
        }

        
        x.innerHTML = `
        <div class="txt-wrap">
        <div class="fill Cross"></div>
                <div class="text">

                <h1>${content}</h1>
                <p>${author}</p> 
        </div>
        </div>
        `


        

        document.querySelector('body').appendChild(x)
    });
}
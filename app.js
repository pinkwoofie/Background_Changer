const button = document.querySelectorAll('.button');
// console.log(button);
const body = document.querySelector('body');

button.forEach( (item) =>
{
    item.addEventListener('click', function(e)
{
    const event = e.target.id;
    //console.log(event);
    switch(event)
    {
        case 'red':
            body.style.backgroundColor = event;
            break;
        
        case 'yellow':
            body.style.backgroundColor = 'yellow';
            break;

        case 'green':
            body.style.backgroundColor = 'green';
            break;

        case 'blue':
            body.style.backgroundColor = 'blue';
            break;

        default:
            body.backgroundColor = 'white';
            
    }
})
})

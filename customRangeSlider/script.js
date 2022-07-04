const rangeValue=document.body.querySelector('label')
const input=document.body.querySelector('input')

console.log(input)

input.addEventListener('input',(e)=>{
    const value=+e.target.value
    rangeValue.innerText=value
    
    const range_width=getComputedStyle(e.target).
                        getPropertyValue('width')

    const label_width=getComputedStyle(rangeValue).getPropertyValue('width')
       
    const num_width=+range_width.substring(0,range_width.length-2)
    const num_label_width=+range_width.substring(0,label_width.length-2)

    const max=+e.target.max
    const min=+e.target.min

    const left=value *(num_width/max) - num_label_width/2 +scale(value,min,max,10,-15)//  num_label_width/2 is subtracted so that the movement becomes sync of up and down

    rangeValue.style.left=`${left}px`

    // if(e.target.value>50){
    //     rangeValue.style.left=`${120+(+e.target.value-50)}px`
    // }else{
    //     rangeValue.style.left=`${+e.target.value}px`
    // }
})


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
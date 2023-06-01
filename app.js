
    var btn=document.querySelectorAll(".tabContent button")
    var content=document.querySelectorAll(".content")
    btn.forEach((b,i)=>{
        b.addEventListener("click",()=>{
            content.forEach((c,index)=>{
                c.classList.remove('activeContent')
                btn[index].classList.remove('activeButton')
            })
            content[i].classList.add('activeContent')
            b.classList.add('activeButton')
        })
    })





   document.addEventListener('contextmenu', (e) => e.preventDefault());

 function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
 }

 document.onkeydown = (e) => {
   // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
   if (
     event.keyCode === 123 ||
     ctrlShiftKey(e, 'I') ||
     ctrlShiftKey(e, 'J') ||
     ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
 };

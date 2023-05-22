function clockTime(){
    let date = new Date()
    let hours = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
   
    clock.innerHTML=`${hours}:${minute}:${second}`
     setTimeout(()=>{ clockTime()},1000)
}

clockTime()
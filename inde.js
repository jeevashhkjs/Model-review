
// without using loop

// let btn = document.querySelector(".modal-btn")
// let closes = document.querySelector(".close-btn")

// closes.addEventListener("click",()=>{
//     let show = document.querySelector(".modal-overlay")
//     show.classList.remove("addshow")
// })

// btn.addEventListener("click",()=>{
//     let show = document.querySelector(".modal-overlay")
//     show.classList.add("addshow")
// })

// with using loop

let btns = document.querySelectorAll("button")
for(let i=0;i<btns.length;i++){

    btns[i].addEventListener("click",(e)=>{
    let show = document.querySelector(".modal-overlay")

        if(e.target.classList.contains("modal-btn")){
            show.classList.add("addshow")
        }else{
            show.classList.remove("addshow")
        }
    })
}

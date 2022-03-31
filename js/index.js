let navDoM =document.getElementById("nav");
    function getNav(){
        return axios.get('./nav1.html');
    }


    axios.all([getNav()]).then(axios.spread(function(Nav1){
        navDoM.innerHTML = Nav1.data;
        
        // let menuBtn = document.getElementById("menuBtn");
        // let navbar = document.getElementById("navMenu");
        // if(menuBtn){
        //     menuBtn.addEventListener("click",()=>{
        //         if(navbar.classList.contains("active")){
        //             navbar.classList.remove("active");
        //         }
        //         else{
        //             navbar.classList.add("active");
        //         }
                
        //     });
        // }
        // else{
        //     console.log("-1")
        // }
        
        // let navList = document.getElementById("navList").children;
        //     console.log(navList);
        //     for(i=0;i<navList.length;i++){
        //         navList[i].addEventListener("click",(e)=>{
        //             for(j=0;j<navList.length;j++){
        //                 navList[j].classList.remove("active")
        //             }
        //             e.target.classList.add("active")
        //         })
                

        //     }
        let menuBtn = document.getElementById("menuBtn");
    let navbar = document.getElementById("navMenu");
    let box = document.getElementById("box")
    let wave=document.getElementsByClassName("wave");
    
    let navMenu=document.getElementById("navMenu")
    menuBtn.addEventListener("click",()=>{
        if(navbar.classList.contains("active")){
            navbar.classList.remove("active");
            wave[0].classList.add("active");
            wave[1].classList.add("active");
            navMenu.classList.remove("active")


            setTimeout(()=>{
              box.classList.remove("d-block");
              wave[0].classList.remove("active");
              wave[1].classList.remove("active");

              navMenu.classList.remove("d-block")
             
            },1800)
        }
        else{
            navbar.classList.add("active");
            box.classList.add("d-block");
            
            navMenu.classList.add("active")
            navMenu.classList.add("d-block")
        }
        
    })


    let navList = document.getElementById("navList").children;
        console.log(navList);
        for(i=0;i<navList.length;i++){
            navList[i].addEventListener("click",(e)=>{
                for(j=0;j<navList.length;j++){
                    navList[j].classList.remove("active")
                }
                 e.target.classList.add("active")
            })
            

        }
       
        
    }))


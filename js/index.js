let navDoM =document.getElementById("nav");
    function getNav(){
        return axios.get('./nav1.html');
    }


    axios.all([getNav()]).then(axios.spread(function(Nav1){
        navDoM.innerHTML = Nav1.data;
        
        
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
                navMenu.classList.remove("active");
                ScreenV1();
                menuBtn.disabled = true;



                setTimeout(()=>{
                box.classList.remove("d-block");
                wave[0].classList.remove("active");
                wave[1].classList.remove("active");

                navMenu.classList.remove("d-block")
                menuBtn.disabled = false;
                
                },1700)
            }
            else{
                navbar.classList.add("active");
                box.classList.add("d-block");
                
                navMenu.classList.add("active");
                navMenu.classList.add("d-block");
                ScreenV2();
            }
            
        });
        


        let navList = document.getElementById("navList").children;
        
        for(i=0;i<navList.length;i++){
            navList[i].addEventListener("click",(e)=>{
                for(j=0;j<navList.length;j++){
                    navList[j].classList.remove("active")
                }
                e.target.classList.add("active")
            })
            

        }

        let animItem = bodymovin.loadAnimation({
            wrapper: menuBtn,
            animType: 'svg',
            loop: false,
            autoplay: false,
            path: 'https://assets9.lottiefiles.com/packages/lf20_cwolgngu.json'
        });

        //  判斷視窗寬度
        let WindowsW = window.innerWidth;
        function reset(){
            if(WindowsW < 992){
                animItem.goToAndStop(0,true);
            }else{
                animItem.goToAndStop(59,true);
            }
        }
        reset();
        function ScreenV1(){
            if(WindowsW < 992){
                animItem.setSpeed(3)
                animItem.playSegments([60,40],true);
                animItem.setSpeed(2)
                animItem.playSegments([40,0],true);
                console.log("1")
            }else{
                animItem.setSpeed(1.5)
                animItem.playSegments([0,60],true);
                console.log("2")
            }
        }
        function ScreenV2(){
            if(WindowsW < 992){
                animItem.setSpeed(1.5)
                animItem.playSegments([0,60],true);
                console.log("4")

            }else{
                animItem.setSpeed(3)
                animItem.playSegments([60,40],true);
                animItem.setSpeed(2)
                animItem.playSegments([40,0],true);
                console.log("3")
                
            }
        }
        
        
    }))


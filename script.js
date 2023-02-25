//  function navanimation(){
//           document.querySelectorAll('.pnavbar-links>a').forEach(function(e){
//             console.log(e.target)

//           })
//  }
//  navanimation()
function menuToggle()
 {
    var border=document.querySelector('#border-bottom');
 var navlinks=document.querySelectorAll('.pnavbar-links>a');
//  console.log(atag)

navlinks.forEach(function(elem){
    elem.addEventListener('mousemove',function(e){
    console.log('done')
         var {x,width}=e.target.getBoundingClientRect()
        //  console.log(e.target.getBoundingClientRect())
        //  document.querySelector('.border-bottom').Style.left = `${x}px`;
        border.style.left = `${x -(width/2)}px`;
        border.style.width = `${width*2}px`;
        //  console.log(`${x -(width/2)}`,`${width*2}`)
    })
})
 }

 menuToggle();


 function loaderanimation(){
      var tlLoader=gsap.timeline()
      tlLoader.to('#loadersvg',{
            opacity:0,
            width:1000,
            scale:10,
            display:"none",
            y:"-100%",
            duration:2,
            delay:1.5,
            ease:Expo.easeInOut,
        })
        tlLoader.to('.loader',{
            opacity:0,
            height:"-500%",
            duration:2,
            delay:-1,
            ease:Expo.easeInOut,
            onComplete: function(){
                landinganimation()

            }
    
        })
    
 }

 loaderanimation()

 function landinganimation(){
    var txt
 
 
var h1= document.querySelectorAll(".rev");

    // console.log(h1[0].childNodes);
   


    h1.forEach(function(elem){
        var clutter="";

     txt=elem.textContent.split("");
    //   console.log(txt)
           

        txt.forEach(function(chars,index){
            // console.log(`<span  class=span${index}>${chars}</span>`)
            clutter+=`<span id=span class=span${index}>${chars}</span>`
        })
        elem.innerHTML=clutter;     
    })

 
 
var count=-1;
    function changeSpanContentFromAtoLetter(spanElement, letter,i) {
        count++;
        console.log(count)
        let currentCharCode = 65; // A is 65 in ASCII
      
        const intervalId = setInterval(() => {
          spanElement.textContent = String.fromCharCode(currentCharCode);
          if (currentCharCode === letter.charCodeAt(0)) {
           if(count===i){
            clearInterval(intervalId);
           }

          } else {
            currentCharCode++;
          }
        }, 100); // Change the letter every second (1000 milliseconds)
      }
    
    // 
     
      for(i=0;i<6;i++){
        
        
    
            const Span0 = document.querySelector(`.span${i}`); // Get the <span> element
            changeSpanContentFromAtoLetter(Span0, txt[i] ,i);
    
    
    }


  gsap.from('.exp',{
        x:"100%",
        opacity:0,
        duration:2,
        stagger:.2,
        ease:Expo.easeInOut,

  })
  gsap.from('.landingP',{
    y:'50px',
    opacity:0,
    duration:1,
    ease:Expo.easeInOut,
  })
//   gsap.from('.filter-parent',{
//     y:"100%",
//     opacity:0,
//     duration:2,
//     // staggger:.2,
//     ease:Expo.easeInOut,
//   })
//   gsap.to('.filter-parent',{
     
//     opacity:1,
//     duration:2,
//     delay:-2,
//     // staggger:.2,
//     ease:Expo.easeInOut,
//   })

  function landingsliders(){
    document.querySelector(".landing-page-main-section-child2").addEventListener('mousemove',function(){
        console.log('done')
        document.querySelectorAll('.exp').forEach(function(elem){
            var id=elem.id
            // var prev;
            // console.log(id)
                 document.querySelector("#"+`${id}`).addEventListener('mousemove',function(dets){
                    // console.log(dets.target.id)
                  document.querySelector('#exp1').style.width = "15%";
    
    
                 document.querySelector("#"+`${dets.target.id}`).style.width = '50%';
                
                 
                }) 
                document.querySelector("#"+`${id}`).addEventListener('mouseleave',function(dets){
                    // console.log(dets.target.id)
                    document.querySelector('#exp1').style.width = "50%";
                 document.querySelector("#"+`${dets.target.id}`).style.width = '15%';
    
                
                 
                }) 
                 
        })
     })
     document.querySelector(".landing-page-main-section-child2").addEventListener('mouseleave',function(){
        // console.log('dndn')
        document.querySelector('#exp1').style.width = "50%";
         
     })
 }
 landingsliders()


 }
 function section2animation(){
    document.querySelectorAll('.main-part1-child1>img').forEach((e)=>{
        // console.log(e)
        gsap.from(e,{
            scrollTrigger: {
    
                trigger: "#main-about",
                
                start: "top 40%",
                 
                // markers:true,
                // scrub:1,
        },
           x:100,
           y:100,
           opacity:0,
           duration:1,
           ease:Expo.easeInOut
        })
        
   })
    document.querySelectorAll('.main-part1-child2>img').forEach((e)=>{
        // console.log(e)
        gsap.from(e,{
            scrollTrigger: {
    
                trigger: "#main-about",
                
                start: "top 40%",
                 
                // markers:true,
                // scrub:1,
        },
                 
           x:-100,
           y:-100,
           opacity:0,
           duration:1,
           ease:Expo.easeInOut
        })
        
   })
   
//    gsap.from('.backdrop',{
       
//        scale:0,
//        opacity:0,
//        duration:4,
//        ease:Expo.easeInOut
//     })


    gsap.to('.main-part1-child1>img',{
           
        scrollTrigger: {
        
            trigger: "#main-part1",
            
            start: "top 50%",
             
         //    markers:true,
            scrub:1,
    
        },
             
              y:"-100%",
            // strokeDasharray:0,
            duration:3,
            ease:Expo.easeInOut,
          
       })
       gsap.to('.main-part1-child2>img',{
               
        scrollTrigger: {
        
            trigger: "#main-part1",
            
            start: "top 50%",
             
         //    markers:true,
            scrub:1,
    
        },
             
              y:"100%",
            // strokeDasharray:0,
            duration:3,
            ease:Expo.easeInOut,
          
       })
 }
 section2animation()
//  function aboutAnimation(){
//     document.querySelectorAll('.imgabout').forEach((e)=>{
//         gsap.from(e,{
//            x:100,
//            y:100,
//            opacity:0,
//            duration:4,
//            ease:Expo.easeInOut
//         })
        
//    })
   
//    gsap.from('.backdrop',{
       
//        scale:0,
//        opacity:0,
//        duration:4,
//        ease:Expo.easeInOut
//     })
    
   
//     function revealToSpan() {
   
//        document.querySelectorAll(".reveal")
//            .forEach(function (elem) {
//                console.log(elem);
//                var parent = document.createElement('span');
//                var child = document.createElement('span');
   
//                parent.classList.add('parent');
//                child.classList.add('child');
   
//                child.innerHTML = elem.innerHTML;
//                parent.appendChild(child);
   
//                elem.innerHTML = '';
//                elem.appendChild(parent);
//            });
   
//            gsap.to("#main-about .parent .child", {
//                paddingTop: 0,
//                opacity:1,
//                stagger:.1,
//                duration: 1,
//                // delay: ,
//                ease: Expo.easeInOut0,
//                }
//            )
//    }
   
//    revealToSpan()
   
   
   function linesvg(){
       document.querySelectorAll(".svg>path").forEach(function (e) {
           var charecter = e;
        //    console.log(e)
           charecter.style.strokeDasharray = charecter.getTotalLength()*2 + "px";
           charecter.style.strokeDashoffset = charecter.getTotalLength()*2 + "px";
   
       })
      gsap.to(".svg>path", {
           
       scrollTrigger: {
       
           trigger: ".svg",
           
           start: "top 100%",
            
        //    markers:true,
           
   
       },
            
           strokeDashoffset:0,
           // strokeDasharray:0,
           duration:3,
           ease:Expo.easeInOut,
         
      })
   
   }
   linesvg()
 

//  aboutAnimation()

function gallaryanimation(){
    gsap.to(".gallery-card-section-child", {
        scrollTrigger: {
    
            trigger: "#gallery-setion",
             
            start: "top 40%",
             
            // markers:true,
    
             
            
    
            
            scrub: 1,
        },
         x:"-400%",
         ease:Expo.ease,
    
        // strokeDashoffset:0,
        
    })
    gsap.from(".gallery-nav", {
        scrollTrigger: {
    
            trigger: "#gallery-setion",
             
            start: "top 40%",
             
            // markers:true,
            duration:1,
             
            
    
            
            
        },
         opacity:0,
         scale:0.5,
         ease:Expo.easeInOut,
    
        // strokeDashoffset:0,
        
    })
}
gallaryanimation()
  

function productAnimation(){
   var arr=[];  

    document.querySelectorAll(".strip1>.card").forEach(function(elem){
        // console.log(elem.id.split('')[4])
          
         
        gsap.from("#"+`${elem.id}`, {
            scrollTrigger: {
        
                trigger: ".strip1",
                 
                start: "top 50%",
                 
                // markers:true,
                stagger:.5,
                duration:2,
                
                 
            },
            x:-100,
            //  scale:0,
             opacity:0,
             delay:"0."+elem.id.split('')[2],
            // strokeDashoffset:0,
            
        })
        // console.log("#"+`${elem.id}`+">img")
        gsap.from("#"+`${elem.id}`+">.card-img", {
            scrollTrigger: {
        
                trigger: ".strip1",
                 
                start: "top 50%",
                 
                // markers:true,
                staggger:.5,
                duration:3,
                
                 
            },
            //  width:0,
            borderRadius:"50%",
            scale:0,
             opacity:0,
             delay:"0."+elem.id.split('')[4],
            // strokeDashoffset:0,
            
        })
     })
     document.querySelectorAll(".strip2>.card").forEach(function(elem){
        // console.log(elem.id.split('')[2])
          
         
        gsap.from("#"+`${elem.id}`, {
            scrollTrigger: {
        
                trigger: ".strip2",
                 
                start: "top 60%",
                 
                // markers:true,
                staggger:.5,
                duration:2,
                
                 
            },
            x:100,
            //  scale:0,
             opacity:0,
             delay:"0."+elem.id.split('')[2],
            // strokeDashoffset:0,
            
        })
        // console.log("#"+`${elem.id}`+">img")
        gsap.from("#"+`${elem.id}`+">.card-img", {
            scrollTrigger: {
        
                trigger: ".strip2",
                 
                start: "top 60%",
                 
                // markers:true,
                
                duration:3,
                
                 
            },
            //  width:0,
            borderRadius:"50%",
            scale:0,
             opacity:0,
             delay:"0."+elem.id.split('')[2],
            // strokeDashoffset:0,
            
        })
     })
}
productAnimation()
 
function overviewanimation(){
    gsap.from('.open>h4',{
        scrollTrigger: {
            trigger: ".svg2",
            start: "top 70%",
            // markers:true,
            },
            opacity:0,
            duration:2,
            ease:Expo.easeInOut,
    })
    gsap.from('.open>p',{
        scrollTrigger: {
            trigger: ".svg2",
            start: "top 70%",
            // markers:true,
            },
            opacity:0,
            duration:2,
            ease:Expo.easeInOut,
    })
    gsap.from('.open',{
        scrollTrigger: {
            trigger: ".svg2",
            start: "top 70%",
            // markers:true,
            },
        height:'0',
        y:"-30%",
        duration:1.5,
        ease:Expo.easeInOut,
        onComplete:linesvg2()
      })
}   
 function linesvg2(){
    document.querySelectorAll(".svg2>path").forEach(function (e) {
        var charecter = e;
        // console.log(e)
        charecter.style.strokeDasharray = charecter.getTotalLength()*2 + "px";
        charecter.style.strokeDashoffset = charecter.getTotalLength()*2 + "px";

    })
    gsap.to(".svg2>path", {
        scrollTrigger: {
        trigger: ".svg2",
        start: "top 70%",
        // markers:true,
        },
         
        strokeDashoffset:0,
        // strokeDasharray:0,
        duration:3,
        ease:Expo.easeInOut,
        
      })
 }
     linesvg2()

   
     
    

      
 
    
    
 
 overviewanimation()
 function swiperanimation(){

    gsap.from(".compare-section-comments-child2", {
        scrollTrigger: {
    
            trigger: "#compare-section",
             
            start: "top 10%",
             
            // markers:true,
    
             
            
       duration:2,
            
             
        },
         scale:0,
         ease:Expo.ease,
    
        // strokeDashoffset:0,
        
    })
    gsap.from("#people-says", {
        scrollTrigger: {
    
            trigger: "#compare-section",
             
            start: "top 05%",
             
            // markers:true,
    
             
            
       duration:1.5,
       delay:-2,
            
             
        },
         scale:0,
         opacity:0,
         ease:Expo.ease,
    
        // strokeDashoffset:0,
        
    })


    
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".ri-arrow-right-s-line",
      prevEl: ".ri-arrow-left-s-line",
    },
  });
 }
 swiperanimation()

 
function textscroll(){
   var scr= document.querySelectorAll(".txtanim") 
        scr.forEach(function(dets){
            console.log(dets.id)
            gsap.to("#"+`${dets.id}`,{
                scrollTrigger: {
                    trigger:"#"+`${dets.id}`,
                    start:"top 70%",
                    
                    // markers:true,
                    duration:1,
                    // scrub:true
                },
                 opacity:1,
                 ease:Expo.ease,
                })
                gsap.to("#"+`${dets.id}`,{
                    scrollTrigger: {
                        trigger:"#"+`${dets.id}`,
                        start:"top 70%",
                         
                        // markers:true,
                        duration:1,
                        delay:-1,
                        // scrub:true
                    },
                     y:"-50px",
                     ease:Expo.ease,
                    })
            })
        }
textscroll()



 

 






 

 


 
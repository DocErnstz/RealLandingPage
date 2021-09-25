import React, { useState } from "react";
function Slider() {
  const [index, setIndex] = useState(1);
  const [state, setState] = useState(["A", "B", "C"]);
  const next = (e) => {
    console.log(e);
   if(e == "p"){
     setIndex(index + 1);
     if(index > 1){
       setIndex(0);
     }
     
   } else {
     setIndex(index - 1);
     
     if(index < 1){
       
       setIndex(2);
      
     }
      
   }
  
  };
  return (
     <section id="SliderSection">
        <div className="content">
            <h2>La vida te pide desiciones</h2>
            <p>te damos un <span>espacio</span> y un <span>metodo</span> para...</p>
        </div>
        <div className="slider">
          <div className="fball">
            <svg width="342" height="342" viewBox="0 0 342 342" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d)">
                <circle cx="171" cy="161" r="121" fill="#FFDD00"/>
                </g>
                <defs>
                  <filter id="filter0_d" x="0" y="0" width="342" height="342" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="10"/>
                  <feGaussianBlur stdDeviation="25"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0616667 0 0 0 0 0.2 0 0 0 0 0.117 0 0 0 0.5 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                  </filter>
                  </defs>
                  </svg>
          </div>
            <div className="mainball">
             <svg width="544" height="544" viewBox="0 0 342 342" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<circle cx="171" cy="167" r="121" fill="#C4C4C4"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="342" height="342" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="25"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.301961 0 0 0 0 0.419608 0 0 0 0 0.72549 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>

           </div>
           <div className="lball">
             <svg width="342" height="342" viewBox="0 0 342 342" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<circle cx="171" cy="167" r="121" fill="white"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="342" height="342" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="25"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.301961 0 0 0 0 0.419608 0 0 0 0 0.72549 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>

           </div>
        </div>
        <div className="actions">
          <div className="options">
           <svg onClick={() => next("n")}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd"  clip-rule="evenodd" d="M21 0C21.7956 0 22.5587 0.316071 23.1213 0.87868C23.6839 1.44129 24 2.20435 24 3V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H3C2.20435 24 1.44129 23.6839 0.878681 23.1213C0.316071 22.5587 0 21.7956 0 21V3C0 2.20435 0.316071 1.44129 0.878681 0.87868C1.44129 0.316071 2.20435 0 3 0L21 0ZM11.469 15.969C11.3282 16.1098 11.2491 16.3008 11.2491 16.5C11.2491 16.6992 11.3282 16.8902 11.469 17.031C11.6098 17.1718 11.8008 17.2509 12 17.2509C12.1992 17.2509 12.3902 17.1718 12.531 17.031L17.031 12.531C17.1008 12.4613 17.1563 12.3786 17.1941 12.2874C17.2319 12.1963 17.2513 12.0987 17.2513 12C17.2513 11.9013 17.2319 11.8037 17.1941 11.7125C17.1563 11.6214 17.1008 11.5387 17.031 11.469L12.531 6.969C12.4613 6.89927 12.3785 6.84395 12.2874 6.80621C12.1963 6.76848 12.0986 6.74905 12 6.74905C11.9014 6.74905 11.8037 6.76848 11.7126 6.80621C11.6215 6.84395 11.5387 6.89927 11.469 6.969C11.3993 7.03873 11.344 7.12152 11.3062 7.21262C11.2685 7.30373 11.2491 7.40138 11.2491 7.5C11.2491 7.59862 11.2685 7.69627 11.3062 7.78738C11.344 7.87848 11.3993 7.96127 11.469 8.031L14.6895 11.25H7.5C7.30109 11.25 7.11032 11.329 6.96967 11.4697C6.82902 11.6103 6.75 11.8011 6.75 12C6.75 12.1989 6.82902 12.3897 6.96967 12.5303C7.11032 12.671 7.30109 12.75 7.5 12.75H14.6895L11.469 15.969Z" fill="#FFDD00"/>
</svg>
           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="7" cy="7" r="7" fill="#C4C4C4"/>
            </svg>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="7" cy="7" r="7" fill="#FFDD00"/>
            </svg>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="7" cy="7" r="7" fill="#C4C4C4"/>
            </svg>
           <svg onClick={() => next("p")}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 0C21.7956 0 22.5587 0.316071 23.1213 0.87868C23.6839 1.44129 24 2.20435 24 3V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H3C2.20435 24 1.44129 23.6839 0.878681 23.1213C0.316071 22.5587 0 21.7956 0 21V3C0 2.20435 0.316071 1.44129 0.878681 0.87868C1.44129 0.316071 2.20435 0 3 0L21 0ZM11.469 15.969C11.3282 16.1098 11.2491 16.3008 11.2491 16.5C11.2491 16.6992 11.3282 16.8902 11.469 17.031C11.6098 17.1718 11.8008 17.2509 12 17.2509C12.1992 17.2509 12.3902 17.1718 12.531 17.031L17.031 12.531C17.1008 12.4613 17.1563 12.3786 17.1941 12.2874C17.2319 12.1963 17.2513 12.0987 17.2513 12C17.2513 11.9013 17.2319 11.8037 17.1941 11.7125C17.1563 11.6214 17.1008 11.5387 17.031 11.469L12.531 6.969C12.4613 6.89927 12.3785 6.84395 12.2874 6.80621C12.1963 6.76848 12.0986 6.74905 12 6.74905C11.9014 6.74905 11.8037 6.76848 11.7126 6.80621C11.6215 6.84395 11.5387 6.89927 11.469 6.969C11.3993 7.03873 11.344 7.12152 11.3062 7.21262C11.2685 7.30373 11.2491 7.40138 11.2491 7.5C11.2491 7.59862 11.2685 7.69627 11.3062 7.78738C11.344 7.87848 11.3993 7.96127 11.469 8.031L14.6895 11.25H7.5C7.30109 11.25 7.11032 11.329 6.96967 11.4697C6.82902 11.6103 6.75 11.8011 6.75 12C6.75 12.1989 6.82902 12.3897 6.96967 12.5303C7.11032 12.671 7.30109 12.75 7.5 12.75H14.6895L11.469 15.969Z" fill="#FFDD00"/>
</svg>  
          </div>
          <button>Descubri como</button>
        </div>
    </section>
    
  );
}

export default Slider;
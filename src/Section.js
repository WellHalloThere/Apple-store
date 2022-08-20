import React from 'react'

export default function Section({title , className}) {
   return (
      <div>
         <section class={className}>
            <div className="container">
               <div class="title-wrapper bold black">{title}</div>
               <div class="price-wrapper grey">From $999.</div>
               <div class="links-wrapper">
                  <ul>
                     <li><a href="#">Learn More</a></li>
                     <li><a href="#">Order</a></li>
                  </ul>
               </div>                          
            </div>
         </section>
      </div>
   )
}


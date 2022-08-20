import React from 'react'
import { Button } from 'react-bootstrap'

export default function Header() {
   return (
      <div>
         <div>
            <div class="nav-wrapper fixed-top">
               <div class="container">
                  <nav class="navbar navbar-toggleable-sm navbar-expand-md">
                     <button
                        class="navbar-toggler navbar-toggler-tight"
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                     >
                        ☰
                     </button>
                     <a class="navbar-brand mx-auto" herf="#">
                        <i class="ri-apple-fill"></i>
                     </a>

                     <div class="navbar-collapse collapse">
                        <ul class="navbar-nav nav-justified w-100 nav-fill">
                           <li class="nav-item">
                              <a class="nav-link js-scroll-trigger" href="#">
                                 Mac
                              </a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link js-scroll-trigger" href="#">
                                 iPhone
                              </a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link js-scroll-trigger" href="#">
                                 iPad
                              </a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link js-scroll-trigger" href="#">
                                 Watch
                              </a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link js-scroll-trigger" href="#">
                                 TV
                              </a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link js-scroll-trigger" href="#">
                                 Music
                              </a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link js-scroll-trigger" href="#">
                                 Support
                              </a>
                              <li class="nav-item">
                                 <a class="nav-link js-scroll-trigger" href="/cart/">
                                    <i class="ri-handbag-line"></i>
                                 </a>
                              </li>
                           </li>
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
         </div>
      </div>
   )
}

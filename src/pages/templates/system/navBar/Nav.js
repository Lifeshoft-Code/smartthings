import React, { Fragment, useState} from 'react'
import { Link } from 'react-router-dom'
import NavStyle from '../../../../css/nav.module.css'

const Nav = () => {
 
   const [clickCategoryBar, setClick] = useState(false)
   const [clickMenuBtn, setClickMenuBtn] = useState(false)
   
   const handleClickCategoryBar = (e)=>{
       e.preventDefault();
        setClick(!clickCategoryBar)
    
   }
   const handleClickMenuBtn = (e)=>{
    e.preventDefault();
     setClickMenuBtn(!clickMenuBtn);
 
}
   
   

    return (
        
        <Fragment>
            <nav className={NavStyle.menu_container} id="main-menu">
                <div className={NavStyle.menu}>
                    <div className={NavStyle.menu_webname_container}>
                        <label className={NavStyle.menu_webname}>
                        Cleverly<span>living</span>
                        </label>
                    </div>
                    <div className={NavStyle.btn_menu_container} onClick={handleClickMenuBtn}  >
                        <div className={ clickMenuBtn ? NavStyle.btn_menu : NavStyle.btn_menu_close }  ></div>
                    </div>
                    <div className={ !clickMenuBtn ? NavStyle.menu_items_group : NavStyle.menu_items_group_hidden}>
                        <div className={NavStyle.menuBar}>
                            <ul className={NavStyle.menu_items_ul}>
                                <li className={NavStyle.menu_item_link_container}>
                                    <Link className={NavStyle.menu_item_link} to='/'>Home</Link>
                                </li>
                                <li className={NavStyle.menu_item_link_container}>
                                    <label  className={NavStyle.menu_item_link} onClick={handleClickCategoryBar} >Categoría</label>
                                    <svg className={!clickCategoryBar ? NavStyle.menu_item_arrow : NavStyle.menu_item_arrow_selected} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">{/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                                </li>
                                <li className={NavStyle.menu_item_link_container}>
                                    <Link className={NavStyle.menu_item_link} to='/about-us'>Ofertas</Link>
                                </li>
                                
                                <li className={NavStyle.menu_item_link_container}>
                                    <Link className={NavStyle.menu_item_link} to='/about-us'>Sign in</Link>
                                </li>
                                <li className={NavStyle.menu_item_link_container}>
                                    <Link className={NavStyle.menu_item_btn_signin }  to='/about-us'>Sign up</Link>
                                </li>
                               
                            </ul>
                        </div>
                        <div className={clickCategoryBar ? NavStyle.categoryBar : NavStyle.categoryBar_disable}>
                            <ul className={NavStyle.categoryBar_items}>
                                <li className={NavStyle.categoryBar_item}>
                                    <Link className={NavStyle.category_item_link} to='/'>Iluminación</Link>
                                    <svg className={NavStyle.category_item_arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">{/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                                </li>
                                
                                <li className={NavStyle.categoryBar_item}>
                                    <Link className={NavStyle.category_item_link} to='/about-us'>Sistemas de Seguridad</Link>
                                    <svg className={NavStyle.category_item_arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">{/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                                </li>
                                <li className={NavStyle.categoryBar_item}>
                                    <Link className={NavStyle.category_item_link} to='/about-us'>Patio y Jardín</Link>
                                    <svg className={NavStyle.category_item_arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">{/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                                </li>
                                <li className={NavStyle.categoryBar_item}>
                                    <Link className={NavStyle.category_item_link} to='/about-us'>Enchufes</Link>
                                    <svg className={NavStyle.category_item_arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">{/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                                </li>
                                <li className={NavStyle.categoryBar_item}>
                                    <Link className={NavStyle.category_item_link} to='/'>Calefacción y Refrigeración</Link>
                                    <svg className={NavStyle.category_item_arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">{/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                                </li>
                                <li className={NavStyle.categoryBar_item}>
                                    <Link className={NavStyle.category_item_link} to='/contact'>Asistentes de Voz</Link>
                                    <svg className={NavStyle.category_item_arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">{/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                                </li>
                                <li className={NavStyle.categoryBar_item}>
                                    <Link className={NavStyle.category_item_link} to='/about-us'>Entretenimiento del Hogar</Link>
                                    <svg className={NavStyle.category_item_arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">{/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                                </li>
                                <li className={NavStyle.categoryBar_item}>
                                    <Link className={NavStyle.category_item_link} to='/about-us'>Cocina</Link>
                                    <svg className={NavStyle.category_item_arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">{/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                                </li>
                               
                                <li className={NavStyle.categoryBar_item}>
                                    <Link className={NavStyle.category_item_link} to='/about-us'>Redes y Wifi</Link>
                                    <svg className={NavStyle.category_item_arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">{/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                                </li>
                                
                               
                            </ul>
                        </div>

                    </div>

                </div>
            </nav>
           
        </Fragment>
    )
}

export default Nav
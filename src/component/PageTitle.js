import React from 'react'
import style from '../styles/modules/title.module.scss';

function PageTitle({children}) {
  return (
    
        <p className={style.title}>{children}</p>
    
  )
}

export default PageTitle
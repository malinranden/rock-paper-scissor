import style from './Intro.module.scss'
import cloud1 from '../../assets/images/intro/1.svg'
import cloud2 from '../../assets/images/intro/2.svg'
import cloud3 from '../../assets/images/intro/3.svg'
import cloud4 from '../../assets/images/intro/4.svg'
import cloud5 from '../../assets/images/intro/5.svg'
import cloud6 from '../../assets/images/intro/6.svg'
import cloud7 from '../../assets/images/intro/7.svg'
import cloud8 from '../../assets/images/intro/8.svg'
import cloud9 from '../../assets/images/intro/9.svg'

function Intro() {

    return (
        <div>
            <div className={style.intro}>
                <div className={style.grid}>

                    <div className={`
                        ${style["grid-title"]}
                        ${style["cloud--back"]}`}>
                        <h1 className={`
                            ${style["grid-title--h1"]}`}>
                            Rock Paper Scissor
                        </h1>
                    </div>

                    {/* Top left */}
                    <div className={`
                        ${style["cloud-a1"]} 
                        ${style["cloud--back"]}`} >
                        <img 
                            src={cloud4} 
                            className={`
                                ${style.cloud}
                                ${style["cloud--img-a1"]}
                            `} 
                            alt=" " 
                        />
                    </div>
                    <div className={`
                        ${style["cloud-a2"]} 
                        ${style["cloud--mid"]}`} >
                        <img 
                            src={cloud6} 
                            className={`
                                ${style.cloud} 
                                ${style["cloud--img-a2"]}
                            `}  
                            alt="" 
                        />
                    </div>
                    <div className={`
                        ${style["cloud-a3"]} 
                        ${style["cloud--front"]}`} >
                        <img 
                            src={cloud9} 
                            className={`
                                ${style.cloud} 
                                ${style["cloud--img-a3"]}
                            `} 
                            alt=""  
                        />
                    </div>
                    
                    {/* Top Right */}
                    <div className={`
                        ${style["cloud-b1"]} 
                        ${style["cloud--back"]}`} >
                        <img 
                            src={cloud7} 
                            className={`
                                ${style.cloud} 
                                ${style["cloud--img-b1"]}
                            `} 
                            alt="" 
                        />
                    </div>
                    <div className={`
                        ${style["cloud-b2"]} 
                        ${style["cloud--front"]}`} >
                        <img 
                            src={cloud5} 
                            className={`
                                ${style.cloud} 
                                ${style["cloud--img-b2"]}
                            `} 
                            alt=""
                        />
                    </div>

                    {/* Mid Left */}
                    <div className={`
                        ${style["cloud-c1"]} 
                        ${style["cloud--front"]}`} >
                        <img 
                            src={cloud2} 
                            className={`
                                ${style.cloud} 
                                ${style["cloud--img-c1"]}
                            `} 
                            alt=""
                        />
                    </div>
                    <div className={`
                        ${style["cloud-c2"]} 
                        ${style["cloud--front"]}`} >
                        <img 
                            src={cloud6} 
                            className={`
                                ${style.cloud} 
                                ${style["cloud--img-c2"]}
                            `} 
                            alt=""
                        />
                    </div>

                    {/* Mid Right */}
                    <div className={`
                        ${style["cloud-d1"]} 
                        ${style["cloud--front"]}`} >
                        <img 
                            src={cloud9} 
                            className={`
                                ${style.cloud} 
                                ${style["cloud--img-d1"]}
                            `} 
                            alt=""
                        />
                    </div>
                    <div className={`
                        ${style["cloud-d2"]} 
                        ${style["cloud--back"]}`} >
                        <img 
                            src={cloud4} 
                            className={`
                                ${style.cloud}
                                ${style["cloud--img-d2"]}
                            `} 
                            alt=" " 
                        />
                    </div>

                    {/* Bottom Left */}
                    <div className={`
                        ${style["cloud-e1"]} 
                        ${style["cloud--back"]}`} >
                        <img 
                            src={cloud4} 
                            className={`
                                ${style.cloud} 
                                ${style["cloud--img-e1"]}
                            `} 
                            alt=""
                        />
                    </div>
                    <div className={`
                        ${style["cloud-e2"]} 
                        ${style["cloud--front"]}`} >
                        <img 
                            src={cloud8} 
                            className={`
                                ${style.cloud} 
                                ${style["cloud--img-e2"]}
                            `} 
                            alt=""
                        />
                    </div>

                    {/* Bottom Right */}
                    
                    <div className={`
                        ${style["cloud-f1"]} 
                        ${style["cloud--back"]}`} >
                        <img 
                            src={cloud3} 
                            className={`
                                ${style.cloud} 
                                ${style["cloud--img-f1"]}
                            `} 
                            alt=""
                        />
                    </div>
                    
                    <div className={`
                        ${style["cloud-f2"]} 
                        ${style["cloud--mid"]}`} >
                        <img 
                            src={cloud7} 
                            className={`
                                ${style.cloud} 
                                ${style["cloud--img-f2"]}
                            `} 
                            alt=""
                        />
                    </div>
                    <div className={`
                        ${style["cloud-center"]} 
                        ${style["cloud--front"]}`} >
                        <img 
                            src={cloud8} 
                            className={`
                                ${style.cloud} 
                                ${style["cloud--img-center"]}
                            `} 
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro

import css from '../StartPage/StartPage.scss'
// import Link from 'next/link'

export const StartPage = () => {

    return (
        <>
            
            <div className={`${css.maxH}`}>
                <div className={`${css.centerLogo} `}>
                <i className={`material-icons ${css.matI2}`}>reorder</i>
                    Grammerhood
                </div>
                <div className={`${css.centerTex} ${css.h55p}`}><h2>Are you ready,</h2> <h4>for treat of time?</h4></div>
                <div className={`${css.center} ${css.h25p}`}><a href="/signup"><button className={`${css.button}`}>Ready?</button></a></div>
                
                {/* <div className={`${css.h15p} ${css.footer}`}>
                    <i className={`material-icons ${css.matI}`}>reorder</i>
                    <i className={`material-icons ${css.matI}`}>nothing</i>
                    <i className={`material-icons ${css.matI2}`}>reorder</i>
                </div> */}
            </div>

        </>
    )

}

export default StartPage;
import css from '../StartPage/StartPage.scss'
// import Link from 'next/link'

export const ThankYou = () => {

    return (
        <>
            <div className={`${css.maxH}`}>
                <div className={`${css.centerPurple} `}>
                    THANK YOU
                </div>
                <div className={`${css.centerOrange} `}>ASHLEY!</div>
                <div className={`${css.centerTex} ${css.h25p}`}>
                    <h4>
                        Your neighborhood has set up a fundraiser to help fight hunger in your backyard
                        <br></br>
                        <br></br>
                    </h4>
                </div>
                <div className={`${css.center} ${css.h25p}`}><a href="/signup"><button className={`${css.button}`}>Continue!</button></a></div>
                
            </div>

        </>
    )

}

export default ThankYou;
export const StatPage = ({onGood, onNeutral,onBad,onTotal,onPositive}) => {
    return (<div>
                
        <h2>STATISTICS</h2><p>good:{onGood}</p><p>neutral:{onNeutral}</p><p>bad:{onBad}</p><p>TOTAL:{onTotal}</p><p>positive feedback:{onPositive}</p>
            </div>
        
    )
}
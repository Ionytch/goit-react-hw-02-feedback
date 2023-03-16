import { StatisticsItem, Statisticstext } from "./Statistics.styled"

export const StatPage = ({onGood, onNeutral,onBad,onTotal,onPositive}) => {
    return (
        
        
        <StatisticsItem>
                
        <Statisticstext>good:{onGood}</Statisticstext><Statisticstext>neutral:{onNeutral}</Statisticstext><Statisticstext>bad:{onBad}</Statisticstext><Statisticstext>TOTAL:{onTotal}</Statisticstext><Statisticstext>positive feedback:{onPositive}</Statisticstext>
            </StatisticsItem>
        
    )
}
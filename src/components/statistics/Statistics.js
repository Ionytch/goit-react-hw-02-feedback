import { StatisticsItem, Statisticstext, StatisticsTitle } from "./Statistics.styled"

export const StatPage = ({onGood, onNeutral,onBad,onTotal,onPositive}) => {
    return (<StatisticsItem>
                
        <StatisticsTitle>STATISTICS</StatisticsTitle><Statisticstext>good:{onGood}</Statisticstext><Statisticstext>neutral:{onNeutral}</Statisticstext><Statisticstext>bad:{onBad}</Statisticstext><Statisticstext>TOTAL:{onTotal}</Statisticstext><Statisticstext>positive feedback:{onPositive}</Statisticstext>
            </StatisticsItem>
        
    )
}
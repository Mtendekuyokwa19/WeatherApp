/* eslint-disable no-unused-vars */
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { TemperatureSetting } from '.'

export let daysOfweek=(()=>{
 function DaysManagement() {
    let currentDay=format(new Date(), 'eeee')
    TemperatureSetting.Day.textContent=currentDay

    let tommorow=format(new Date()+1, 'eeee')

    let theNextDay=format(new Date()+2, 'eeee')

    let theOtherdays=format(new Date()+3, 'eeee')
    
}

return{DaysManagement} 

})()
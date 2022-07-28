export default function useDate(){
    function toLocale(date: string){
        const day = (parseInt(date.slice(8, 10)))
        const month = date.slice(5, 7)
        const year = date.slice(0, 4)
        const newDate = `${month}/${day}/${year}`
        return new Date(newDate)
    }
    function getWeekday(date: string){
        const weekDay = toLocale(date).getDay()
        return isNaN(weekDay) ? null : 
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][weekDay]  
    }
    function getSeason(month: number) {
        if (3 <= month && month <= 5) {
            return 'spring';
        }
    
        if (6 <= month && month <= 8) {
            return 'summer';
        }
    
        if (9 <= month && month <= 11) {
            return 'fall';
        }
        return 'winter';
    }
    const currentMonth = new Date().getMonth()
    const currentSeason = getSeason(currentMonth)
    const currentYear = new Date().getFullYear()
    return {
        getWeekday,
        toLocale,
        currentMonth,
        currentSeason,
        currentYear
    }
}

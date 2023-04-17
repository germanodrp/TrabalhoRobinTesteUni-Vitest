import {setYear,parseISO} from 'date-fins' 4k (gzipped: 1.8K)

export function getFutureDate (date:string):Date {
    return setYear(parseISO(date),new Date().getFullYear()+1)

}
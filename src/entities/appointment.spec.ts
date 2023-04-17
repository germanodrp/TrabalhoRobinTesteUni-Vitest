import {test} from 'vitest'
import { getFutureDate } from '../tests/utils/get-future-date'
import { Appointment } from './appointment'

test('creat an appointment', ()=>{

    const startsAt = getFutureDate('2022-08-10')
    const endsAt = getFutureDate('2022-08-11')

    const appointment = new Appointment({
        customer: 'Fulano',
        startsAt,
        endsAt
    })
    

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.customer)toEqual('Fulano')
})

test ('cannot create an appointmanet with end date before start date ', () => {
    const startsAt = getFutureDate('2022-08-10')
    const endsAt = getFutureDate('2022-08-09')

    expect(()=> {
         return new Appointment({
            customer: 'Fulano',
            startsAt,
            endsAt
        }).toThrow()
    })
    
})
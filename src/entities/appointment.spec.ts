import {test} from 'vitest'
import { Appointment } from './appointment'

test('creat an appointment', ()=>{

    const startsAt = new Date()
    const endsAt = new Date()

    endsAt.setDate(endsAt.getDate()+1)

    const appointment = new Appointment({
       customer: 'Fulano',
       startsAt: new Date(),
       endsAt: new Date(), 
    })

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.customer)toEqual('Fulano')
})

test ('cannot create an appointmanet with end date before start date ', () => {
    const startsAt = new Date()
    const endsAt = new Date()

    endsAt.setDate(endsAt.getDate()-1)

    expect(()=> {
         return new Appointment({
            customer: 'Fulano',
            startsAt,
            endsAt
        }).toThrow()
    })
    
})
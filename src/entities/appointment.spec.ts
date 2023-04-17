import {test} from 'vitest'
import { Appointment } from './appointment'

test('creat an appointment', ()=>{

    const startsAt = new Date()
    const endsAt = new Date()

    startsAt.setDate(startsAt.getDate()+1)
    endsAt.setDate(endsAt.getDate()+2)

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

    startsAt.setDate(startsAt.getDate()+2)
    endsAt.setDate(endsAt.getDate()+1)

    expect(()=> {
         return new Appointment({
            customer: 'Fulano',
            startsAt,
            endsAt
        }).toThrow()
    })
    
})
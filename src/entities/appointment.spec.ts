import {test} from 'vitest'
import { Appointment } from './appointment'

test('creat an appointment', ()=>{
    const appointment = new Appointment({
       customer: 'Fulano',
       startsAt: new Date(),
       endsAt: new Date(), 
    })

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.customer)toEqual('Fulano')
})
import { describe } from 'vitest';
import { Appointment } from '../entities/appointment';
import { CreateAppointment } from './create-appointment';

describe('Create Appointment', () =>{
    it('should be able to create an appointment',()=>{
        const createAppointment = new CreateAppointment()

        const startsAt = new Date()
        const endsAt = new Date()

        startsAt.setDate(startsAt.getDate() +1)
        endsAt.setDate(endsAt.getDate() +3)

        expect(createAppointment.execute({
            customer: 'Fulano',
            startsAt,
            endsAt,
        })).resolves.toBeInstanceOf(Appointment)
    });
})
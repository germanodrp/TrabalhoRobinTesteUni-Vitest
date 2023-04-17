import { getFutureDate } from "./get-future-date";
import {expect,test} from "./get-future-date"

it {test} from "vitest";

test('increases date with one year', () =>{

    const year = new Date().getFullYear()

    expect(getFutureDate(`${year}-08-10`).getFullYear().toEqual(2023))
})
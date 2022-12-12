import { map, Observable } from "rxjs"
import { DataResponse } from "./app.service"

export const mapRxJs =  () => (source$: Observable<DataResponse[]>) => source$.pipe(map(res => res.map(item => item.name)))
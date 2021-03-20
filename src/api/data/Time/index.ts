import api from "../../index";
import {ITime} from "../../../interfaces/Time.Interface";

class TimeData{
    index(){
        return api.get<ITime[]>('time');
    }
    delete(id:number){
        return api.delete<ITime>(`time/${id}`);
    }
    store(data: ITime) {
        return api.post<ITime>(`time`, data);
    }
    update(id: number, data: ITime) {
        return api.put<ITime>(`time/${id}`, data);
    }   
    show(id: number) {
        return api.get<ITime>(`time/${id}`);
    }
}

export default new TimeData;
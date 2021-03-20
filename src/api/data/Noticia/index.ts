import api from "../../index";
import {INoticia} from "../../../interfaces/Noticia.Interface";

class NoticiaData{
    show(NoticiaId: Number){
        return api.get<INoticia>(`noticia/${NoticiaId}`);
    }
    update(id: number, data: INoticia) {
        return api.put<INoticia>(`noticia/${id}`, data);
    }
    store(data: INoticia) {
        return api.post<INoticia>(`noticia`, data);
      }
    index() {
        return api.get<INoticia[]>('noticia');
    }
    delete(id: number) {
        return api.delete<INoticia>(`noticia/${id}`);
    }
}

export default new NoticiaData;
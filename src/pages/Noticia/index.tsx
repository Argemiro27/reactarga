import { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Loading } from "../../components";
import { FaPlusCircle, FaPencilAlt } from "react-icons/fa";
import { apiNoticia } from "../../api/data";
import { INoticia } from "../../interfaces/Noticia.Interface";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import { Button } from "styles";
import * as S from "./styles";

const Noticia = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [noticias, setNoticias] = useState<INoticia[]>([]);
  const history = useHistory();

  const fetchData = async () => {
    const response = await apiNoticia.index();
    setNoticias(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      toast.error(error);
    }
  }, []);

  const handleDelete = useCallback(async (id: number) => {
    confirmAlert({
      title: "Atenção",
      message: "Tem certeza que deseja apagar o item selecionado?",
      buttons: [
        {
          label: "SIM",
          onClick: async () => {
            await apiNoticia.delete(id);
            toast.success("Noticia removido!");
            fetchData();
          },
        },
        {
          label: "NÃO",
          onClick: () => console.log("não"),
        },
      ],
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Button bgColor="success" onClick={() => history.push("/Noticia/0")}>
            <FaPlusCircle /> &nbsp; Adicionar
          </Button>
          <S.Table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Time</th>
                <th>Descrição</th>
                <th>Editar</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              {noticias &&
                noticias.map((item) => (
                  <tr key={item.id}>
                    <td>{item.titulo}</td>
                    <td>{item.time.nome}</td>
                    <td>{item.descricao}</td>
                    <td>
                      <Button
                        bgColor="primary"
                        onClick={() => history.push(`noticia/${item.id}`)}
                      >
                        <FaPencilAlt />
                      </Button>
                    </td>
                    <td>
                      <Button
                        bgColor="danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        <FaPencilAlt />
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </S.Table>
        </>
      )}
    </>
  );
};
export default Noticia;
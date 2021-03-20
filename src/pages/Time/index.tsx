import { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Loading } from "../../components";
import { FaPlusCircle, FaPencilAlt } from "react-icons/fa";
import { apiTime } from "../../api/data";
import { ITime } from "../../interfaces/Time.Interface";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import { Button } from "../../styles";
import * as S from "./styles";

const Time = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [times, setTimes] = useState<ITime[]>([]);
  const history = useHistory();

  const fetchData = async () => {
    const response = await apiTime.index();
    setTimes(response.data);
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
            await apiTime.delete(id);
            toast.success("Time removido!");
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
          <Button bgColor="success" onClick={() => history.push("/time/0")}>
            <FaPlusCircle /> &nbsp; Adicionar
          </Button>
          <S.Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Editar</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              {times &&
                times.map((item) => (
                  <tr key={item.id}>
                    <td>{item.nome}</td>
                    <td>
                      <Button
                        bgColor="primary"
                        onClick={() => history.push(`time/${item.id}`)}
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
export default Time;
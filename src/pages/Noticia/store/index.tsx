import { useEffect, useState, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaHandPointLeft, FaSave } from "react-icons/fa";
import { toast } from "react-toastify";
import { apiNoticia, apiTime } from "api/data";
import { Loading } from "components";
import { Input, Button, Form, Link, Select, Textarea } from "styles";
import { INoticia } from "interfaces/Noticia.Interface";
import { ITime } from "interfaces/Time.Interface";

const NoticiaStore = () => {
  const [noticia, setNoticia] = useState<INoticia>({} as INoticia);
  const [time, setTime] = useState<ITime[]>({} as ITime[]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { handleSubmit, register, errors } = useForm();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await apiTime.index();
        setTime(response.data);
      } catch (error) {
        toast.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTime();
    if (Number(id) > 0) {
      const fetchData = async (id: number) => {
        try {
          const response = await apiNoticia.show(id);
          setNoticia(response.data);
        } catch (error) {
          toast.error(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData(Number(id));
    } else {
      setIsLoading(false);
    }
  }, [id]);

  const handleChange = useCallback(
    async (e) => {
      setNoticia({ ...noticia, [e.target.name]: e.target.value });
    },
    [noticia]
  );

  const onSubmit = useCallback(
    async (data) => {
      try {
        if (data.id > 0) {
          await apiNoticia.update(data.id, data);
          toast.success("Noticia Alterada com sucesso!");
        } else {
          await apiNoticia.store(data);
          toast.success("Noticia Cadastrada com sucesso!");
        }
        history.push("/noticia");
      } catch (error) {
        toast.error(() =>
          error.response.data ? error.response.data.join("\n") : error.message
        );
      }
    },
    [history]
  );
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Link onClick={() => history.push("/noticia")} bgColor="warning">
            <FaHandPointLeft /> &nbsp; Voltar
          </Link>
          <Form method="POST" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="id" value={id || ""} ref={register} />
            <div>
              <label htmlFor="time">Time: </label>
              <Select
                name="time_id"
                id="time"
                value={noticia.time_id || ""}
                onChange={handleChange}
                ref={register({ required: true })}
                required
                error={errors.nome}
              >
                <option></option>
                {time.length > 0 &&
                  time.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nome}
                    </option>
                  ))}
              </Select>
            </div>
            <div>
              <label htmlFor="titulo">Título: </label>
              <Input
                type="text"
                name="titulo"
                id="titulo"
                value={noticia.titulo || ""}
                onChange={handleChange}
                ref={register({ required: true })}
                required
                error={errors.nome}
              />
            </div>
            <div>
              <label htmlFor="descricao">Descrição: </label>
              <Textarea
                name="descricao"
                id="descricao"
                value={noticia.descricao || ""}
                onChange={handleChange}
                ref={register({ required: true })}
                required
                error={errors.descricao}
              />
            </div>
            <Button bgColor="success" type="submit">
              <FaSave /> &nbsp; Salvar
            </Button>
          </Form>
        </>
      )}
    </>
  );
};
export default NoticiaStore;
import {useEffect, useState} from "react";

import {FaHome} from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { apiTime } from "../../api/data";
import {ITime} from "../../interfaces/Time.Interface";
import {Link} from "../../styles";
import {Container} from "./styles";


const Header = () => {
    const history = useHistory();
    const [times,setTimes] = useState<ITime[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await apiTime.index();
          setTimes(response.data);
        };
        fetchData();
      }, []);

    return (
        <Container className="container">
            <FaHome onClick={() => history.push("/")} />
            {times && times.map((item)=>(
                <Link key={item.id} href={`${item.id}`}>
                    {item.nome}
                </Link>
            ))}
        </Container>
    );
}

export default Header;
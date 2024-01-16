import { useParams } from "react-router-dom";

interface RouterParams {
  id: string;
}

function Detail() {
  const { id } = useParams<RouterParams>();
  return <h1>{id}</h1>;
}
export default Detail;

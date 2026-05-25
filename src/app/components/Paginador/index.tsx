
import "./styles.css";

const Paginador = ({
  next,
  prev,
  page,
  setPage,
}: {
  next: boolean;
  prev: boolean;
  page: number;
  setPage: (page: number) => void;
}) => {
  return (
    <div className="paginador">
      {prev && (
        <button onClick={() => setPage(page - 1)}>{"<"}</button>
      )}

      <span>{page}</span>

      {next && (
        <button onClick={() => setPage(page + 1)}>{">"}</button>
      )}
    </div>
  );
};

export default Paginador;

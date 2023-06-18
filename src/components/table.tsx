export const Table = ({
  image,
  title,
  list,
  header,
}: {
  image: React.ReactNode;
  title: String;
  list: Array<any>;
  header: Array<string>;
}) => {
  return (
    <div className="w-color pt20  ">
      <div className="d-flex g20 align-items-center mb10">
        <div>{image}</div>
        <div className="thicker">{title}</div>
      </div>
      <div className="mbr br10">
        <div className="d-flex">
          {header.map((data: any, index: number) => {
            return (
              <div key={index} className="w-100 mb10 p10 c-first-letter">
                {data}
              </div>
            );
          })}
        </div>
        {list.map((data: any, index: number) => {
          return (
            <div
              className={
                index % 2 === 0
                  ? "item d-flex odd p10 "
                  : "item d-flex even p10"
              }
              key={index}
            >
              {header.map((data2: any, index1: number) => {
                return (
                  <div
                    className={
                      data.state !== undefined
                        ? data.state === 1
                          ? "w-100 c-first-letter g-color"
                          : "w-100 c-first-letter r-color"
                        : "w-100 c-first-letter"
                    }
                    key={index1}
                  >
                    {data.no === undefined
                      ? data[data2]
                      : data[data2] === -1
                      ? index + 1
                      : data[data2]}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

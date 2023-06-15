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
    <div className="w-color p20">
      <div className="d-flex g20  mb10">
        <div>{image}</div>
        <div>{title}</div>
      </div>
      <div>
        <div className="d-flex">
          {header.map((data: any, index: number) => {
            return (
              <div key={index} className="w-100 mb10">
                {data}
              </div>
            );
          })}
        </div>
        {list.map((data: any, index: number) => {
          return (
            <div
              className={
                index % 2 === 0 ? "item d-flex odd p10" : "item d-flex even p10"
              }
              key={index}
            >
              {header.map((data2: any, index: number) => {
                return (
                  <div className="w-100" key={index}>
                    {data[data2]}
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

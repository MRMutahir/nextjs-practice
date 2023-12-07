export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const jsonData = await res.json();

  return {
    props: {
      status: "ok",
      jsonData,
    },
  };
}

function index(props) {
  // console.log(props.jsonData, ">>>>>props");
  const propsdata = props.jsonData;
  // propsdata.forEach((element) => {

  // });

  return (
    <div>
      <ul>
        {propsdata.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default index;

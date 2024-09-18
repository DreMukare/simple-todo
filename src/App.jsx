import Todo from "./components/page/Todo";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todo />
    </QueryClientProvider>
  );
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1 className="text-3xl text-center font-bold underline text-red-500 ">
//           The count is {this.state.count}
//         </h1>
//         <button
//           className="px-4 py-2 bg-red-600"
//           onClick={() => {
//             this.setState((prevState) => ({ count: prevState.count + 1 }));
//           }}
//         >
//           Increase Count
//         </button>
//       </div>
//     );
//   }
// }

export default App;

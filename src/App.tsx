import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import NavBar from './components/NavBar';
import IndexPage from './pages/IndexPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <IndexPage />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;

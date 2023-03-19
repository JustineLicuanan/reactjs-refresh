import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import IndexPage from './pages/IndexPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IndexPage />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;

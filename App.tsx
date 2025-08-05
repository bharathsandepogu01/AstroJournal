import AppThemeProvider from '@components/AppThemeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppNavigation from '@navigation/AppNavigation';

const queryClient = new QueryClient({
  defaultOptions: {
    // queries: {
    //   refetchOnWindowFocus: false,
    //   refetchOnMount: false,
    //   refetchOnReconnect: false,
    // },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <AppNavigation />
      </AppThemeProvider>
    </QueryClientProvider>
  );
}

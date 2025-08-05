import AppThemeProvider from '@components/AppThemeProvider';
import AppNavigation from '@navigation/AppNavigation';

export default function App() {
  return (
    <AppThemeProvider>
      <AppNavigation />
    </AppThemeProvider>
  );
}

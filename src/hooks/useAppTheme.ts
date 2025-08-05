import { useContext } from 'react';
import { AppThemeContext } from '@components/AppThemeProvider';

export default function useAppTheme() {
  const appThemeContext = useContext(AppThemeContext);

  if (!appThemeContext) {
    throw new Error('useAppTheme must be used within an AppThemeProvider');
  }

  return appThemeContext;
}

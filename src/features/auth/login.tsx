import { LoginForm } from 'wasp/client/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { useTheme } from '../../hooks/use-theme';

export function Login() {
  const { colors } = useTheme();

  return (
    <div className='flex items-center justify-center min-h-screen bg-primary-foreground'>
      <Card className='w-full max-w-md'>
        <CardContent>
          <LoginForm
            appearance={{
              colors,
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}

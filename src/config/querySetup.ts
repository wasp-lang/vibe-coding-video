import { configureQueryClient } from 'wasp/client/operations';
import { handleServerError } from '../features/errors/handle-server-error';
import { toast } from '../hooks/use-toast';
import { AxiosError } from 'axios';
import { redirect } from 'react-router-dom';
import { logout } from 'wasp/client/auth';
import { routes } from 'wasp/client/router';
import { QueryCache } from '@tanstack/react-query';

export default async function clientSetup(): Promise<void> {
  configureQueryClient({
    defaultOptions: {
      queries: {
        retry: (failureCount, error) => {
          // eslint-disable-next-line no-console
          if (import.meta.env.DEV) console.log({ failureCount, error });

          if (failureCount >= 0 && import.meta.env.DEV) return false;
          if (failureCount > 3 && import.meta.env.PROD) return false;

          return !(error instanceof AxiosError && [401, 403].includes(error.response?.status ?? 0));
        },
        refetchOnWindowFocus: import.meta.env.PROD,
        staleTime: 10 * 1000, // 10s
      },
      mutations: {
        onError: (error) => {
          handleServerError(error);

          if (error instanceof AxiosError) {
            if (error.response?.status === 304) {
              toast({
                variant: 'destructive',
                title: 'Content not modified!',
              });
            }
          }
        },
      },
    },
    queryCache: new QueryCache({
      onError: (error: unknown) => {
        if (error instanceof AxiosError) {
          if (error.response?.status === 401) {
            toast({
              variant: 'destructive',
              title: 'Session expired!',
            });
            logout();
            redirect(routes.LoginRoute.to);
          }
          if (error.response?.status === 500) {
            toast({
              variant: 'destructive',
              title: 'Internal Server Error!',
            });
            redirect(routes.GeneralErrorRoute.to);
          }
          if (error.response?.status === 403) {
            toast({
              variant: 'destructive',
              title: 'Forbidden!',
            });
            redirect(routes.ForbiddenRoute.to);
          }
          if (error.response?.status === 404) {
            toast({
              variant: 'destructive',
              title: 'Not Found!',
            });
            redirect(routes.NotFoundRoute.to);
          }
          if (error.response?.status === 401) {
            toast({
              variant: 'destructive',
              title: 'Unauthorized!',
            });
            redirect(routes.UnauthorizedRoute.to);
          }
          if (error.response?.status === 503) {
            toast({
              variant: 'destructive',
              title: 'Maintenance!',
            });
            redirect(routes.MaintenanceRoute.to);
          }
        }
      },
    }),
  });
};

import type { MiddlewareConfigFn } from 'wasp/server';

import express from 'express';

export const serverMiddlewareFn: MiddlewareConfigFn = (middlewareConfig) => {
  middlewareConfig.set('express.json', express.json({ limit: '50mb' }));
  return middlewareConfig;
};

import { rest } from 'msw';
import { responseDataForMovie } from './responseData';


export const handlers = [
  rest.get('*/movie/*', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json(responseDataForMovie()),
    ),
  ),
];

export const defaultHandlers = [
  rest.get('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.post('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.patch('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.put('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.delete('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
];


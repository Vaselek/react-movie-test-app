import { rest } from 'msw';
import {
  responseDataForMovie,
  responseDataForCast,
  responseDataForTrendingMovie,
  responseDataForPopularMovie
} from './responseData';


export const handlers = [
  rest.get('*/movie/*/credits', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json(responseDataForCast()),
    ),
  ),
  rest.get('*/movie/popular', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        results: [
          responseDataForPopularMovie()
        ]
      })
    )
  ),
  rest.get('*/movie/*', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json(responseDataForMovie()),
    ),
  ),
  rest.get('*/search/movie*', (req, res, ctx) =>
     res(
      ctx.status(200),
      ctx.json({
        results: [
          responseDataForMovie()
        ]
      })
    )
  ),
  rest.get('*/trending/all/day', (req, res, ctx) =>
     res(
      ctx.status(200),
      ctx.json({
        results: [
          responseDataForTrendingMovie()
        ]
      })
    )
  ),
];

export const defaultHandlers = [
  rest.get('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.post('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.patch('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.put('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.delete('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
];


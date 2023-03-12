import { RequestFunction } from './types';
import { toSnakeCase } from './utils';

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
};

const snakeCasefyKeysOf = (body: unknown) => {
    if (typeof body === 'object' && body !== null && !Array.isArray(body)) {
        return Object.fromEntries(
            Object.entries(body).map(([key, value]) => [toSnakeCase(key), value])
        );
    }

    return body;
};

export const createRequest = <Params, Response>(
    url: string,
    method: string
): RequestFunction<Params, Response> => {
    return async (body?, headers?) => {
        const fetchInitOptions: RequestInit = {
            method,
            headers: {
                ...DEFAULT_HEADERS,
                ...headers,
            },
            ...(typeof body !== 'undefined' && { body: JSON.stringify(snakeCasefyKeysOf(body)) }),
        };

        console.log(`Going to fetch ${url} with following params ${JSON.stringify(fetchInitOptions)}`);

        const result = await fetch(url, fetchInitOptions);

        const resultJson = await result.json();

        console.log(`Has received on ${url} request following body ${JSON.stringify(resultJson)}`);

        return resultJson;
    };
};

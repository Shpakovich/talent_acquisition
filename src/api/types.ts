export interface ApiResponse<T> {
    result: boolean;
    error: string | null;
    data: T;
    status: number;
}

export type RequestFunction<Params, Response> = (
    ...args: Params extends undefined
        ? [body?: undefined, headers?: Record<string, string>]
        : [body: KeysToCamelCase<Params>, headers?: Record<string, string>]
) => Promise<ApiResponse<Response>>;

export interface ApiContract {
    params: unknown;
    response: unknown;
}

export type ApiMethod<T extends ApiContract> = RequestFunction<T['params'], T['response']>;

export type CamelCase<S extends string> = S extends `${infer P1}_${infer P2}${infer P3}`
    ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
    : Lowercase<S>;

export type KeysToCamelCase<T> = {
    [K in keyof T as CamelCase<string & K>]: T[K];
};

export type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
    ? `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${CamelToSnakeCase<U>}`
    : S;

export type KeysToSnakeCase<T> = {
    [K in keyof T as CamelToSnakeCase<string & K>]: T[K];
};

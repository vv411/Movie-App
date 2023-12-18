import { beforeAll, describe, expect, expectTypeOf, test } from 'vitest';
import { fetchPopularMovies } from '../apis/themoviedb/fetch_themoviedb';
import { fetchMovieById } from '../apis/themoviedb/fetch_themoviedb';
import config from '../apis/themoviedb/config_themoviedb';

describe('Test fetching popular movies', () => {
    let body: Array<{ [key: string]: unknown }>;

    beforeAll(async () => {
    await fetchPopularMovies()
    .then (body => body);
    });

    test('Should be an array', () => {
        expectTypeOf(body).toBeArray();
    });

});

describe('Test fetching an existing movie by Id works as expected', () => {
    //let body: Array<{ [key: string]: unknown }>;
    let body: object;

    beforeAll(async () => {
        await fetchMovieById("507089")
        .then (body => body);
    });

    test('Should be an Object', () => {
        expectTypeOf(body).toBeObject();
    });
});
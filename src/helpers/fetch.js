import { BASE_URL } from 'configs';

export default class Fetch {
    static async fetch(options) {
        const { ACCESS_TOKEN } = sessionStorage;
        const { headers, method, body, path } = options;

        let requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: (ACCESS_TOKEN
                    ? `Bearer ${ACCESS_TOKEN}`
                    : undefined
                ),
                ...headers,
            },
            method,
        };

        if (body) {
            requestOptions.body = JSON.stringify(body);
        }

        // Fire the Request and Return the response promise Object
        const requestPromise = await fetch(new Request(`${BASE_URL}${path}`, requestOptions));

        if (requestPromise && requestPromise.status) {
            // Check ::: it can be not json, for example text/html
            return requestPromise.text().then(text => text
                ? JSON.parse(text)
                : body
            );
        }
        return body;
    }

    /* GET (retrieve) */
    static get = options => Fetch.fetch({ ...options, method: 'GET' });

    /* POST (create) */
    static post = options => Fetch.fetch({ ...options, method: 'POST' });

    /* PUT (update) */
    static put = options => Fetch.fetch({ ...options, method: 'PUT' });;

    /* DELETE (remove) */
    static delete = options => Fetch.fetch({ ...options, method: 'DELETE' });
}

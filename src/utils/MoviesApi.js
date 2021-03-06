class MoviesApi {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    _showErrow(res) {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        Promise.reject(new Error(`Ошибка: ${res.status}`));
    }

    getInitialCards() {
        return fetch(`${this._url}`, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => this._showErrow(res));
    }
}

//создание экземпляра класса
const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json',
        // authorization: `Bearer ${localStorage.getItem('token')}`,
    },
});

export default moviesApi;
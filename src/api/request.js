const {NEXT_PUBLIC_API_URL} = process.env;

const request = async (url, options = {}) => {
    const response = await fetch(`https://62becfba0bc9b125615fd0f7.mockapi.io/api/${url}`, {
        ...options,
        next: {
            revalidate: 30,
        }
    });

    const result = await response.json();

    return result;
}

export default request;
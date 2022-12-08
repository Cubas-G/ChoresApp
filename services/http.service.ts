const baseUrl = 'http://localhost:3000';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxR0o2VDgyVEpWS0tUR0YwUFZQWVEwSDc4IiwiaWF0IjoxNjY4ODIzNjYyLCJleHAiOjIyNjg4MjM2NjJ9.N9pdls_ZwCdK3mo9wP_pmdl05uxHJCkhNwa1i3J3zBg";

export class HttpClient {
    async get<T>(endPoint = "recipes") {
        const response = await fetch(`${baseUrl}/${endPoint}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data: T = await response.json();

        return data;
    }
}
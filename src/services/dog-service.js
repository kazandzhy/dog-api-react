export default class DogService {
  _apiBase = "https://dog.ceo/api/breed";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`);
    }
    return await res.json();
  };

  getAllDogs = async () => {
    const res = await this.getResource(`s/list/all/`);
    let result = Object.keys(res.message).slice(0, 10);
    return result;
  };

  getDog = async (name) => {
    const dog = await this.getResource(`/${name}/images/random`);
    return dog;
  };
}

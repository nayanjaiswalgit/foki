let result = [];

const fetchAlbums = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  result = await response.json();
};

const getAlbums = async () => {
  await fetchAlbums();

  const albumsCount = result.reduce((accumulator, item) => {
    const userId = item.userId;
    accumulator[userId]
      ? (accumulator[userId] += 1)
      : (accumulator[userId] = 1);

    return accumulator;
  }, {});
  console.log(albumsCount);
};

getAlbums();

interface IPost {
    title: string;
    id: number;
    description: string;
};

interface IUser {
    id: number;
    name: string;
    age: number;
};


const fetchData = async<Type>(path: string): Promise<Type> => {
    const response = await fetch(`http://example.com/${path}`);
    return response.json();
}

(async () => {
    const posts = await fetchData<IPost[]>('/users');
    posts[0];
})();
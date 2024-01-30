import { client } from '@/libs/client';
import { ListItem } from '@/components/ListItem';
import { Articles } from '@/app/types/article';

const Home: () => Promise<JSX.Element> = async () => {
  const data: Articles = await client.get({
    endpoint: 'articles',
    queries: { offset: 0 },
  });

  console.log(data);

  return (
    <main className="h-[calc(100vh_-_68px)]">
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        記事一覧
      </h1>
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => {
          return <ListItem key={`list-${i}`} />;
        })}
      </div>
    </main>
  );
};

export default Home;

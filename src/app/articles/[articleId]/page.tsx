import parse from 'html-react-parser';
import { client } from '@/libs/client';

const ArticleDetail = async ({ params }: { params: { articleId: string } }) => {
  const articleId = params.articleId;
  const articleData = await client.get({
    endpoint: 'articles',
    contentId: articleId,
  });

  return (
    <div className="bg-gray-50">
      <div className="px-10 py-6 mx-auto">
        <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
          <img
            className="object-cover w-full shadow-sm h-full"
            src={articleData.eyecatch.url}
          />
          <div className="mt-2">
            <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-500">
              {articleData.title}
            </div>
          </div>
          {articleData.category && (
            <div className="flex items-center justify-start mt-4 mb-4">
              <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg">
                #{articleData.category.name}
              </div>
            </div>
          )}
          <div className="mt-2">
            <div className="prose text-2xl text-gray-700 mt-4 rounded ">
              {parse(articleData.content)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;

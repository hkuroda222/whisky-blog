'use client';
// 一旦use clientを使用
//Error: Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server".

import Image from 'next/image';
import { Content } from '@/types/article';

const microCMSLoader = ({ src, width }: { src: string; width: number }) =>
  `${src}?auto=format&fit=max&w=${width}`;

export const ListItem: React.FC<{ content: Content }> = (props) => {
  const { content } = props;

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <Image
        loader={microCMSLoader}
        className="w-full"
        src={content.eyecatch.url}
        alt="Sunset in the mountains"
        width={300}
        height={200}
      />
      <div className="px-6 py-4">{content.title}</div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{content.category.name}
        </span>
      </div>
    </div>
  );
};

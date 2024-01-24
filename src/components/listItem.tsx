import Image from 'next/image';

export const ListItem: React.FC = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <Image
        className="w-full"
        src="/testImage.jpg"
        alt="Sunset in the mountains"
        width={300}
        height={200}
      />
      <div className="px-6 py-4">タイトル</div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          # タグ
        </span>
      </div>
    </div>
  );
};

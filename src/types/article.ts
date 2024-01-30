export type Articles = {
  contents: [
    {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
      revisedAt: Date;
      title: string;
      content: string;
      eyecatch: {
        url: string;
        height: number;
        width: number;
      };
      category: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        revisedAt: Date;
        name: string;
      };
    },
  ];
  totalCount: number;
  offset: number;
  limit: number;
};

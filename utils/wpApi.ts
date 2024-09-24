import axios from 'axios';
//@ts-ignore
import { convert } from 'html-to-text';

const BASE_URL = 'https://clcgh.org/wp-json/wp/v2/';

const listPosts = async (): Promise<ListPostType[]> => {
  const response = await axios.get(BASE_URL + 'posts');
  const responseData = response.data as any;
  return responseData.map((data: any) => {
    return {
      imageUrl: data.jetpack_featured_media_url,
      id: data.id,
      slug: data.slug,
      content: convert(data.content.rendered),
      title: data.title.rendered,
      excerpt: convert(data.excerpt.rendered),
    };
  });
};

const searchPosts = async (
  searchTerm: string
): Promise<SearchPostResponseType[]> => {
  const respose = await axios.get(BASE_URL + 'search?search=' + searchTerm);
  const responseData = respose.data;
  return responseData.map((data: any) => {
    return {
      id: data.id,
      title: data.title,
    };
  });
};

const getPostById = async (id: string): Promise<ListPostType> => {
  const response = await axios.get(BASE_URL + 'posts/' + id);
  const data = response.data as any;
  console.log(data);
  return {
    imageUrl: data.jetpack_featured_media_url,
    id: data.id,
    slug: data.slug,
    content: convert(data.content.rendered),
    title: data.title.rendered,
    excerpt: convert(data.excerpt.rendered),
  };
};
export { listPosts, searchPosts, getPostById };

export type ListPostType = {
  imageUrl: string;
  id: string;
  slug: string;
  content: string;
  title: string;
  excerpt: string;
};

export type SearchPostResponseType = {
  title: string;
  id: number;
};

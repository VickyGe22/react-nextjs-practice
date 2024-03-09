'use client'
 
import { useRouter } from 'next/navigation'

import Image from "next/image";
import Link from "next/link";
import PostLink from "./blog/Postlist";
import { Links } from "./component/links";


export default function Home() {

  interface Post {
    id: string;
    slug: string;
    title: string;
  }

  interface PostLinkProps {
    posts: Post[];
  }

  const postData: Post[] = [
    {id: '1', slug: 'aaa', title: 'aaa'},
    {id: '2', slug: 'bbb', title: 'bbb'},
    {id: '3', slug: 'ccc', title: 'ccc'}
  ];

  const router = useRouter();

  return (
    <>
      {/* <h1 className='text-4xl text-pink-400'> Home page</h1> <br/>
      <Link href={"/dashboard/settings"}>Dashboard</Link><br/>
      <PostLink posts={postData}/>
      <Links /> */}

      <button type={'button'} onClick={()=> router.push('/dashboard/settings')}>  
        Dashboard
      </button>

    </>
  );
}


// 导航到一个新页面时，直接滚动到页面上特定的位置，你可以在 URL 中使用哈希（#）链接
// <Link href="/dashboard#settings">Settings</Link>
 

// 禁用跳转到新页面时自动滚动到顶部的行为：
// router.push('/dashboard', null, { scroll: false })
// <Link href="/dashboard" scroll={false}>
//   Dashboard
// </Link>
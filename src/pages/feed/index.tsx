import { GetServerSideProps } from "next";
import Head from 'next/head'
import { FormEvent, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { supabase } from "../../services/supabase";

export default function Feed(props: any) {
  // const { user } = useContext(AuthContext)
  useContext(AuthContext)

  const [newPost, setNewPost] = useState('')
  const [posts, setPosts] = useState(props.posts);

  useEffect(() => {
    supabase
      .from('posts')
      .on('INSERT', response => {
        console.log(response)
        setPosts((state: any) => [...state, response.new])
      })
      .subscribe();
  }, []);

  async function sendNewPost(event: FormEvent) {
    event.preventDefault()

    if (!newPost.trim()) {
      return;
    }

    const { error } = await supabase.from('posts').insert({
      content: newPost,
    })

    if (error) {
      console.log(error);
      return;
    }

    setNewPost('');
  }

  return (
    <div>
      <Head>
        <title>Feeds</title>
      </Head>
      <form onSubmit={sendNewPost}>
        <textarea 
          placeholder="Write new post..."
          onChange={e => setNewPost(e.target.value)}
          value={newPost}
        />
        <button type="submit">Send</button>
      </form>

      <ul>
        {posts? posts.map((post: any) => {
          return (
            <li key={post.id}>
              {post.content}
            </li>
          );
        }): <li>Nenhum item cadastrado!</li>}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { user } = await supabase.auth.api.getUserByCookie(ctx.req)

  if (!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const response = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: true })

  return {
    props: {
      posts: response.body,
    }
  }
}
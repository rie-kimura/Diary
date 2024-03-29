import { useState, useEffect } from 'react';

// コンポーネント(各画面)のインポート
import Post from './Post.jsx';
import Detail from './Detail.jsx';
import Mypage from './Mypage.jsx';


const Home = (props) => {

  const [page, setPage] = useState('home');   // コンポーネント切り替え用のstate
  const [key, setKey] = useState('');         // クリックされた投稿のkeyを取得する用のstate
  const [post, setPost] = useState('');       // クリックされた投稿内容を取得する用のstate
  const [comments, setComments] = useState('');

  // console.log(page)
  // console.log(key)
  // console.log(propss.uid)
  // console.log(comments)

  // ブラウザバック防止
  history.pushState(null, null, location.href);
  window.addEventListener('popstate', (e) => {
    history.go(1);
  });

  // コンポーネントの切り替え
  switch (page) {
    case 'reply':
      return (
        <Detail uid={props.uid} name={props.name} setPage={setPage} setComments={setComments} comments={comments} pkey={key} post={post} />
      );
    case 'mypage':
      return (
        <Mypage uid={props.uid} name={props.name} setPage={setPage} pkey={key} post={post} setComments={setComments} comments={comments} experiment={props.experiment}/>
      );
    default:
      return (
        <Post uid={props.uid} name={props.name} setPage={setPage} setKey={setKey} setPost={setPost} setComments={setComments} experiment={props.experiment}/>
      );
  }
}

export default Home; // 外部から呼び出せるようにする
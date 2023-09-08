export const getPosts = async () => {
  const url = "https://apitestposts.onrender.com/data";
  const resp = await fetch(url);
  const data = await resp.json();

  const postsData = data[0].posts.map((post) => ({
    id: post.id,
    userId: post.userId,
    image: post.image,
    caption: post.caption,
    likes: post.likes,
    comments: post.comments,
    avatar: post.avatar,
    username: post.username
    } 
  ));


  return postsData;

};

export const getUsers = async () => {
    const url = "https://apitestposts.onrender.com/data";
    const resp = await fetch(url);
    const data = await resp.json();
  
    const usersData = data[0].users.map(( user) => ({
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      frontpage: user.frontpage,
      followers: [],
      following: [],
      posts: [], // Observa que aquí accedemos a "comments" en lugar de "coments"
    }
    ));
  
  
    return usersData;
  
  };

 
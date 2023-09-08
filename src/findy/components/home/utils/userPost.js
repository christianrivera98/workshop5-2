import { useState } from "react";
import { getPosts } from "../../../../helpers/getPosts";

export const Posts = () => {
  const [usersPosts, setUsersPosts] = useState();

  const userPost = async () => {
      try {
        const response = await getPosts();
        setUsersPosts(response)
      } catch (error) {
        console.log(error);
        return []
      }
    }

    useEffect(() => {
      userPost()
    
    }, [])
  
   return (
    <div className="container-post">
    {
      usersPosts?.map((post) => (
        post?.posts.length > 0 && (
          <div key={post.id}>
        <CardPost info={post}/>
      </div>
        ) 
      ))
    }
    </div>

   ); 

}



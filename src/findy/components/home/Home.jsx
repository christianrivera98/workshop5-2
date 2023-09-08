import { useEffect, useState } from "react";
import StoriesCarousel from "./carousel/StoriesCarousel";
import './styles/Home.scss'
import { getPosts, getUsers } from "../../../helpers/getPosts";
import HomeFeed from "./feed/HomeFeed";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import { NewPost } from "../newPost/NewPost";
import HeaderHome from "./HeaderHome";


const Home = () => {

    const [usersData, setUsersData] = useState([]); 

    useEffect(() => {
        const fetchUsersData = async () => {
          const users = await getUsers();
          setUsersData(users);
        };
        fetchUsersData();
      }, []);

      const [postsData, setPostsData] = useState([]);

      useEffect(() => {
        const fetchPostsData = async () => {
          const posts = await getPosts();
          setPostsData(posts);
        };
        fetchPostsData();
      }, []);   

      const {activePost} = useSelector (state => state.findy);

  return (
    <>
      <div className="home-container">
        <HeaderHome />
        <StoriesCarousel users={usersData}/>
        {
          (!!activePost)
            ? <NewPost/>
            : null
        }
        <HomeFeed posts={postsData} />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
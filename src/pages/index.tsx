// import Image from "next/image";
import Landing from '../components/Homepage/Homepage';
import withRedirectIfAuth from '@/components/withRedirectIfAuth';


function Home() {
  return (
    <div>
       <Landing />
    </div>
  );
}

export default withRedirectIfAuth(Home);

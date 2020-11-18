import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head'

interface HomeServerSideProps {
  data: [
    {
      name: string;
      seq: number;
    }
  ];
}

const Home: React.FC<HomeServerSideProps> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2>{data}</h2>
      </main>

    </div>
  )
}

export async function getStaticProps(context) {
  const data = await axios.get('http://localhost:3333')
    .then(response => {
      const data = response.data;
      return data;
    });
  return {
    props: data,
  }
}

export default Home;

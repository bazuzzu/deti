import Container from "../components/container"
import MoreStories from "../components/more-stories"
import HeroPost from "../components/hero-post"
import Intro from "../components/intro"
import Timetable from "../components/timetable"
import Layout from "../components/layout"
import { getAllPosts } from "../lib/api"
import Head from "next/head"
import { CMS_NAME } from "../lib/constants"

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Расписание и цены 20/21</title>
        </Head>
        <Container>
          <Intro />
          <Timetable />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ])

  return {
    props: { allPosts },
  }
}

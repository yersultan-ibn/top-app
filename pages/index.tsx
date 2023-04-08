import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Htag, Rating } from "../components";
import { Button } from "../components";
import { P } from "../components";
import { Tag } from "../components";
import { useState } from "react";
import { Layout, withLayout } from "../layout/Layout";
const inter = Inter({ subsets: ["latin"] });

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <Layout>
      <Htag tag="h1">TEXT</Htag>
      <Button appearance="primary">Button</Button>
      <P size="m">Text pm</P>
      <P size="l">Text pl</P>
      <P size="s">Text ps</P>
      <Tag size="m">Tag</Tag>
      <Rating rating={4} isEditable={true} setRating={setRating} />
    </Layout>
  );
}
export default withLayout(Home);

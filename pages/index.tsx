import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Htag } from "../components";
import { Button } from "../components";
import { P } from "../components";
import { Tag } from "../components";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {
  return (
    <>
      <div>
        <Htag tag="h1">TEXT</Htag>
        <Button appearance="primary">Button</Button>
        <P size="m">Text P2</P>
        <P size="l">Text 1P</P>
        <P size="s">Text P1</P>
        <Tag size="m">Tag</Tag>
      </div>
    </>
  );
}

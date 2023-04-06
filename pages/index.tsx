import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Htag } from "../components";
import { Button } from "../components";
import { P } from "../components";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {
  return (
    <>
      <div>
        <Htag tag="h2">Текст</Htag>
        <Button appearance="primary" arrow="right">
          Кнопка
        </Button>

        <Button appearance="ghost" arrow="down">
          Кнопка
        </Button>
        <P size="s">Litle</P>
        <P size="m">Medium</P>
        <P size="l">BIG</P>
      </div>
    </>
  );
}

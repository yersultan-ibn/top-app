import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Htag } from "@/components/Htag/Htag";
import { Button } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {
  return (
    <>
      <div>
        <Htag tag="h2">Текст</Htag>
        <Button appearance="primary" className="'fadf">
          Кнопка
        </Button>
   
      </div>
    </>
  );
}

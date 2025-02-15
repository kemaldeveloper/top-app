import { Button, HTag, Paragraph, Rating, Tag } from '@/components';
import { Layout } from '@/layout/Layout';
import Head from 'next/head';
import { JSX, useState } from 'react';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HTag tag="h1">Заголовок</HTag>
        <Button appearance="primary" arrow="right">
          Кнопка
        </Button>
        <Button appearance="ghost" arrow="down">
          Кнопка
        </Button>
        <Paragraph size="s">Маленький</Paragraph>
        <Paragraph>Средний</Paragraph>
        <Paragraph size="l">Большой</Paragraph>
        <Tag color="ghost" size="s">
          ghost
        </Tag>
        <Tag color="red">red</Tag>
        <Tag color="grey">grey</Tag>
        <Tag color="green" size="m">
          green
        </Tag>
        <Tag color="primary">primary</Tag>
        <Rating rating={rating} isEditable setRating={setRating} />
      </div>
    </Layout>
  );
}


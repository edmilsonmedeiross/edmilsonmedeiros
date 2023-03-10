import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { Component, useContext, useEffect } from 'react';

import Header from 'components/Header';
import SideBar from 'components/SideBar';

import styles from './slug.module.sass';

import Prismic from '@prismicio/client';
import { AppContext } from 'context/AppContext';
import { getPrismicClient } from 'services/prismic';

type ProjectDetailsProps = {
  project: {
    slug: string;
    title: string;
    description: Component[];
    thumbnail: string;
    github: string;
    online: string;
  };
};

function ProjectDetail({ project }: ProjectDetailsProps) {
  const { isMounted, setIsMounted } = useContext(AppContext);

  useEffect(() => {
    setIsMounted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isMounted ? (
        <SideBar />
      ) : (
        <>
          <Header />
          <section className={styles.projectContainer}>
            <div className={styles.contentCard}>
              <h1>{project.title}</h1>
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={600}
                height={400}
                quality={100}
              />
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {project.description.map((paragraph: any) => {
                if (paragraph.type === 'paragraph') {
                  return <p key={paragraph.text}>{paragraph.text}</p>;
                }
                if (paragraph.type === 'heading1') {
                  return <h1 key={paragraph.text}>{paragraph.text}</h1>;
                }
                if (paragraph.type === 'heading2') {
                  return <h2 key={paragraph.text}>{paragraph.text}</h2>;
                }
                if (paragraph.type === 'heading3') {
                  return <h3 key={paragraph.text}>{paragraph.text}</h3>;
                }
              })}
            </div>
            <nav className={styles.navButtons}>
              <Link href={project.github} target="_blank">
                Github
              </Link>
              <Link href={project.online} target="_blank">
                Online
              </Link>
              <Link href={'/projects'}>Voltar</Link>
            </nav>
          </section>
        </>
      )}
    </>
  );
}

export default ProjectDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = await getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'projeto'),
  ]);

  const paths = response.results.map((project) => ({
    params: { slug: project.uid },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const prismic = getPrismicClient();

  const response = await prismic.getByUID('projeto', slug, {});

  const project = {
    slug: response.uid,
    title: response.data.name[0].text,
    description: response.data.description,
    thumbnail: response.data.thumb.url,
    github: response.data.github.url,
    online: response.data.online?.url,
  };

  return {
    props: {
      project,
    },
    revalidate: 60 * 60 * 24, // 24 hours revalidate
  };
};

//coment

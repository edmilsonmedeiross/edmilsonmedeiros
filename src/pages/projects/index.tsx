import { GetStaticProps } from 'next';
import React, { useContext, useEffect } from 'react';

import Header from 'components/Header';
import ProjectCard from 'components/ProjectCard';
import SideBar from 'components/SideBar';

import styles from './styles.module.sass';

import { getPrismicClient } from '../../services/prismic';

import Prismic from '@prismicio/client';
import { AppContext } from 'context/AppContext';

type Project = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  github: string;
  online: string;
};

interface ProjectProps {
  projects: Project[];
}

function Projects({ projects }: ProjectProps) {
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
          <main className={styles.container}>
            <div className={styles.content}>
              {projects.map((project, index) => (
                <ProjectCard proj={project} key={index} />
              ))}
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projects = response.results.map((project) => ({
    slug: project.uid,
    title: project.data.name[0].text,
    description: project.data.description,
    thumbnail: project.data.thumb.url,
    github: project.data.github.url,
    online: project.data.online?.url,
  }));

  return {
    props: {
      projects,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
